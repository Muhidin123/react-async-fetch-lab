import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }
  

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((people) => {
        console.log(people);
        this.setState({
          people: people.people,
        });
      });
  
    }
  render() {
    let i = 0
    return (
      <div>
        {
        this.state.people.map((human) => {
            i++
          return <p key={i}>{human.name}</p>;
        })}
      </div>
    );
  }
}
