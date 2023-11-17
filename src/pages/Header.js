import React from 'react'
import styled from 'styled-components'
import LogoLink from '../components/LogoLink'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import Mnav from '../components/Mnav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faComment, faGear, faMessage, faProjectDiagram, faTarp } from '@fortawesome/free-solid-svg-icons'


const HeaderWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '#353535')}; 
    color: ${({$isdark})=> ($isdark === 'light' ? 'black' : '#fff')};
    
`

const Title = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0px;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
        justify-content: center;
    }
`

const BackGroundImg = styled.div`
    background-image: url('/images/finger.png');
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 642px;
    margin: 0 auto;
    opacity: 0.9;
    filter: saturate(120%);
    filter : blur(1px); 
    @media screen and (max-width: 768px){ 
        height: 600px;
        width: 70%;
        margin-top: 31px;
    }
`
const Emptydiv = styled.div`
    width: 100%;
    padding: 52px 0px ;
    background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '#333333')}; 
    position: relative;
    bottom: 25px;
    filter : blur(13px);
    margin-bottom: 26px;
`
const AboutButton = styled.button`
    background-color: white;
    border: none;
    padding:  50px 40px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    top: 80px;
    right: 47%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(5deg);
    cursor: pointer;
    transition: 1s;
    span{
        font-size: 24px;
        font-weight: bold;
        color: #AEAEAE;
    }
    &:hover{
        transform: scale(1.2);
    }
    @media screen and (max-width: 768px) {
      top: 125px;
      right: 50%;
      padding: 40px 20px;
    }
    `    
const SkillButton = styled.button`
    background-color: white;
    border: none;
    padding: 40px 40px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    bottom: 80px;
    right: 60%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(5deg);
    transition: 1s;
    cursor: pointer;
    svg{
        font-size: 25px;
    }
    span{
        font-size: 1.5rem;
        font-weight: bold;
        color: #AEAEAE;
    }
    &:hover{
        transform: scale(1.2) ;
    }
    @media screen and (max-width: 768px) {
        bottom: 20%;
        right: 10%;
    }
`    
const ComentButton = styled.button`
    background-color: white;
    border: none;
    padding: 60px 30px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    top: 220px;
    left: 17%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(-15deg);
    transition: 1s;
    cursor: pointer;
    svg{
        font-size: 25px;
        color: gray;
        margin-left: 5px;
    }
    span{
       
        font-weight: bold;
        color: #AEAEAE;
        font-size: 1.5rem;
    }
    &:hover{
        transform: scale(1.1);
    }
    @media screen and (max-width: 768px) {
        padding: 50px 15px;
        left: 8%;
        top: 50%;
    }
`    
const ContactButton = styled.button`
    background-color: white;
    border: none;
    padding: 45px 20px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    top: 210px;
    right: 30%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(-10deg);
    transition: 1s;
    cursor: pointer;
   
    svg{
        font-size: 26px;
        margin-left: 5px;
    }
    span{
        font-size: 1.5rem;
        font-weight: bold;
        color: #AEAEAE;
    }
    &:hover{
        transform: scale(1.2);
    }
    @media screen and (max-width: 768px) {
        right: 10%;
    }
`   

function Header() {
    const theme = useSelector(state => state.dark.mode)

  return (
    <>
    <HeaderWrap $isdark={theme}>
    
    <Title>
    <LogoLink/>
   <BackGroundImg></BackGroundImg>
   <Emptydiv $isdark={theme}></Emptydiv>

   
   <Link to="/about"><AboutButton><span>about <FontAwesomeIcon icon={faMessage}/></span></AboutButton></Link>
 
   <Link to="/skill"><SkillButton><span>skill <FontAwesomeIcon icon={faTarp}/></span></SkillButton></Link>
   <Link to="/skill"><ContactButton><span>project<FontAwesomeIcon icon={faGear}/></span></ContactButton></Link>
   <Link to="/comment"><ComentButton><span>comment</span><FontAwesomeIcon icon={faComment}/></ComentButton></Link>
   </Title>
   </HeaderWrap>

    </>
  )
}

export default Header   