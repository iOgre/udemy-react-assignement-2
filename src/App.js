import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
 
  state = {
     enteredText : ""
  }
  
  textChangedHandler = (event) => {
    this.setState({enteredText : event.target.value});
  }
  
  removeLetterHandler = (index) => {
    const enteredArray = [...this.state.enteredText];
    enteredArray.splice(index, 1);
    const newText = enteredArray.join('');
    this.setState({enteredText : newText})
  }
  
  render() {
    const style = {
      marginLeft: '5px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc'
    };
    const projection = [...this.state.enteredText].map((ltr, idx)=>  { return {
      letter: ltr,
      index : idx
    }
    });
    const characterChain = projection.map((item) => {
      return (
        <CharComponent singleChar={item.letter}
                       key={item.index}
        clicked = { () => {
          this.removeLetterHandler(item.index);
        }
        }/>
      );
    });
    return (
      <div className="App">
        <input type="text" onChange={this.textChangedHandler} value={this.state.enteredText}/>
        <label style={style}>{this.state.enteredText.length}</label>
        <Validation text={this.state.enteredText}/>
        <div>
          {characterChain}
        </div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
