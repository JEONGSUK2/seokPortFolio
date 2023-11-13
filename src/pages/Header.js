import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
    cursor: pointer;
    padding: 1%;
    text-align: center;
    img{
        width: 10%;
        margin-bottom: 23px;
    }
`

const Title = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 30px;
`

const BackGroundImg = styled.div`
    background-image: url('/images/finger.png');
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 700px;
    margin: 0 auto;
    opacity: 0.9;
    filter: saturate(120%);
    filter : blur(1px); 
`

const Emptydiv = styled.div`
    width: 100%;
    padding: 40px;
    background-color: white;
    position: relative;
    bottom: 15px;
     filter : blur(12px);
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
    span{
        font-size: 24px;
        font-weight: bold;
        color: #AEAEAE;
    }
    `    
const SkillButton = styled.button`
    background-color: white;
    border: none;
    padding: 40px 40px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    bottom: 60px;
    right: 60%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(5deg);
    cursor: pointer;
    span{
        font-size: 20px;
        font-weight: bold;
        color: #AEAEAE;
    }
`    
const ComentButton = styled.button`
    background-color: white;
    border: none;
    padding: 60px 40px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    top: 200px;
    left: 14%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(-15deg);
    cursor: pointer;
    span{
        font-size: 25px;
        font-weight: bold;
        color: #AEAEAE;
    }
`    
const ContactButton = styled.button`
    background-color: white;
    border: none;
    padding: 40px 20px;
    border-radius: 10px;   
    opacity: 0.7;
    position: absolute;
    top: 210px;
    right: 30%;
    filter: drop-shadow(5px 5px 5px gray);
    transform: rotate(-10deg);
    cursor: pointer;
    span{
        font-size: 22px;
        font-weight: bold;
        color: #AEAEAE;
    }
`    
const EmptyButton = styled.div`
     padding: 20px;
    background-color: white;
`

function Header() {
  return (
    <>
    <Logo><img src="/images/standardlogo.png" alt=""/></Logo>   
    <Title>
   <BackGroundImg></BackGroundImg>
   <Emptydiv></Emptydiv>
   <AboutButton><span>about</span></AboutButton>
   <SkillButton><span>skill</span></SkillButton>
   <ContactButton><span>contact</span></ContactButton>
   <ComentButton><span>comment</span></ComentButton>
   </Title>
    </>
  )
}

export default Header   