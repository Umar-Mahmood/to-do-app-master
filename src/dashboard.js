/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Add_list_modal from "./Add_list_model";
import Confirm_delete from "./confirm_delete";
import Create from "./create";
import Edit_comp from "./Edit";
import Edit_modal from "./Edit_modal";
import Mapcards from "./mapCards";
import Add_todo from "./reducer/actions/todo_action";
import UseLocalstorage from "./Uselocalstorage";

const Dashboard = (props) => {
  const history = useHistory()
 // const [local_user,setlocal_user] = UseLocalstorage("user")
 // console.log(local_user)
  const [con_delete,setcon_delete]=useState(false)
  const [delete_id,setdelete_id]=useState(null)

  const edit = props.edit;
  const setedit = props.setedit;
  const [edittask,setedittask]=useState([]);

  const add = props.add;
  const setadd = props.setadd;
  const { user } = props;
  // if(local_user!=="none"){
  // props.dispatch({type:"set_local_user",local_user})
  // }
  // if(local_user==="none"){
  //   console.log("no looged in user")
  // }
  // else if(!local_user){
  //   setlocal_user("none")
  // }
  // else{
  //  props.dispatch({type:"set_local_user",local_user})
  // }


  useEffect(()=>{
  //   if(!local_user){
  //     console.log("no user")
  //   }
  //   else if(!user && !local_user) {
  //     console.log("hello")
  //     history.push("/dashboard");
  //   }
  //   else{
  //   props.dispatch({ type: "set_local_user", local_user })
  // }
})
  

 

  return (
    <div>
     
    { !user && <div className="card col-10 m-auto bg-danger my-5 text-light text-center"><h1>You are Logged out</h1></div>}
    {add && <Create setadd = {setadd} con_delete={con_delete}  />}
   {/*  { edit && < Edit_comp setedit = {setedit} edittask={edittask} setedittask={setedittask} con_delete={con_delete} />}
     */}{user && <Mapcards setdelete_id={setdelete_id} setcon_delete={setcon_delete} setadd={setadd} edit = {edit} setedit = {setedit} edittask = {edittask} setedittask = {setedittask} con_delete={con_delete} />} 
    {con_delete && <Confirm_delete delete_id = {delete_id} setcon_delete={setcon_delete}  edittask = {edittask} />}
     {edit && < Edit_modal setedit = {setedit} edittask={edittask} setedittask={setedittask} con_delete={con_delete} />}
    
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    todo: state.todo
  };
};

export default connect(mapStateToProps)(Dashboard);
