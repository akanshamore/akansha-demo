import logo from './logo.svg';
import './App.css';
import React from 'react';

import ReactDOM from 'react-dom/client';


class Header extends React.Component{

render(){
  console.log(this.props);

  return(<div><h1>{this.props.title}</h1>
  <p>{this.props.subtitle}</p></div>)

}
}


class Options extends React.Component{

  render(){


    return (<div>
      <ol>
        {this.props.options.map((option,key)=>
        {
          
          return (<Option option={option} key={key}/>)
        })}
        </ol>
        
        </div>)
        
  }
}


class Option extends React.Component{
  handleremove()
{
  alert("handle remove");
}  render(){
  
    return (<li style={{flexDirection:'row',display:'flex'}}><p>{this.props.option}</p><button onClick={this.handleremove}>Remove</button> </li>)
  }
  
  }
class Action extends React.Component{
handleAddOption(e){
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option){

    alert("option");
  }

}
  render(){

    return(
    <div>
      <form onSubmit={this.handleAddOption}>
      <input type = "text" name ="option"/>
    <button>add option</button>
    </form>
    </div>)
  }
}
class Footer extends React.Component{

  render(){

    return(<div><p>© 2023 all rights reserved</p></div>)
  }
}


class App extends React.Component {



  render() {

    const title = "Indecision";
    const subtitle= "!!put your life in the hands of a computer";
    const options=  ["bring groceries","do shopping","making ppt"];
      
    return (<div>

     
      <Header title= {title} subtitle={subtitle}/>
      <Options options = {options}/>
      <Option/>
      <Action/>
      <Footer/>

      </div>
    )

    
  }

}



export default App;
