import { setThemeDark, setThemeLight } from "../features/theme/themeSlice";
import { useSelector, useDispatch } from "react-redux";

const ThemePage = () => {
  const theme = useSelector((state) => state.theme);
  const disPatch = useDispatch();
  return (
    <>
      <h2>{theme}</h2>
      {theme === "light" ? (
        <button onClick={() => disPatch(setThemeDark())}>dark mode</button>
      ) : (
        <button onClick={() => disPatch(setThemeLight())}>light mode</button>
      )}
    </>
  );
};

export default ThemePage;
