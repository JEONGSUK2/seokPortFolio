import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faComment, faComments, faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterWrap = styled.div`
  background-color: #121212;
  width: 100%;
  color: #fff;
  position: absolute;
  height: auto;

  @media screen and (max-width:768px) {
    width: 100%;
  }
`

const FooterBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 11px 0;
@media screen and (max-width: 768px) {
    flex-direction: column;
    
}
  
  `

  const Contact = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
   
    
  @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 30px;
  }
  `

const Email = styled.div`
  display: flex;
  align-items: center;

 @media screen and (max-width:768px){
    svg{
      font-size: 1rem;
    }
 }
  p{
    font-size: 0.8rem;
  }
  @media screen and (max-width:768px) {
      p{
        font-size: 0.75rem;
      }
  }
`
const CopyLight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: 90%;
  font-size: 0.8rem;
  justify-content: space-around;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    p{
    font-size: 0.8rem;
    }

    @media screen and (max-width:768px) {
    p{
      font-size: 0.85rem;
      text-align: center;   
      }
      span{
      font-size: 0.8rem;
      text-align: center;
      margin-bottom: 15px;
      width: 90%;
      }
  }
`
const Text =  styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const IconDiv = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  
  svg{
    font-size: 40px;
    margin-right: 10px;
    &:nth-child(2){
      color: yellow;
    }
  }
  
  @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      margin-left: 180px;
      img{
        width: 20%;
        text-align: center;
        display: inline;
      }
  }
`
function Footer() {
  return (
    <FooterWrap>
      <FooterBox>
        <Contact>  
        <CopyLight>
          <Text>
            <span>본 사이트는 상업적 목적이 아닌 이정석 개인 포트폴리오 사이트로 제작되었습니다.
              일부 이미지 및 폰트 등은 그 출처가 따로 있음을 밝힙니다.</span>
              <p>Copylight 2023. standard all rights reserved</p>
          </Text>
        </CopyLight>
        </Contact>
        <IconDiv>
         <Link to="https://github.com/JEONGSUK2"> <FontAwesomeIcon icon={faGithub} /></Link>
         <Link to="https://open.kakao.com/me/standard"><FontAwesomeIcon icon={faComments}/></Link> 
         <Link to="mailto:dlwjdtjr3088@gmail.com"><Email><FontAwesomeIcon icon={faEnvelope}/></Email></Link> 
        </IconDiv>
      </FooterBox>
    </FooterWrap>
  )
}

export default Footer