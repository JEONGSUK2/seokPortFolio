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
const M_Btn = styled.div`
    
    height: 100%;
    /* background-color: gray; */
    position: fixed;
    z-index: 101;
    
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


function PageLink() {
  
    const [isActive, setIsActive] = useState(false)
 
      return (
          <>
          <BtnDiv>
            <BtnDivWrap>
                <ul>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/skill"><li>skill&project</li></Link>
                    <Link to="/comment"><li>comment</li></Link>    
                </ul>
            </BtnDivWrap>
          </BtnDiv>
          </>
        )
      }
export default PageLink