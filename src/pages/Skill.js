import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageLink from '../components/PageLink';
import LogoLink from '../components/LogoLink';
import { useSelector } from 'react-redux'
import Footer from '../components/Footer';
import Mnav from '../components/Mnav';

const SkillPage = styled.div`
  width: 100%;
  background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '#353535')}; 
  color: ${({$isdark})=> ($isdark === 'light' ? 'black' : '#fff')};
`

const SkillPageWrap = styled.div`
 width: 100%;
`


const Title = styled.div`
  max-width: 1280px;
  padding: 1% 2% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ul{
    display: flex;
    width: 100%;
    align-items: center;
    flex-basis: 35%;
    @media screen and (max-width: 768px) {
        flex-basis: 70%;
    } 
   
    li{
      border-radius: 5px;
      margin-right: 10px;
      padding: 10px 2px;
      border: 1px solid #000;
      flex-basis: 20%;
      text-align: center;
      cursor: pointer;
      
      @media screen and (max-width: 768px) {
        font-size: 0.75rem;
        display: none;
      }
      &.active{
        background-color: ${({$isdark})=> ($isdark === 'light' ? 'black' : 'darkgray')};
        color: ${({$isdark})=> ($isdark === 'light' ? 'white' : '#fff')}; 
      }
    }
  }
`
const TitleLine = styled.div`
  border: 1px solid #000;  
  margin-bottom: 18px;
`
////////////////컨텐츠 시작

const Contents = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
      padding: 1%;
  }
`

const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
`

const SkillImg = styled.div`
  flex-basis: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
  
  div{
    font-size: 1.75rem;
    text-align: center;
    width: 70%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  
  ul{
    width: 80%;
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
    margin-left: 25px;
    
    @media screen and (max-width: 768px) {
      flex-direction: row;
      margin: 0 auto;
      margin-bottom: 10px;
      align-items: center;
      justify-content: center;
    }
    
    li{
      padding: 2%;
      cursor: pointer;
      span{
        font-size: 0.9rem;
        border-bottom: 1px solid #000;
        &:hover{
          transform: translateY(-1px);
          font-weight: bold;
        }
      }
    }
  }
  img{
    margin-left: 45px;
    margin-top: 10px;
    width: 50%;
    object-fit: fill;
    filter: grayscale(50%);
    opacity: 0.9;
    @media screen and (max-width:768px){
      width: 50%;
      margin: 0 auto;
    }
  }
  
  `
const HashInfo = styled.p`
    font-size: 0.9rem;
    width: 80%;
    color: ${({$isdark})=> ($isdark === 'light' ? 'black' : 'white')};
    font-weight: bold;
    
    @media screen and (max-width:768px){
        margin: 0 auto;
        display: block;
        margin-top: 10px;
        text-align: center;
        margin-bottom: 50px;
    }
`

const OverFlowWrap = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 55%;
  background-color: ${({$isdark})=> ($isdark === 'light' ? '#fff' : '	#333333')}; 
  `

const CloneListBox = styled.ul`
      overflow-y: auto; 
      height: 700px;
      display: flex;
      flex-wrap: wrap; 
      gap: 10px;
      margin-bottom: 15px;
      &::-webkit-scrollbar {
    display: none; }
  

    
    @media screen and (max-width: 768px) {
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      width: 85%;
      margin: 0 auto;
      margin-bottom: 30px;
    }

    li{
    border: 1px solid #000;
    flex-basis: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    box-shadow: 5px 5px 0px 0px gray;
    
      img{
        width: 100%;  
        object-fit: cover;
      }
      p{
       width: 80%;
       font-size: 0.9rem;
       padding: 2%;
      }
    }
`
const M_FilterBtn = styled.div`
    ul{
      display: flex;
      justify-content: center;
      
      li{
      border-radius: 5px;
      margin-right: 10px;
      padding: 5px 2px;
      border: 1px solid #000;
      flex-basis: 20%;
      text-align: center;
      cursor: pointer;
      margin-bottom: 40px;
      }
    }

  @media screen and (min-width: 768px) {
      display: none;
  }
`
const Logo = styled.div`
  padding-bottom: 10px;
