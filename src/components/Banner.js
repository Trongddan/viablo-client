import React,{memo} from 'react'
import banner from "../static/image/banner.jpg"
const Banner = () => {
    console.log("alo")
    return (
        
        <div className="py-5 bg-white ">
            <img className="banner" src={banner}></img>
        </div>
    )
}

export default memo(Banner);
