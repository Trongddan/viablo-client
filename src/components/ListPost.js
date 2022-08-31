import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {ListPosts} from "../actions/actionPost"
import ReactPaginate from 'react-paginate';
import Post from './Post'
const ListPost = ({id}) => {
    const dispatch = useDispatch();
    const listPost = useSelector(state=>state.listPost)
    const {posts,error} = listPost;


    // phan trang su dung react-paginate
    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
     
          setCurrentItems(posts && posts.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(posts&&posts.length / itemsPerPage));
      
    }, [itemOffset, itemsPerPage,posts]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % posts.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };


// ket thuc phan trang







    useEffect(()=>{
        dispatch(ListPosts(id))
    },[])
    return (
        <div className="col-lg-8  mb-1">
            {id==2?<h5 className="title_list_question row ">Bài viết mới nhất</h5>: <h5 className="title_list_question row">Câu hỏi mới nhất</h5>}
           <div className="row">
            { currentItems && currentItems.map(post =><Post id={post.id} key={post.id} avatar={post.user.avatar} name={post.name} date={post.date} username={post.user.username} tags={post.tag} numOfCmt={post.numOfCmt} numOfLike={post.numOfLike} />) }
           </div>
<div className="asssss">


        <ReactPaginate
        breakLabel="..."
        nextLabel="Trang trước"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Trang sau"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="ken"
        pageClassName="danken"
        
        
      />
</div>
        
        </div>
    )
}

export default ListPost
