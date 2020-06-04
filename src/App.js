import React from 'react';
import './App.css';
import Icons from './component/Icon/Icons';
import Badge from './component/Badge/Badge';
import Links from './component/Links/Links';
import Cards from './component/Cards/Cards'
import Chart from './component/Chart/Chart'
class App extends React.Component {
  state = {
    name: 'Hello',
    show: false,
  }

  nameHandle = (name) => {
    this.setState({ name: name });
  }

  showHandle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="container">
        <Badge name={this.state.name} />
        <Icons clicked={this.nameHandle} />
        <Links projects={this.showHandle} />


        {this.state.show ? <Cards /> : null}
        <Chart/>
      </div >
    )
  }
}
export default App;