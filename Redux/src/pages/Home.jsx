import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/AuthSlice";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is auth page</h1>

      <h2>
        {isLoggedIn ? "welcome user this is home page" : "please login first"}
      </h2>

      {isLoggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default Home;
