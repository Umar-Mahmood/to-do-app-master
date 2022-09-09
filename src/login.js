import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import UseLocalstorage from "./Uselocalstorage";

const Login = (probs) => {


  const {user} = probs;
  const history = useHistory();
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [warning, setwarning] = useState("");
  //const [error,seterror] = useState(null);
  const [local_user,setlocal_user] = UseLocalstorage("user")

   if(local_user==="none"){
     console.log("no looged in user")
   }
   else if(!local_user){
     setlocal_user("none")
   }
   else{
    probs.dispatch({type:"set_local_user",local_user})
   }


   if(user){
     history.push("/dashboard")
   }


  async function handellogin(e, mail, password) {
    e.preventDefault();
    try {
      await auth
        .signInWithEmailAndPassword(mail, password)
        .then(() => {
          setlocal_user(mail)
          probs.dispatch({ type: "login", mail })
          history.push("/dashboard");
          alert("login successfull.. You are now looged in as :" + mail);
        })
        .catch((err) => setwarning(err.message));
    } catch {
      // if (!password && !mail) {
      //   setwarning("Please Enter Mail and  Password");
      // } else if (!password) {
      //   setwarning("Please Enter Password");
      // } else if (!mail) {
      //   setwarning("Please Enter Mail");
      // } else {
      //   setwarning("Invalid Mail and Password");
      // }
    }
  }
  return (
    <div className="container mt-5 text-light   ">
      <form className="card col-sm-8 col-md-6 col-lg-4 m-auto shadow  bg-secondary">
        <h3 className="text-center text-light">Login</h3>

        <div className="text-start col-12 text-center">
          <label className=" col-10 text-start ">Email</label>
          <input
            className="col-10 m-auto"
            type="email"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        {warning && (
          <div>
            {" "}
            <p className="bg-danger mt-2 mb-2 col-10 m-auto text-light text-center py-2">
              {warning}
            </p>
          </div>
        )}

        <div className="text-start col-12 text-center">
          <label className=" col-10 text-start ">Password</label>
          <input
            className="col-10 m-auto"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="btn text-light my-2 m-auto col-4 btn-info btn-block"
          onClick={(e) => handellogin(e, mail, password)}
        >
          Login
        </button>

        <Link to="/signup">
          <p className="text-light"> -Signup-</p>
        </Link>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};


export default connect(mapStateToProps)(Login);
