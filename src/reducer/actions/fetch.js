import { db } from "../../firebase";

db.settings({ timestampsInSnapshota: true });

const Fetch =(user) => {

  console.log(user)
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(user)
      .get()
      .then((query) => {
        let a;
        query.forEach((doc) => {
          a = [doc.id,doc.data()];
          dispatch({ type: "Fetch", a });
        });
      });
 
  };
};



export default Fetch;
