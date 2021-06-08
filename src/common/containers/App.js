import React,{useState} from "react";

export const Themecontext = React.createContext("");
export default function App({ children }) {
  const [theme,changeTheme] = useState("");
  const currentClass = theme === 'dark' ? 'dark-mode ' : ''
  return(
    <div className={currentClass}>
      <Themecontext.Provider value={{theme,changeTheme}}>{children}</Themecontext.Provider>;
    </div>
  )
}
