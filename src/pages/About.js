import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import LogoLink from '../components/LogoLink'
import PageLink from '../components/PageLink'
import Footer from '../components/Footer'
import Mnav from '../components/Mnav'
const AboutHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '#353535')}; 
    color: ${({$isdark})=> ($isdark === 'light' ? 'black' : '#fff')};
    
`
const AboutHeaderWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    
`

const AboutWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    
`
const Profile = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    p{
        font-size: 1.5rem;
        font-weight: 600;
        margin-right: 5px;
        @media screen and (max-width: 768px) {
            flex-basis: 35%;
            font-size: 1.2rem;       
    }
    }
    img{
        flex-basis: 18%;
        width: 100%;
        filter:grayscale(100);
        border: 2px solid #eee;
    }
`

const Why = styled.div`
     width: 100%;
     margin-top: 180px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
    

`
const WhyTitle = styled.div`
        font-size: 100px;
        text-align: right;
        width: 95%;
        display: block;
        margin-top: 20px;
      
        @media screen and (max-width: 768px) {
            margin-top: 10px;
        }
        
`
const WhyDesc = styled.div`
      width: 95%;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      margin-top: 30px;
      @media screen and (max-width: 768px) {
        margin-top: 20px;
      }
      p{
        display: block;
        width: 30%;
        letter-spacing :-0.5px;
        @media screen and (max-width: 768px) {
            width: 90%;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }
      }
`

const BackgroundPeopleImg = styled.div`
    margin: 0 auto;
    background-image: url('/images/peoples.png');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 660px;
    filter: grayscale(100%);
    @media screen and (max-width: 768px) {
        width: 90%;
        height: 400px;
    }
`
const What = styled.div`
      width: 100%;
      height: 100%;

`
const WorryImg = styled.div`
    margin-top: 70px;
    background-image: url('/images/What.png');
    background-size: cover;
    width: 60%;
    height: 500px;   
    filter: grayscale(100%);
    @media screen and (max-width: 768px) {
        width: 90%;
        background-position: center;
        background-size: cover;
        height: 350px;
    }
`
const WhatTitle = styled.div`
    font-size: 100px;
    padding: 0 2%;
    margin-top: 10px;
`

const WhatDesc = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2%;
    margin-top: 30px;
    margin-bottom: 100px;
     p{
        display: block;
        width: 40%;
        letter-spacing :0.2;
        @media screen and (max-width: 768px) {
        font-size: 0.9rem; 
        width: 90%;
    }
    
      }
      span{
        font-weight: bold;
        font-size: 18px;
        letter-spacing :-0.5px;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.9rem; 
    }
    
`

function About() {
    const theme = useSelector(state => state.dark.mode)
    
  return (
    <>

    <AboutHeader $isdark={theme}>
        <AboutHeaderWrap>
    <div>
    <PageLink/>
    <LogoLink/>
    </div>
        <AboutWrap>
           <Profile>
            <p>안녕하세요 사람들 위한 프론트엔드 개발자가 되고자하는 이정석입니다</p>
            <img src="/images/profile_images.png" width={200} height={270} alt="/images/profile_images.png"/>    
           </Profile>
        </AboutWrap>
            <Why>
                <BackgroundPeopleImg></BackgroundPeopleImg>
                   <WhyTitle>WHY?</WhyTitle>
                   <WhyDesc>
                    
                    <p>사용자 중심의 접근 방식을 통해 환자들은 의료 서비스를 더 효과적으로 이용하고, 필요한 정보에 더 쉽게 접근할 수 있게 되었습니다. 사용자 중심의 개발은 실제로 사용자들의 삶을 개선하는 데 기여한다는 것을 명확히 이해하고 있으며, 이를 토대로 더 나은 웹 경험을 제공하기 위해 지속적으로 노력하고 있습니다.</p>
                   </WhyDesc>  
            </Why>
            <What>
                <WorryImg></WorryImg>
                <WhatTitle>WHAT...</WhatTitle>
                <WhatDesc>
                    <p><span>사용자 중심</span>의 웹사이트를 만들며, 기술을 통해 현실 세계에 긍정적인 영향을 미치는 개발자가 되고자 결심하게 되었습니다.</p> 
     
                </WhatDesc>
            </What>
            </AboutHeaderWrap>
        </AboutHeader>
        
    </>
  )
}

export default About