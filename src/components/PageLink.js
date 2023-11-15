import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const BtnDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
   
`
const BtnDivWrap = styled.div`
        @media screen and (max-width: 768px) {
            display: none;
        }
    ul{
        position: fixed;
        top: 200px;
        left: -20px;
        z-index: 200;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        
        
        li{
            border-radius: 10px;
            padding: 10px 30px;
            border: 1px solid gray;
            cursor: pointer;
            margin-bottom: 7px;
            background-color: #fff;
            transition: 0.5s;
           color: #353535;
            &:hover{
                transform: translateX(15px);
            }   
        }
    }
`



const M_BtnDiv = styled.div`
    background-color: black;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 101;
`
const Hamburger = styled.div`
    ul{
        cursor: pointer;
        li{
            width: 40px;
            height: 5px;
            background-color: #000;
            border-radius: 5px;
            margin: 3px; 
        }
        &:on{

        }
    }
`


const M_BtnDesc = styled.div`
    
`

function PageLink() {
      const [isActive, setIsActive] = useState(false)
    
      return (
          <>
          <BtnDiv>
            <BtnDivWrap>
                <ul>
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/skill"><li>skill&project</li></Link>
                    <Link to="/comment"><li>comment</li></Link>    
                </ul>
            </BtnDivWrap>
          </BtnDiv>
          <M_BtnDiv>
            <Hamburger onClick={()=>{}}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Hamburger>
            <M_BtnDesc>
                <ul>
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/skill"><li>skill&project</li></Link>
                    <Link to="/comment"><li>comment</li></Link>    
                </ul>
            </M_BtnDesc>
          </M_BtnDiv>

          </>
        )
      }
export default PageLink