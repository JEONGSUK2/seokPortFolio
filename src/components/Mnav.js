import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const M_Btn = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    
    @media screen and (min-width: 768px) {
        display: none;
    }
    &on{
       
    }
`


const Hamburger = styled.div`
    ul{
        padding: 2%;
        z-index: 300;
        cursor: pointer;
        position: relative;
        left: 380px;
        li{
            width: 40px;
            height: 5px;
            background-color: #000;
            border-radius: 5px;
            margin: 3px;
        }
    }
`

const M_BtnDesc = styled.div`
    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        li{
            padding: 20%;
            font-size: 2rem;
            font-weight: bold;
        }
    }
`

function Mnav() {
  return (
        <M_Btn>
            <Hamburger>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Hamburger>
         
            <M_BtnDesc>
                <ul>
                    {/* <Link to="/about"><li>about</li></Link>
                    <Link to="/skill"><li>skill&project</li></Link>
                    <Link to="/comment"><li>comment</li></Link>     */}
                </ul>
            </M_BtnDesc>
          </M_Btn>
  )
}

export default Mnav