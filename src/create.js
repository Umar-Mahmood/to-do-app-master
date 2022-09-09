import { useState } from "react";
import { connect } from "react-redux";
import Add_todo from "./reducer/actions/todo_action";


const Create = (props) => {
  const con_delete = props.con_delete;
const user = props.user;
console.log(user)
  const setadd = props.setadd;
  const [error, seterror] = useState("");
  const handelAdd = (e) => {
    e.preventDefault();
    let a = document.getElementById("task_todo");
    let b = document.getElementById("task_discription");
    let todo = [user,a.value, b.value];
    if (!a.value) {
      seterror("Please add title");
      return;
    }
    else if (!b.value) {
      seterror("Please add discription");
      return;
    }
    a.value = "";
    b.value = "";

    props.Add_todo(todo);
    seterror("")
  };
  const handelCancel = () => {
    setadd(false);
  };

  return (
    <div className={con_delete && "blur" }>
      <form
        onSubmit={(e) => handelAdd(e)}
        className=" card my-4 col-sm-8 col-md-6 col-lg-6 m-auto shadow  bg-secondary"
      >
        
        <input
          className="col-10 m-auto my-4"
          placeholder="Title"
          id="task_todo"
          type="text"
        ></input>
        {error && <p className="bg-danger text-center text-light col-8 m-auto rounded">{error}</p>}
        <input
          className="col-10 m-auto my-2"
          placeholder="Discription"
          id="task_discription"
          type="text"
        ></input>
        <div className="row">
          <button
            className="col-1 m-auto btn text-light my-2 m-auto col-4 btn-info btn-block"
            onClick={(e) => handelAdd(e)}
          >
            Add
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
    Add_todo: (todo) => {
      dispatch(Add_todo(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
