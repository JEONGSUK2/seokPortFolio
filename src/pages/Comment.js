import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Mnav from '../components/Mnav'

const Notpage = styled.div`
    text-align: center;
    font-size: 50px;
   
    
   
  @media screen and (max-width:768px){
      font-size: 50px;
      text-align: center;
      margin-bottom: 20px;
  }
`
const Home = styled.div`
  font-size: 30px;
  margin-bottom: 780px;
  text-align: center;
  
  
`

function Comment() {
  return (
  <>
    
    <Notpage>방명록 페이지를 게시중</Notpage>
    <Link to='/'><Home>홈 으로 가기</Home></Link>
  </>
  )
}

export default Comment