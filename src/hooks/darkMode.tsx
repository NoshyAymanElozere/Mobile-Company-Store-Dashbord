import { useState } from "react";

const [dark, setDark] = useState(false);

export const darkModeHandler = () => {
  setDark(!dark);
  document.body.classList.toggle("dark");
};
