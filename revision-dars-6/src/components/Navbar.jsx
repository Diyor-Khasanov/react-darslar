import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
