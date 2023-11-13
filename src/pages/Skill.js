import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const SkillPage = styled.div`
  width: 100%;
  height: 100%;
`

const SkillPageWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 2%;
`

const Title = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  img{
    width: 9%;
  }
 
  ul{
    display: flex;
    width: 100%;
    align-items: center;
    flex-basis: 27%;
    li{
      border-radius: 5px;
      margin-right: 10px;
      padding: 10px 15px;
      border: 1px solid #000;
      flex-basis: 20%;
      text-align: center;
      cursor: pointer;
    }
  }
`
const TitleLine = styled.div`
    &::after {
    content: "";
    position: absolute;
    top: 130px;
    width: 95%;
    height: 2px;  
    background-color: #353535; 
  }
`
////////////////컨텐츠 시작

const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2%;
`

const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SkillImg = styled.div`
  flex-basis: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div{
    font-size: 1.75rem;
    text-align: center;
    width: 70%;
    margin-bottom: 20px;
    
  }
  p{
    color: red;
    font-size: 0.8rem;
    margin-top: 30px;
    width: 80%;
  }

 ul{
  width: 70%;
  display: flex;
  flex-wrap: wrap; 
  
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
      &on{
        transition: 2s;
      }
    }
  }
 }
  img{
    margin-top: 50px;
    margin-bottom: 10px;
    width: 70%;
    object-fit: fill;
    opacity: 0.9;
    filter: grayscale(40%);
  }
`

const OverFlowWrap = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 55%;
  margin-left: 20px;
`

const CloneListBox = styled.ul`
      overflow-y: auto; 
      height: 650px;
      display: flex;
      flex-wrap: wrap; 
      gap: 10px;
      margin-top: 30px;
      &::-webkit-scrollbar {
    display: none; }
    li{
    border: 1px solid #000;
    flex-basis: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
   
    justify-content: center;
    padding: 10px;
    box-shadow: 5px 5px 0px 0px gray;
      img{
        width: 100%;  
        object-fit: cover;
      }
      p{
       width: 80%;
      }
    }
`
/* 
 &::-webkit-scrollbar {
    display: none; }/* 크롬, 사파리, 오페라, 엣지 */


function Skill() {
 
  const [selectedTag, setSelectedTag] = useState(null);
  const [opc, setOpc] = useState(false)


  const Array = [
    {
      img :"/carrot.png",
      Contribution: "111",
      date:"",
      type:"redesign"
    },
    {
      img :"/subway.png",
      Contribution: "111",
      date:"",
      type:"redesign"
    },
    {
      img :"/vercel.png",
      Contribution: "111",
      date:"",
      type:"redesign"
    },
    {
      img: "/mongoDB.png",
      Contribution: "222",
      date:"2023..",
      type:"redesign"
    },
    {
      img: "/react_logo.png",
      Contribution: "222",
      date: "2023..",
      type: "clone", 
    },
    {
      img: "/nextjs.png",
      Contribution: "222",
      date: "2023..",
      type: "clone", 
    },
    {
      img: "/js_logo.png",
      Contribution: "222",
      date: "2023..",
      type: "clone", 
    },
    {
      img: "/redux.png",
      Contribution: "222",
      date: "2023..",
      type: "project", 
    },
    {
      img: "/Firebase_Logo.png",
      Contribution: "222",
      date: "2023..",
      type: "project", 
    },
    {
      img: "/git.png",
      Contribution: "222",
      date: "2023..",
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
  const FilterType =["전체", "redesign", "clone", "project"]
  const filteredItems = (total === "전체") ? Array : Array.filter(item => FilterBtn.indexOf(total) === FilterType.indexOf(item.type));


  return (
    <>
      <SkillPage>
        <SkillPageWrap>
          <Title>
          <img src="/images/standardlogo.png" alt="" />
            <ul>
              {
                FilterBtn.map((e,i)=>{
                  return(
                    <li key={i} onClick={() => setTotal(e)}>{e}</li>
                  )                               
                })
              }
            </ul>
          </Title>
          <TitleLine></TitleLine>
        </SkillPageWrap>
        <Contents>
          <ContentsWrap>
            <SkillImg>
            
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
                <p>{selectedTag}</p>
            </SkillImg>
        <OverFlowWrap>
        <CloneListBox> {/* ul  */}
       
      {
      filteredItems.map((e, i) => (
        <li key={i}>
          <img src={`/images/${e.img}`} />
          <p>{e.Contribution}</p>
          <p>{e.date}</p>
          <p>{e.type}</p>
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

