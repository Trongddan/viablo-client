import React,{useState,useEffect} from 'react'
import ListPost from '../components/ListPost'
import ListQuestion from '../components/ListQuestion'
import Banner from "../components/Banner"
import {Container} from "react-bootstrap"
import {BiArrowToTop} from "react-icons/bi"

const HomeScreen = () => {







    
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
        <>

        <Banner></Banner>
        <Container>
        <div className="row mb-4">
            <ListPost id={2}></ListPost>
            <ListQuestion id={1}></ListQuestion>
            {buttonToTop && 
                <BiArrowToTop onClick={handleToTop} title="Trở về đầu trang" className="buttonToTop" style={{position:"fixed",bottom:"70px", right:"50px",fontSize:"55px",height:"70px"}}/>
            }
        </div>
        </Container>
        </>
    )
}

export default HomeScreen
