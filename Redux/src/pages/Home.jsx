import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/AuthSlice";
import { setThemeDark, setThemeLight } from "../features/theme/themeSlice";
const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const theme = useSelector((state) => state.theme);
=======
  const theme = useSelector((state)=> state.theme);
>>>>>>> Stashed changes
=======
  const theme = useSelector((state)=> state.theme);
>>>>>>> Stashed changes
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
      <h2>{theme}</h2>
      {theme === "light" ? (
        <button onClick={() => dispatch(setThemeDark())}>dark mode</button>
      ) : (
        <button onClick={() => dispatch(setThemeLight())}>light mode</button>
      )}
    </div>
  );
};

export default Home;
