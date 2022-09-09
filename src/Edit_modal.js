import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Edit from "./reducer/actions/Edit";
import { useState } from "react";



const Edit_modal = (props) => {
  const user = props.user;
    const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [id_0,title_0,Discription_0] = props.task
  const [title,settitle]=useState(title_0)
  const [discription,setdisc]=useState(Discription_0)



  const handelAdd = (e) => {
    e.preventDefault();
    let task = [id_0, title, discription,user];
    props.Edit(task);
    toggle()
  };
 

  return ( <div className="d-inline col-5">
    <Button  className="col-5  m-auto btn text-light my-2 m-auto btn-info btn-block" color="info" onClick={toggle}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle}>Edit</ModalHeader>
      <ModalBody>
      <div className="">
      <form
        onSubmit={(e) => handelAdd(e)}
      >
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
      </form>
    </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={(e) => handelAdd(e)}>Edit</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit_modal);
