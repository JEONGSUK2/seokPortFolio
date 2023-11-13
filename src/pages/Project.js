import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    ul{      
        display: flex;
        justify-content: space-between;
        li{
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #000;
            
        }
    }
`


function Project() {
  return (
    <>
    <Layout>
    <ul>
        <li>클론코딩</li>
        <li>리디자인</li>
        <li>프로젝트</li>
    </ul>
    </Layout>
    </>
  )
}

export default Project