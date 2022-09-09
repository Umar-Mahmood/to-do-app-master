import { connect } from "react-redux";
import {  useHistory } from "react-router-dom";
import Add_list_model from "./Add_list_model";
import { auth } from "./firebase";
import UseLocalstorage from "./Uselocalstorage";

const Sign_in_comp = (probs) => {
 const [local_user,setlocal_user] = UseLocalstorage("user")
 // console.log(local_user)
  const setedit = probs.setedit;
  const setadd = probs.setadd;
  const { user } = probs;
  const history = useHistory();
  async function handellogout(e) {
    e.preventDefault();
    try {
      await auth.signOut();
      setlocal_user("none")
      probs.dispatch({ type: "logout" });
      alert("logout succesfull");
      
      history.push("/");
    } catch {}
  }

  const handelAdd = () => {
    setedit(false);
    setadd(true);
  };

  return (
    <div className="text-light">
    
    <Add_list_model />


      <button
        className=" btn btn-info m-2 text-light col"
        onClick={(e) => handellogout(e)}
      >
        Logout
      </button>
      {user && (
        <p type="button" className="border-primery ml-2 rounded btn btn-danger">
          {user.split("@")[0]}
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(Sign_in_comp);
