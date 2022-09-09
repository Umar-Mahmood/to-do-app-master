import { connect } from "react-redux";
import Delete from "./reducer/actions/Delete";



const Confirm_delete = (props) => {
    const user = props.user;
    const setcon_delete=props.setcon_delete;
    const edittask = props.edittask

const handelDelete = ()=>{
props.Delete([edittask,user]);
setcon_delete(false)
}
  const handelCancel = (e) => {
    e.preventDefault();
    setcon_delete(false);
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => handelDelete(e)}
        className=" card my-4 col-sm-6 col-md-6 col-lg-4 m-auto shadow  bg-secondary edit-card"
      >
        <h5 className="text-center text-light">Confirm Delete</h5>
        <p className="text-center text-light">Are you sure?</p>
        <hr />
        <div className="row">
          <button
            className="col-1 m-auto btn text-light my-2 m-auto col-4 btn-danger btn-block"
            onClick={(e) => handelDelete(e)}
          >
            Yes
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
    Delete: (id) => {
        dispatch(Delete(id));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm_delete);
