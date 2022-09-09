import { useEffect } from "react";
import { connect } from "react-redux";
import Edit_modal from "./Edit_modal";
import Delete from "./reducer/actions/Delete";
import Edit from "./reducer/actions/Edit";
import Fetch from "./reducer/actions/fetch";

const Mapcards = (props) => {
  const user = props.user;
  const setdelete_id =props.setdelete_id
  const con_delete = props.con_delete;
  const setcon_delete = props.setcon_delete;
  const setadd = props.setadd;
  const edit = props.edit;
  const setedit = props.setedit;
  const setedittask = props.setedittask;

  const { todo } = props.todo;
  useEffect(() => {
    if (todo.length === 0) {
      props.Fetch(user);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  const handelDelete = (task) => {
  setcon_delete(true)
  setdelete_id(task[0])
  setedittask(task);
    //props.Delete(id);
  };
  const handelEdit = (task) => {
    setadd(false);
    setedit(true);
    setedittask(task);
    //props.Edit(id);
  };

  return  todo.map((task) => {
    return (
      <div key={task[0]}>
        <div
          className={
            "shadow card col-8 m-auto my-2 row text-center " + ((edit|| con_delete) && " blur")
          }
        >
          <h5 className=" col-11 m-auto"> Task : {task[1]}</h5>
          <p className=" col-11 m-auto"> {task[2]}</p>
          <div className="row">
            <button
              className="col-2 m-auto btn text-light my-2 m-auto btn-info btn-block"
              onClick={() => {
                handelDelete(task);
              }}
            >
              Remove
            </button>
          <Edit_modal task = {task} />
            {/* <button
              className="col-2 m-auto btn text-light my-2 m-auto btn-info btn-block"
              onClick={() => {
                handelEdit(task[0]);
              }}
            >
              Edit
            </button> */}
         
          </div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    todo: state.todo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Fetch: (user) => {
      dispatch(Fetch(user));
    },
    Delete: (id) => {
      dispatch(Delete(id));
    },
    Edit: (id) => {
      dispatch(Edit(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mapcards);
