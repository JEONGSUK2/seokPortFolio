import React from 'react'
import styled from 'styled-components'
import LogoLink from '../components/LogoLink'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../components/Footer'



const HeaderWrap = styled.div`
    width: 100%;
    background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '#353535')}; 
    color: ${({$isdark})=> ($isdark === 'light' ? 'black' : '#fff')};
`

const Logo = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const Title = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 90px;
`

const BackGroundImg = styled.div`
    background-image: url('/images/finger.png');
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 670px;
    margin: 0 auto;
    opacity: 0.9;
    filter: saturate(120%);
    filter : blur(1px); 
    @media screen and (max-width: 768px) { 
        height: 600px;
        width: 70%;
        margin-top: 50px;
    }
`
const Emptydiv = styled.div`
    width: 100%;
    padding: 55.5px;
    background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '#333333')}; 
    position: relative;
    bottom: 25px;
    filter : blur(13px);
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
    span{
        font-size: 20px;
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
    span{
        font-size: 25px;
        font-weight: bold;
        color: #AEAEAE;
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
    span{
        font-size: 22px;
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
const FooterWrap = styled.div`
  width: 100%; 
  position: relative;
  top: 47px;
  left: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 103px;
    width: 100%;
  } 
`
function Header() {
    const theme = useSelector(state => state.dark.mode)

  return (
    <>
      
    <HeaderWrap $isdark={theme}>
    <Link to ="/"><LogoLink/></Link>
    <Title>
   <BackGroundImg></BackGroundImg>
   <Emptydiv $isdark={theme}></Emptydiv>
   <Link to="/about"><AboutButton><span>about</span></AboutButton></Link>
   <Link to="/skill"><SkillButton><span>skill</span></SkillButton></Link>
   <Link to="/contact"><ContactButton><span>contact</span></ContactButton></Link>
   <Link to="/contact"><ComentButton><span>comment</span></ComentButton></Link>
   </Title>
   </HeaderWrap>
   <FooterWrap><Footer/></FooterWrap>
    </>
  )
}

export default Header   