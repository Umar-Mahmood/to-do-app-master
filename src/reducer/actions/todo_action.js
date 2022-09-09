import { db } from "../../firebase";

db.settings({ timestampsInSnapshota: true });

const Add_todo = (todo) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(todo)
    firestore
      .collection(todo[0])
      .add({ title: todo[1], Discription: todo[2] })
      .then(() => {
        firestore
        .collection(todo[0])
        .get()
        .then((query) => {
          let a;
          query.forEach((doc) => {
            a = [doc.id,doc.data()];
            dispatch({ type: "ADD_TODO", a });
          });
        });
      });

    /*
db.collection("todo").add({title:"hello",Description:todo}).then(()=> { 
dispatch({type:"ADD_TODO",todo})
} ).catch(()=>{console.log("ni chla")})
*/
  };
};

export default Add_todo;
