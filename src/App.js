import React from 'react';
import './App.css';
import Earth from './Earth.jpg'

let scount =0
let lcount =0
let hcount=0

class ToggleButton extends React.Component{
  state = {
    visible: false
  }

  toggleContent = () => {
    this.setState({visible: !this.state.visible})
  }

  render(){
    return (
      <div>
        <button onClick={this.toggleContent}>Toggle Button</button>
        {
          this.state.visible &&  <h3>React Experiment #CodeWithTanay #learningReact 😃</h3>
        }
      </div>
    )
  }
}


class NavigationBar extends React.Component {

  state = {
      visible:false,
      login:false,
      username:"",
      count:3
  }

  unReadAll = () => {
    document.getElementById('backCol').style.backgroundColor="Orange";
    document.getElementById('backCol1').style.backgroundColor="Orange";
    document.getElementById('backCol2').style.backgroundColor="Orange"
    this.setState({count:3});
  }

  readAll = () => {
    document.getElementById('backCol').style.backgroundColor="White";
    document.getElementById('backCol1').style.backgroundColor="White";
    document.getElementById('backCol2').style.backgroundColor="White";
    this.setState({count:0});
  }

  handleChange = (event) => {
    this.setState({username: event.target.value});
  }

  checkUser = () => {
    if(this.state.username === ""){
      this.setState({login: false});
    }
    else{
      this.setState({login: true});
    }
  }

  logoutId = () => {
    this.setState({login:false});
    this.setState({username:""});
  }


  render(){
    return (
      <div>
        <div className="navbar">
          <a href="#home">Home</a>

            <div className = "dropdown-right">
              <div className="dropdown">
                {
                  this.state.login && <button className="dropbtn" onClick={this.setResetButton}>Message({this.state.count})<i className="fa fa-caret-down"></i></button>
                }
                <div className="dropdown-content">
                <button onClick={this.readAll}>ReadAll</button> <button onClick={this.unReadAll}>UnreadAll</button>
                <div id="colorAll">
                  <h4 id="backCol">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                  <h4 id="backCol1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                  <h4 id="backCol2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                </div>
                </div>
              </div>
              <div className="dropdown">
                {
                  this.state.login && <button className="dropbtn">Notification({+scount + +lcount + +hcount})
                  <i className="fa fa-caret-down"></i>
                  </button>
                }
                <div className="dropdown-content">
                <div id="colorAll">
                  <h4 >You have <span role="img" aria-label="Happy">😃</span> {scount} Happy Reaction</h4>
                  <h4 >You have <span role="img" aria-label="Like">👍</span>  {lcount} Like Reaction</h4>
                  <h4 >You have <span role="img" aria-label="Haha">😂</span>  {hcount} Haha Reaction</h4>
                </div>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Login<i className="fa fa-caret-down"></i></button>
              <div className="dropdown-content">
                <input type="text" id="clearTF" className=".dropdown-content" value={this.state.username} onChange={this.handleChange} />
                <button type="submit"  onClick={this.checkUser} >Submit</button>
              </div>
            </div>
          </div>
        </div>
        {
            this.state.login && <h1> Hey! {this.state.username}</h1>
        }
        <br/>
        {
          this.state.login && <button onClick={this.logoutId}>Logout</button>
        }
        {
          !this.state.login && <h1>Please login to see more</h1>
        }
      </div>
    )
  }
}


class App extends React.Component {
  state = {
    counter:0
  }

  smileyButtonHandlerIncrease = () => {
    this.setState({ counter: this.state.counter + 1 });
    scount++;
  }

  smileyButtonHandlerDecrease = () =>{
   if(this.state.counter === 0 || scount === 0){
      this.setState({counter:this.state.counter});
     scount=0;
   }
   else{
     this.setState({ counter: this.state.counter - 1 });
     scount--;
   }
  }

  likeButtonHandlerIncrease = () => {
    this.setState({ counter: this.state.counter + 1 });
    lcount++;
  }

  likeButtonHandlerDecrease = () =>{
   if(this.state.counter === 0 || lcount === 0){
      this.setState({counter:this.state.counter});
      lcount = 0;
    }
   else{
     this.setState({ counter: this.state.counter - 1 });
     lcount--;
   }
  }

  hahaButtonHandlerIncrease = () => {
    this.setState({ counter: this.state.counter + 1 });
    hcount++;
  }

  hahaButtonHandlerDecrease = () =>{
  if(this.state.counter === 0 || hcount === 0){
      this.setState({counter:this.state.counter});
      hcount=0;
    }
  else{
   this.setState({ counter: this.state.counter - 1 });
   hcount--;
    }
  }

  render(){
    return(
      <div>
        <NavigationBar />
        <br />
        <img src={Earth} alt="Earth.jpg" width="350" height="300"/>
        <br />
        <button onClick={this.smileyButtonHandlerDecrease}><span role="img" aria-label="Minus">➖</span></button>
        <button onClick={this.smileyButtonHandlerIncrease}><span role="img" aria-label="Happy">😃</span></button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.likeButtonHandlerDecrease}><span role="img" aria-label="Minus">➖</span></button>
        <button onClick={this.likeButtonHandlerIncrease}><span role="img" aria-label="Like">👍</span></button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.hahaButtonHandlerDecrease}><span role="img" aria-label="Minus">➖</span></button>
        <button onClick={this.hahaButtonHandlerIncrease}><span role="img" aria-label="Haha">😂</span></button>
        <h3>Total : {this.state.counter}</h3>
        <ToggleButton />
      </div>
    )
  }
}

export default App;
