import { useTheme } from "@contexts/ThemeContext";

export default function FunctionBar() {

  const { theme, setTheme } = useTheme();


  function OnChangingTheme() {
    if (theme.id === "dark") {
      setTheme({ id: "light" });
    }
    else {
      setTheme({ id: "dark" });
    }
  }

  return (
    <div>
      <button onClick={OnChangingTheme}>
        <img style={{ width: "2rem" }} src="/lamp.png" alt="lamp icon" />
      </button>
    </div >
  );
}
