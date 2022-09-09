import { db } from "../../firebase";

db.settings({ timestampsInSnapshota: true });

const Edit = (task) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(task)
    const id = task[0]
    const title = task[1]
    const discription = task[2]
    
    firestore
      .collection(task[3])
      .doc(task[0])
      .update({title:title,Discription:discription})
      .then(()=>{
        dispatch({ type: "Edit",task})
      }).catch(console.log("Something wrong"));
  };
};

export default Edit;
