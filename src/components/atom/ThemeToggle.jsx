import Button from "./Button";
import { useTheme } from "@/context/ThemeProvider";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      icon={theme == "light" ? faMoon : faSun}
      onClick={toggleTheme}
      classNameBtn={"text-slate-300 p-1 rounded-md hover:bg-slate-400"}
    />
  );
}
