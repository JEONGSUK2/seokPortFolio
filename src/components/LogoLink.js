import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Logo = styled.div`

    img{
      width: 150px;
      padding: 1%;
    }
    @media screen and (max-width: 768px) {
       img{
        width: 120px;
       }
    }
`


function LogoLink() {
  return (
    <Logo>
    <Link to="/"><img src="/images/standardlogo.png" alt=""/></Link>
    </Logo>
  )
}

export default LogoLink