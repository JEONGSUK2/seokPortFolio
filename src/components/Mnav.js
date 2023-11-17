import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


const M_Btn = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #f9fafb;
    z-index: 200;
    top: 0;
    right: -100%;
    transition: 0.5s;
   
    &.active{
        right: 0%;
        
    }
`



const Hamburger = styled.div`
    
 @media screen and (min-width: 768px) {
        display: none;
    }

    ul{
        padding: 2%;
        z-index: 300;
        cursor: pointer;
        position: absolute;
        right: 1%;
        margin-top: 13px;
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
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
        li{
            padding: 5%;
            font-size: 2rem;
            font-weight: bold;
        }
    }
`
function Mnav() {
    
    const [isActive, setIsActive] = useState(false)
    const LinkArray = ["</home>","</about>", "</skill>","</comment>"]
    const LinkPage = ["/","/about" , "/skill","/comment"]
  return (
    <>
    
        <Hamburger className={isActive === false ? '' : 'active'} onClick={()=>{setIsActive(!isActive);}}> 
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </Hamburger>
        <M_Btn className={isActive === false ? '' : 'active'}> 
            <M_BtnDesc>
                <ul>
                    {
                       LinkArray.map((e,i)=>{
                        return(
                        <li key={i} onClick={()=>{setIsActive(!isActive); }}>
                            <NavLink to ={`${LinkPage[i]}`}>{e}</NavLink>
                        </li>
                        )
                       })
                    }
                </ul>
            </M_BtnDesc>
          </M_Btn>
    </>
        
  )
}

export default Mnav