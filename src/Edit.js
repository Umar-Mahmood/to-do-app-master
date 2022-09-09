import { connect } from "react-redux";
import Add_todo from "./reducer/actions/todo_action";
import Edit from "./reducer/actions/Edit";
import { useState } from "react";



const Edit_comp = (props) => {
  const con_delete = props.con_delete;
  const setedit = props.setedit;
  const setedittask = props.setedittask;
  const edittask = props.edittask;

  const [discription, setdisc] = useState(edittask[2]);

  const [title, settitle] = useState(edittask[1]);

  const handelAdd = (e) => {
    e.preventDefault();
    let task = [edittask[0], title, discription];
    props.Edit(task);
    setedit(false);
  };
  const handelCancel = (e) => {
    e.preventDefault();
    setedit(false);
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => handelAdd(e)}
        className={" card my-4 col-sm-6 col-md-6 col-lg-4 m-auto shadow  bg-secondary edit-card  "+ (con_delete && "blur") }
      >
        <h3 className="text-center text-light">Edit task</h3>
        <input
          className="col-10 m-auto my-4"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          id="task_todo"
          type="text"
        ></input>
        <input
          className="col-10 m-auto my-2"
          placeholder="Discription"
          value={discription}
          onChange={(e) => {
            setdisc(e.target.value);
          }}
          id="task_discription"
          type="text"
        ></input>
        <hr />
        <div className="row">
          <button
            className="col-1 m-auto btn text-light my-2 m-auto col-4 btn-info btn-block"
            onClick={(e) => handelAdd(e)}
          >
            Update
          </button>
          <button
            className="col-1 m-auto btn text-light my-2 m-auto col-4 btn-info btn-block"
            onClick={(e) => handelCancel(e)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    todo: state.todo.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Edit: (task) => {
      dispatch(Edit(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit_comp);
