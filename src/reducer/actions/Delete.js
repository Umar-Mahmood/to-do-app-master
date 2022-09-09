import { db } from "../../firebase";



db.settings({ timestampsInSnapshota: true });

const Delete = (probs) => {
  const task = probs[0]
  const user = probs[1]
  var id = task[0]
  console.log(user)
  console.log(task)
  console.log(id)

  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
  
    firestore
      .collection(user)
      .doc(id)
      .delete()
      .then(()=>{
        dispatch({ type: "Delete", id })
      }).catch(console.log("Something wrong"));
  };
};
export default Delete;
