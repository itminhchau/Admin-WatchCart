import { useState } from 'react';
import { createContext } from 'react';

export const reRenderContext = createContext();

const ReRenderProvider = ({ children }) => {
  const [checkRender, setCheckRender] = useState(false);
  const toggleRerender = () => {
    setCheckRender(!checkRender);
  };
  const values = {
    checkRender,
    toggleRerender,
  };
  return <reRenderContext.Provider value={values}>{children}</reRenderContext.Provider>;
};

export default ReRenderProvider;
