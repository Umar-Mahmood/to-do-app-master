import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Sign_in_comp from "./Signin_comp";
import Sign_out_comp from "./Sign_out_comp";
import UseLocalstorage from "./Uselocalstorage";
import { connect } from "react-redux";


const Navbar = (probs) => {

  const setedit = probs.setedit;
  const add = probs.add;
  const setadd = probs.setadd;
  const {user} = probs;
  const [user_2,setuser_2]=useState(user)
  const [mail, setmail] = useState("");
  const history = useHistory();
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info d-flex justify-content-between">
      <a className="navbar-brand text-light mx-3" href="/">
        <h3>Todo App</h3>
      </a>
      <div>
       {user && <Sign_in_comp  add = {add} setadd = {setadd} setedit={setedit} />} 
        {!user && <Sign_out_comp  />}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Navbar);
