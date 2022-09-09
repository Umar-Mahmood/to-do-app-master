import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router,Route, Switch,Redirect,useHistory } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import Navbar from "./Navbar";
import Sign from "./signup";
import UseLocalstorage from "./Uselocalstorage";
function App(props) {
   const history = useHistory();
  const [add ,setadd]=useState(false)
  const [edit,setedit]=useState(false);

  // const [local_user,setlocal_user] = UseLocalstorage("user")
  //  if(local_user==="none"){
  //    console.log("no looged in user")
  //  }
  //  else if(!local_user){
  //    setlocal_user("none")
  //  }
  //  else{
  //   props.dispatch({type:"set_local_user",local_user})
  //  }
  useEffect(()=>{
   
  }
  )
 
  
  return (
    <Router>
<Navbar add = {add} setadd = {setadd} setedit={setedit}/>
   <Switch>
     <Route exact path="/"><Login /></Route>
     <Route exact path="/signup"><Sign/></Route>
     <Route exact path="/dashboard" ><Dashboard add = {add} setadd = {setadd} edit={edit} setedit={setedit} /></Route>
   </Switch>
   

 </Router>
 );
}


export default App;
