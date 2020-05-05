import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Modifpdf'
import Modifpdf from './Modifpdf';
import Formulaire from './Formulaire';
/**sudo after */
class App extends Component {
  suiteFalse(val, tab){
    for(var i= val+1; i < tab.length; i++)
    {
        if (tab[i] ==false) return true;
    }
    return false
  }

  fct(){
    return(console.log("ggggg"))
  }

  test(params) {

    var tab1 = [true,true,true,false]
    var tab2 = [{name : "1"},{name : "2"},{name : "3"},{name : "null"}]
    var valeurSupprimer = 1;

    console.log("First test")
    console.log(tab1)
    console.log(tab2)
    console.log(tab2[0].name,tab2[1].name,tab2[2].name,tab2[3].name)
    var valeurPosNeg= false;
    
    for(var i= valeurSupprimer+1; i < tab1.length; i++)
    {
        if (tab1[i] ==false) valeurPosNeg=true;
    }
    
    if(valeurPosNeg) {
      for(var i= valeurSupprimer; i < tab1.length-1; i++)
      {
          tab2[i]=tab2[i+1]
          tab1[i]=tab1[i+1]
      }
    }

    console.log("Second test")
    console.log(tab1)
    console.log(tab2)
    
  }
  test2(){
    var tab2 = [{name : "1"},{name : "2"},{name : "3"},{name : "null"}]
    tab2.map((element)=> {return (<div>
    <h1>{element.name}</h1> 
    <button onClick={()=>{
      console.log("iugk")
    }}></button>
  </div>);})
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{
          var tab2 = [{name : "1"},{name : "2"},{name : "3"},{name : "null"}]
          tab2.map((element)=> {return (<div>
          <h1>{element.name}</h1> 
          <button onClick={()=>{
            console.log("iugk")
          }}>hyyyyyyyyyyy</button>
        </div>);})
        }}>hounaaaaa</button>
        <Formulaire/>
      </div>
    );
  }
}

export default App;
