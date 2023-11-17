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
import Comment from "./pages/Comment";
import Mnav from "./components/Mnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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


//Provider는 Redux 스토어를 컴포넌트 트리에 제공하며, useSelector는 Provider가 제공하는 컨텍스트 내에서만 Redux의 상태를 읽을 수 있기 때문에 함께 사용될 수 없습니다.



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

  const [themeConfig, setThemeConfig] = useState("light")
  const theme = useSelector(state => state.dark);

  return (
    <>
    <ThemeProvider theme={theme}> 
    <Aside />
    <Mnav/>
    <GlobalStyle/>
    <Routes> 
      <Route path="/" element={<Header/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/skill" element={<Skill/>}></Route>
      <Route path="/comment" element={<Comment/>}></Route>
    </Routes>
    <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
