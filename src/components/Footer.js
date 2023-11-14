import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
  background-color: #353535;
  width: 100%;
  color: #fff;
`

const FooterBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  `
  const Contact = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 70%;
  `
const IconDiv = styled.div`
    padding: 10px;
   
  svg{
    font-size: 45px;
    margin-left: 15px;
  }
  img{
    width: 20%;
  }
`

const Email = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg{
    font-size: 1.5rem;
    flex-basis: 2%;
  }
  
`
const CopyLight = styled.div`
   font-size: 0.9rem;
   display: flex;
   align-items: center;
 
   svg{
    font-size: 0.5;
    flex-basis: 1%;
  }
`


function Footer() {
  return (
    <FooterWrap>
      <FooterBox>
        <Contact>
        <Email><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><p>EMAIL & dlwjdtjr3088@naver.com</p> </Email>
        <CopyLight><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon><p>Copylight 2023. jeongseok all rights reserved</p>
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