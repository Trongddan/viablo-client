import React from 'react'
import {FaEye,FaComment} from "react-icons/fa"
import {ImCheckboxChecked} from "react-icons/im"
import {Link} from "react-router-dom"
const Question = ({question}) => {
    return (
        <div className="question mt-3">
                   <div className="row m-3 ">
        <Link className="col-sm-12 p-2" to={`/post/${question.id}`}>{question.name}</Link>
         <div className="col-sm-12 margin_icon_seen_cmt p-2 ">
                 <div className="mr-4 text-secondary">
                 <FaEye className="mr-1"/>
                 {question.numOfLike}
                 </div>
                 
                 <div className="mr-4 text-secondary">
                 <FaComment className="mr-1"/>
                 {question.numOfCmt}
                 </div>

                 {/* <div className="mr-4 text-secondary">
                 <ImCheckboxChecked/>
                 17
                 </div> */}
                 
             </div>
          <a className="col-sm-12 text-secondary mb-2" href="">  {question.user.username}</a> 
        </div>
        </div>
 
    )
}

export default Question
