import React, { useEffect, useState } from "react";
// import "../../App.scss";
const Dark = React.lazy(() => import("../../assets/Themes/dark.scss"));
const Light = React.lazy(() => import("../../assets/Themes/light.scss"));

const ThemeSelector = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <React.Suspense fallback={null}>
        {theme === "light" && <Theme1 />}
        {theme === "Dark" && <Theme2 />}
      </React.Suspense>
      {children}
    </>
  );
};

const Theme1 = () => {
  return Light;
};
const Theme2 = () => {
  return Dark;
};

export default ThemeSelector;
