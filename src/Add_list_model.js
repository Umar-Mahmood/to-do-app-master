import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Add_todo from './reducer/actions/todo_action';

const Add_list_modal = (props) => {
const user = props.user;

  const [error, seterror] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


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
    toggle()
  };

  
  return (
    <div className="d-inline">
      <Button color="danger " onClick={toggle}>Add Task</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader  className=" text-center " toggle={toggle}>Add task</ModalHeader>
        <ModalBody>
        <form
        onSubmit={(e) => handelAdd(e)}
        className=" "
      >
        
        <input
          className="col-12 m-auto my-4"
          placeholder="Title"
          id="task_todo"
          type="text"
        ></input>
        {error && <p className="bg-danger text-center text-light col-8 m-auto rounded">{error}</p>}
        <input
          className="col-12 m-auto my-4"
          placeholder="Discription"
          id="task_discription"
          type="text"
        ></input>
      </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handelAdd}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Add_list_modal);