import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import UseLocalstorage from "./Uselocalstorage";


const Sign = (probs) => {
  const [local_user,setlocal_user] = UseLocalstorage("user")

  const history = useHistory();
  const {user} = probs;
  const [warning, setwarning] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [name, setname] = useState("");
  
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

  async function handelsignup(e, mail, password, conpassword) {
    e.preventDefault();
    if (password === conpassword) {
      try {
        auth
          .createUserWithEmailAndPassword(mail.toString(), password)
          .then(() => {
            history.push("./");
          })
          .catch((err) => {
            setwarning(err.message);
          });
      } catch {
        setwarning("Invalid Mail or Password");
      }
    } else if (!password && !mail && !conpassword) {
      setwarning("please enter mail and  password");
    } else if (!password) {
      setwarning("please select a  password");
    } else if (!conpassword) {
      setwarning("please confirm your password");
    } else if (!mail) {
      setwarning("please enter your mail");
    } else {
      setwarning("passwords does not match");
    }
  }

  return (
    <div className="container mt-5 text-light ">
      <form className="card col-sm-8 col-md-6 col-lg-4 m-auto shadow  bg-secondary">
        <h3 className="text-center text-light">Sign up</h3>

        <div className="text-start col-12 text-center">
          <label className=" col-10 text-start ">Name</label>
          <input
            className="col-10 m-auto"
            type="mail"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        <div className="text-start col-12 text-center">
          <label className=" col-10 text-start ">Email</label>
          <input
            className="col-10 m-auto"
            type="mail"
            required
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        {warning && (
          <p className="bg-danger border border-danger rounded col-10 m-auto mt-2 mb-2 bg-red text-light text-center py-2">
            {warning}
          </p>
        )}

        <div className="text-start col-12 text-center">
          <label className=" col-10 text-start ">Password</label>
          <input
            className="col-10 m-auto"
            type="password"
            minLength="6"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <div className="text-start col-12 text-center">
          <label className=" col-10 text-start ">Confirm Password</label>
          <input
            className="col-10 m-auto"
            type="password"
            minLength="6"
            required
            value={conpassword}
            onChange={(e) => setconpassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="btn text-light my-2 m-auto col-4 btn-info btn-block"
          onClick={(e) => handelsignup(e, mail, password, conpassword)}
        >
          Register
        </button>

        <Link to="/">
          <p className="text-light"> Login</p>{" "}
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

export default connect(mapStateToProps)(Sign);
