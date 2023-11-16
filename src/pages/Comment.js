import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Mnav from '../components/Mnav'

const Notpage = styled.div`
    text-align: center;
    font-size: 100px;
   
  @media screen and (max-width:768px){
      font-size: 100px;
      text-align: center;
      margin-bottom: 20px;
  }
`
const Home = styled.div`
  font-size: 30px;
  margin-bottom: 709px;
  text-align: center;
  
`

function Comment() {
  return (
  <>
    
    <Notpage>페이지만드는중입니다.</Notpage>
    <Link><Home>홈 으로 가기</Home></Link>
  </>
  )
}

export default Comment