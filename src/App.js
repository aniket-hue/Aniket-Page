import React from 'react';
import './App.css';
import Github from './assets/git.svg';
import Facebook from './assets/face.svg';
import Linkedin from './assets/lin.svg';
import Icon from './component/icon'
import { TransitionGroup } from 'react-transition-group';
class App extends React.Component {
  state = {
    name: 'Hello'
  }

  nameHandle = (name) => {
    this.setState({ name: name });
  }

  badge = () => (
    <div className="text1">
      <h1>{this.state.name}</h1>
    </div>

  )

  render() {
    return (
      <div className="container">
        <div className="logo">
          {this.badge()}
        </div>
        <div className="text">
          <h1 id="texth1">I'm Aniket Saxena </h1>
          <p>Developer | Sport Programmer | Reader</p>
        </div>
        <div className="icons">
          <figure>

            <Icon name={Github} nameW="Github" clicked={this.nameHandle} />
            <Icon name={Linkedin} nameW="Linkedin" clicked={this.nameHandle} />
            <Icon name={Facebook} nameW="Facebook" clicked={this.nameHandle} />

          </figure>

        </div>
      </div>
    )
  }
}
export default App;