`


//  filter: brightness(50%);


function Skill() {
 
  const [selectedTag, setSelectedTag] = useState(null);

  const [ChangeColor, setChangeColor] = useState(0)

  const Array = [
    //클론
    {
      img :"/carrot.png",
      Contribution: "당근마켓 사이트",
      date:"제작기간 : 5일",
      desc:"사용기술: HTML, CSS",
      desc2:"내용: 당근마켓 메인페이지 클론코딩",
      type:"clone"
      
    },
    {
      img :"/subway.png",
      Contribution: "서브웨이 사이트",
      date:"제작기간 : 7일",
      desc:"사용 기술: HTML, CSS , JAVASCRIPT",
      desc2: "내용: 서브웨이 메인페이지 클론코딩",
      type:"clone"
    },
    
 
//리디자인
    {
      img: "/injective.png",
      Contribution: "INJECTIVE",
      date: "제작기간 : 진행중",
      desc:"사용 기술: HTML, CSS , JAVASCRIPT, JSON",
      desc2: "내용: 인젝티브 사이트 메인페이지를 좀 더 효율적으로 리디자인",
      type: "redesign", 
    },
    

    {
      img: "/greenping.png",
      Contribution: "GREENPING",
      date: "제작기간 : 31일",
      desc:"사용기술 : STYLEED-COMPONENT, REACT, REDUX, FIREBASE ",
      desc2:"내용: 팀 협업 프로젝트로 캠핑추천을 주제로한 사이트 제작",
      type: "project", 
    },
   
  ]

  const HashTag = [
    '#SCSS', '#TAILWIND_CSS', '#STYLEED_COMPONENT', 
    '#REACT', '#NEXT_JS', '#TYPESCRIPT', '#REDUX',
    '#FIREBASE', '#MongGo_DB', '#NODE_JS',
    '#GITHUB', '#NOTION', '#GIT'
  ];

  const SkillDesc =[
    'SCSS의 특징과 활용법을 통해 코드를 더 효율적으로 작성하고 유지보수하기 쉽게 만들 수 있습니다',
    '테일윈드를 통해 반응형 사이트를 제작할 수 있습니다.',
    '스타일컴포넌트',
  ];

  const HashTagDesc = (e) => {
    setSelectedTag(SkillDesc[e]);
    
    // 여기서 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
  };

  const [total, setTotal] = useState("전체");
  const FilterBtn = ["전체", "클론코딩", "리디자인", "프로젝트"];
  const FilterType =["전체", "clone","redesign",  "project"]
  const filteredItems = (total === "전체") ? Array : Array.filter(item => FilterBtn.indexOf(total) === FilterType.indexOf(item.type));
  const theme = useSelector(state => state.dark.mode)
  

  return (
    <>
    <PageLink/>
      <SkillPage $isdark={theme}>
        <SkillPageWrap>
          <Title $isdark={theme}>
          <Logo><LogoLink/></Logo>
            <ul >
              {
                FilterBtn.map((e,i)=>{
                  return(
                    <li className={ChangeColor === i ? 'active' : ''} key={i} onClick={() => {setTotal(e); setChangeColor(i)}}>{e}</li>
                  )                               
                })
              }
          </ul>
          </Title>   
          <TitleLine></TitleLine>
        </SkillPageWrap>
        <Contents>
          <ContentsWrap>
            <SkillImg $isdark={theme}>
              {/* 해쉬태그 클릭시 해당 설명 띄우기 */}
              <img src="/images/skillprofile.png" alt="/images/skillprofile.png"/>      
              <div>"Click on the Tag!"</div>   
              <ul>
                {
                  HashTag.map((e,i)=>{    
                    return(   
                      <li onClick={() => HashTagDesc(i)} key={i}><span>{e}</span></li>    
                    )
                  })
                } 
              </ul>
                <HashInfo $isdark={theme}>{selectedTag}</HashInfo>
            </SkillImg> 
        <OverFlowWrap $isdark={theme}>
        <M_FilterBtn >
       <ul >
              {
                FilterBtn.map((e,i)=>{
                  return(
                    <li className={ChangeColor === false ? 'active' : ''}  key={i} onClick={() => {setTotal(e); setChangeColor(i)}}>{e}</li>
                  )                               
                })
              }
          </ul>
     </M_FilterBtn>

        <CloneListBox> {/* ul  */}
        
      {
      filteredItems.map((e, i) => ( 
        
        <li key={i}>
          <img src={`/images/${e.img}`} />
          <p>{e.Contribution}</p>
          <p>{e.date}</p>
          <p>{e.desc2}</p>
          <p>{e.desc}</p>
        </li>
      ))}
        </CloneListBox>
        </OverFlowWrap>
          </ContentsWrap>
        </Contents>
      </SkillPage>
        
    </>
  )
}
export default Skill
