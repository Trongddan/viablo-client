import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./static/css/style.css"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

import {Container} from "react-bootstrap"
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from "./pages/LoginScreen";
import React from 'react';
import UserDetailScreen from './pages/UserDetailScreen';
import UserUpdateScreen from './pages/UserUpdateScreen';
import ManagePostScreen from './pages/ManagePostScreen';
import SidebarManage from './components/SidebarManage';
import AddPost from './components/AddPost';
import PostDetail from './pages/PostDetail';
import QuestionScreen from './pages/QuestionScreen';
import SearchScreen from './pages/SearchScreen';
function App() {
  return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <React.Fragment>
          <Route exact path="/home" component ={HomeScreen}/>
          <Route exact path="/" component ={HomeScreen}/>
          <Route path="/questions" component={QuestionScreen} />
        <Container>
          <Route  path="/register" component ={RegisterScreen}/>
          <Route  path="/login" component ={LoginScreen}/>

          <Route path="/updateuser" component={UserUpdateScreen}/>
          <Route path="/managepost" component={ManagePostScreen}/>
          <Route path ="/post/:id" component={PostDetail}/> 
          <Route path="/search/:name" component={SearchScreen}/> 

        </Container>
        <Route path="/user/" component={UserDetailScreen}/>
        </React.Fragment>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
