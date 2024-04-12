import { createContext, useContext, useState } from "react";

export const QuestionContext = createContext();

export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const QuestionProvider = ({ children }) => {
  const [answer, setAnswer] = useState(undefined);
  const [option, setOption] = useState(undefined);

  
  return (
    <QuestionContext.Provider value={{ option, setOption, answer, setAnswer }}>
      {children}
    </QuestionContext.Provider>
  );
};
