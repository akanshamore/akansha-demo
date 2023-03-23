/*import logo from './logo.svg';
import './App.css';
import React from 'react';

import ReactDOM from 'react-dom/client';


class Header extends React.Component {

  render() {


    return (<div>

      <h1>Indecision App</h1>
      <h2>Put your life in the hands of a computer</h2>
    </div>)
  }

}

class Option extends React.Component {



  render() {

    return (<p>
      {this.props.text}
    </p>)
  }
}
class Options extends React.Component {

  render() {

    return (<div>


      {this.props.options.map((option) => {

        return (<Option text={option} />)

      })}




    </div>)
  }

}
class AddOption extends React.Component {

  render() {

    return (<div>

      <input value={this.props.myInput} onChange={this.props.handleInputChange}/>
      <button onClick={this.props.handleClick}>Add Option</button>
    </div>)

  }
}

class Footer extends React.Component {

  render() {


    return (<footer>© 2023 All rights reserved</footer>)
  }
}
class App extends React.Component {

  state = {
    options: [],
    myInput: ''
  }





  handleInputChange = (e) => {


    this.setState({ myInput: e.target.value })
  }


  handleClick=()=>{

    if ( this.state.myInput)
    {
     const tempOptions=this.state.options.concat(this.state.myInput)

     this.setState({options:tempOptions})
    }
  }

  render() {



    return (<div>



      <Header />

      <Options options={this.state.options} />
      <AddOption myInput={this.state.myInput} handleInputChange={this.handleInputChange} handleClick={this.handleClick}/>
      <Footer />
    </div>)
  }

}



export default App;
