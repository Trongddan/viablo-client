import React,{useState,useEffect} from 'react'
import {BiArrowToTop} from "react-icons/bi"
import { Container } from 'react-bootstrap'

import Banner from '../components/Banner'
import ListPost from '../components/ListPost'
import ListQuestion from '../components/ListQuestion'

const QuestionScreen = () => {
    const [buttonToTop,setButtonToTop] = useState(false);
    const handleToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        
    }

useEffect(()=>{
    const handleScroll =()=>{
        if(window.scrollY>=200){
        setButtonToTop(!buttonToTop)
        }else{
            setButtonToTop(false)
        }
    }
    window.addEventListener("scroll",handleScroll)
},[])
    return (
        <div>
            <Banner></Banner>
            <Container>
            <div className="row mb-4">
            <ListPost id={1}></ListPost>
            <ListQuestion id={2}></ListQuestion>
            {buttonToTop && 
                <BiArrowToTop onClick={handleToTop} title="Trở về đầu trang" className="buttonToTop" style={{position:"fixed",bottom:"70px", right:"50px",fontSize:"55px",height:"70px"}}/>
            }
        </div>
            </Container>
        </div>
    )
}

export default QuestionScreen
