import { Link } from "react-router-dom";

const Sign_out_comp = () => {
  
  return (
    <div>
      <Link to="/signup">
        {" "}
        <button type="button" className=" btn btn-info text-light">
          Register
        </button>
      </Link>
      <Link to="/">
        {" "}
        <button type="button" className=" btn btn-info text-light">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Sign_out_comp;
