import React, { Component } from 'react';
import { userInfo } from 'os';
import ReactDOM from 'react-dom';

// class App extends Component {
//   render() {
//     return <div><h5>Hello world</h5></div>;
//   }
// }

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Parez'
// };

// const element1 = (
//   <div>
//   <h3>
//     Hello, {formatName(user)}!
//   </h3>
//   </div>
// )
// ReactDOM.render(
//   element1,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h4>Hello, world!</h4>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// export default App;
// const INTERVAL = 100;
 
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 0 };
//   }

//   increment() {
//     this.setState({ value: this.state.value + 1 });
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     const value = this.state.value
//     return (
//       <div>
//         <p>Секундомер:</p>
//         <p>
//           <span>{Math.round(value / INTERVAL / 60 / 60)} : </span>
//           <span>{Math.round(value / INTERVAL / 90)} : </span>
//           <span>{Math.round(value / INTERVAL)} . </span>
//           <span>{value % INTERVAL}</span>
//         </p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Timer />, document.getElementById('root'));
// export default Timer;

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: this.props.start
//     };
//   }
//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   render() {
//     return (
//       <button onClick={this.increment.bind(this)} className="button">
//         Button was clicked {this.state.count} times
//       </button>
//     );
//   }
// }
// // render(<Button start={10} />, document.getElementById('btn'));

// export default Button;
// class Hello extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         message: "my friend(from state)!"
//     };
//     this.updateMessage = this.updateMessage.bind(this);
//     }
//   updateMessage() {
//     this.setState({
//       message: "my friend(from changed state)!"
//     });
//     }
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.state.message}!</h1>
//         <button onClick={this.updateMessage}>Click me!</button>
//       </div>
//     )
//   }
// }
// export default Hello;

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      message: "HI",
    }  
  };

  updateMessage = this.updateMessage.bind(this);

  updateMessage() {
    this.setState({
            message: "(changed state)!"
          }); 
  }

  onChange(e){
    if (e.target.checked){}
  }
  
  render() {  
    return (
      <div> 
        <h1>{this.state.message}</h1>
        <input type="text" 
          placeholder="Hello!"
          value={this.state.value}></input>
        <button onClick={this.updateMessage}>Don`t touch</button>
        <input type="checkbox" onChange={this.onChange.bind(this)} ></input>
      </div>
    )
  }
  // render(<Button/>,document.getElementById('root'))
}
// console.log(input)
export default Button;