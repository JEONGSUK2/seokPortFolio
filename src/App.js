import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./pages/Header";
import GlobalStyle from "./components/GlobalStyle";
import About from "./pages/About";
import Skill from "./pages/Skill";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import store from "./store";
import Aside from "./components/Aside";
import PageLink from "./components/PageLink";
import Footer from "./components/Footer";
import Comment from "./pages/Comment";
import Mnav from "./components/Mnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";


function AnimatedRoutes() {
 
  return (
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/comment" element={<Comment/>} />
        </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Dark />
    </Provider>
  );
}

function Dark() {
  const theme = useSelector((state) => state.dark);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Aside />
        <GlobalStyle />
        <AnimatedRoutes />
      </ThemeProvider>
      <Footer/>
    </>
  );
}

export default App;
