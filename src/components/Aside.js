import { faLightbulb, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store'
import { styled } from 'styled-components'

    const ASide = styled.div`
    position: fixed;
    right: 20px;
    bottom: 150px;
    border: 1px solid #ddd;
    background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : 'black')};    
    border-radius: 5px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 100;
    svg{
      color: ${({$isdark})=> ($isdark === 'light' ? 'black' : '#fff')};
    }
    `

function Aside() {
  const theme = useSelector(state => state.dark.mode)
  const dispatch = useDispatch()
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <ASide $isdark={theme} onClick={handleToggleTheme}>
        <FontAwesomeIcon icon={ theme === 'light' ? faLightbulb : faLightbulb} size='lg'/>   
    </ASide>
  )
}

export default Aside

