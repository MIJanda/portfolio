import React, { createContext, useReducer, useContext, ReactNode } from 'react';

const initialState: DarkModeState = { darkMode: false };

const DarkModeContext = createContext<{state: DarkModeState, dispatch: React.Dispatch<DarkModeAction>}>({state: initialState, dispatch: ()=> null})

const darkModeReducer = (state: DarkModeState, action: DarkModeAction): DarkModeState => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const DarkModeProvider = ({ children }: { children: ReactNode}) => {
  const [state, dispatch] = useReducer(darkModeReducer, { darkMode: false });

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
