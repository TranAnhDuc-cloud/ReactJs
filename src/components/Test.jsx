import './App.css'
import Header from './components/Header';
import ReactDOM from 'react-dom';
import Siderbar from './components/Siderbar';
import Footer from './components/Footer';
import Body from './components/Body';
import React, { useState } from 'react';
import Radium, {StyleRoot} from 'radium';

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// ReactDOM.render(myelement, document.getElementById('root'));
// ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));

// const myNewElement = <h1> My New Element </h1>
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

// const myelement = <input type="text" />;

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand.model}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const getInfo = {name : "Fotuner" , model : "Toyota"};
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car brand={getInfo} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My Car</h1>
          <p>
            It is a {this.state.color} 
             {this.state.model}
            from  {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Car />, document.getElementById('main'));
  
  class Headers extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {favoritecolor: "red"};
    }
  
    static getDriverdStatedFromProps(props,state) {
      return {favoritecolor:props .favol};
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    }
    
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
          <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('header'));
  
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('main'));
  
  class InPutForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '', 
        password:'' ,
      }
    }
    handleChangeUsername = (event)=>{
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam] : val});
    }
    submitDelete = (event)=>{
      alert("Are You Sure Delete Elemet");
    }
    submitHandle = (event)=>{
      event.preventDefault();
      alert('Đã gửi thành công ' + this.state.username);
    }
    shouldComponentUpdate(){
      return true;
    }
    render() {
      return(
        <form onSubmit={this.submitHandle}>
          <h1>
            Hello {this.state.username} {this.state.password}
          </h1>
          <p>Enter You name:</p>
          <input name="username" type="text" onChange={this.handleChangeUsername}/>
          <p>Enter You Password:</p>
          <input name="password" type="password" onChange={this.handleChangeUsername}/>
          <button onClick={this.submitDelete}>Delete</button>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  ReactDOM.render(<InPutForm />, document.getElementById('main'));