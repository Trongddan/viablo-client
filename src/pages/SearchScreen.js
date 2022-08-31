import React,{useState,useEffect} from "react";
import { Link,NavLink,BrowserRouter,Switch,Route,useParams} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import {searchPost} from "../actions/actionPost"
import { Container } from 'react-bootstrap'
import MyListQuestion from '../components/MyListQuestion'
import FollowUser from '../components/FollowUser'
import ListPostSearch from "../components/ListPostSearch";
const SearchScreen = () => {
    const {name} = useParams();
    const dispatch = useDispatch();
    console.log(name)
    useEffect(()=>{
      if(name!==" "){
        dispatch(searchPost(name))
      }
    },[])
 
  return (
    <div className="m-4">
      <BrowserRouter>
        <div className="row nav_detail">
          <NavLink
            to={`/search/:${name}`}
            className="col-sm-2 text-center userdetail_title"
          >
            Bài viết
          </NavLink>


          <div className="select_option dropdown show">
  <a className="btn btn-light h-100 w-40 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Tùy chọn
  </a>

  <div className="dropdown-menu listSelect" aria-labelledby="dropdownMenuLink">
            <NavLink
            to={`/search/:${name}`}
            className="m-2"
          >
            Bài viết
          </NavLink>
  </div>
</div>

        </div>
        <Switch>
          <React.Fragment>
          
              <Route exact path={`/search/:${name}`} component={ListPostSearch} />
              

        
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default SearchScreen;
