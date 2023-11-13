import { useState } from "react";
import styled from "styled-components";


const BtnDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const BtnDivWrap = styled.div`
    ul{
        position: fixed;
        left: -20px;
        z-index: 200;
        font-weight: 700;
        
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

function PageLink() {
      const [currentPage, setCurrentPage] = useState('');
    
      return (
          <>
          <BtnDiv>
            <BtnDivWrap>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SKILL</li>
                    <li>PORJECT</li>
                </ul>
            </BtnDivWrap>
          </BtnDiv>
          
          </>
        )
      }
export default PageLink