import { createContext, useEffect, useReducer } from "react";
import globalReducer, { initialState } from "./AppReducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify({
        auth: state.auth,
        users: state.users,
        results: state.results,
        students: state.students,
        studentsResult: state.studentsResult,
      })
    );
  }, [state]);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
