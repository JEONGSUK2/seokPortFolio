import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
  background-color: #121212;
  width: 100%;
  color: #fff;
  position: absolute;
  height: auto;
  min-height: 10%;
  padding-bottom: 0px;


  @media screen and (max-width:768px) {
    width: 100%;
    min-height: 12%;
    
  }
`

const FooterBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:768px) {
    width: 100%;
    min-height: 12%;

  }
  
  `
  const Contact = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
  @media screen and (max-width: 768px) {
      width: 100%;
  }
  `

const Email = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 90%;
 svg{
  margin-right: 5px;
  font-size: 25px;
 }
 @media screen and (max-width:768px){
    svg{
      font-size: 20px;
    }
 }
  p{
    font-size: 0.95rem;
  }
  @media screen and (max-width:768px) {
      p{
        font-size: 0.75rem;
      }
  }
`
const CopyLight = styled.div`
   display: flex;
   align-items: center;
   span{
    display: none;
   }
  p{
    font-size: 0.85rem;
  }
  flex-basis: 70%;
  @media screen and (max-width:768px) {
    p{
        font-size: 0.85rem;
          display: none;  
      }
      span{
        font-size: 0.85rem;
        display: block;
      }
  }
`
const IconDiv = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  svg{
    font-size: 40px;
    margin-right: 10px;
  }
  img{
    width: 16%;
    margin-top: 7px;
    
  }
  @media screen and (max-width: 768px) {
      width: 25%;
      img{
        width: 45%;
      }
  }
`
function Footer() {
  return (
    <FooterWrap>
      <FooterBox>
        <Contact>
        <Email><FontAwesomeIcon icon={faEnvelope}/><p>EMAIL : dlwjdtjr3088@naver.com</p> </Email>
        <CopyLight><p>Copylight 2023. standard all rights reserved</p>
            <span>©2023. standard all right reserved</span>
        </CopyLight>
        </Contact>
        <IconDiv><FontAwesomeIcon icon={faGithub} />
        <img src="/images/kakao.png" alt="" />
      
        </IconDiv>
      </FooterBox>
    </FooterWrap>
  )
}

export default Footer