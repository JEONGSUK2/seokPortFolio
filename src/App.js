import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./pages/Header";
import GlobalStyle from "./components/GlobalStyle";
import About from "./pages/About";
import Skill from "./pages/Skill";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import store from "./store";
import Aside from "./components/Aside";
import PageLink from "./components/PageLink";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";


function App() {
    
  const light = {
    colors: {
      Primary : "orange",
      Secondary : "orangered",
      BgColor : "#e9f1f6",
      Color: "#000",
      ContentBg:"#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color: "#e9e9e9",
      ContentBg:"#272729"
    }
  }
  
  const [themeConfig, setThemeConfig] = useState("light")
  const DarkMode = themeConfig === 'light' ? light : dark;
 

  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
    }
    
  return (
    <Provider store={store}>
      <Dark />  
    </Provider>  
  );
}

function Dark(){

  const light = {
    colors: {
      Primary : "#eee",
      Secondary : "#fff",
      BgColor : "#e9f1f6",
      Color: "#000",
      ContentBg:"#fff",
     
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color: "#e9e9e9",
      ContentBg:"#272729",
     
    }
  }
// userSelector는 
  
  const [themeConfig, setThemeConfig] = useState("light")
  const theme = useSelector(state => state.dark);

  return (
    <>
    <ThemeProvider theme={theme}> 
    <Aside />
    <GlobalStyle/>
    <PageLink/>
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/skill" element={<Skill/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </ThemeProvider>
    </>
  );
}



export default App;
