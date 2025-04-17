import React, {
  FunctionComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createContext,
  useEffect,
  useState,
} from "react";
import night from "../images/night.jpg";
import light from "../images/light.jpg";
import treeLeaft from "../images/treeLeaft.png";
import comet from "../images/comet.png";

export const themes = {
  light: {
    backgroundImage: `url(${light})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
    color: "#000000",
    img: `${comet}`,
  },
  dark: {
    backgroundImage: `url(${night})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
    color: "#eeeeee",
    img: `${treeLeaft}`,
  },
};
//ola
export const ThemeContext = createContext({});

interface ThemesProps {
  children: React.ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemesProps> = ({ children }) => {
  const date: any = localStorage.getItem("theme");
  const storage = JSON.parse(date);
  const [theme, setTheme] = useState(themes.light);

  useEffect((): any => {
    if (storage) {
      setTheme(storage);
    } else {
      return themes.light;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
