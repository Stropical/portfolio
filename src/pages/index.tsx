import { Web3ReactProvider } from "@web3-react/core";
import { useEffect } from "react";
import Head from "next/head"

import { getLibrary } from "../components/Demo";
import Hero from "../components/stropcial/Hero";
import Header from "../components/stropcial/Header";
import useLocalStorage from "../hooks/useLocalStorage";

const App = function () {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      document.documentElement.setAttribute("data-theme", prevTheme === "dark" ? "light" : "dark");
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <>
    <div style = {{overflow: "hidden", height:"100vh"}}> 
      <Web3ReactProvider getLibrary={getLibrary}>
      <Header></Header>
        <Hero />
      </Web3ReactProvider>
      </div>
    </>
  );
};

export default App;
