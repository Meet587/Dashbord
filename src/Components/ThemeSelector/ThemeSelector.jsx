import React, { useState } from "react";
import "../../App.scss";
// const { Dark } = React.lazy(() => import("../../assets/Themes/Theme2"));
const Light = React.lazy(() => import("../../assets/Themes/Theme1"));

const ThemeSelector = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <React.Suspense fallback={<div>Loading....</div>}>
        {theme === "light" && <Light />}
        {theme === "dark" && <Dark />}
        {children}
      </React.Suspense>
    </>
  );
};

export default ThemeSelector;
