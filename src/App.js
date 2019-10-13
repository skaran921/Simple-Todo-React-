import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" width="100" />
          <p>Write Todo...</p>

          <input
            type="text"
            placeholder="Write Todo"
            className="inputBox"
            required
            value={this.state.newItem}
            onChange={e => {
              this.setState({ newItem: e.target.value });
            }}
          />
          <button
            className="btn"
            disabled={!this.state.newItem.length}
            onClick={() => this.addItem(this.state.newItem)}
          >
            Add Todo
          </button>
          <p>Todo List's...</p>
          <ul>
            {this.state.list.map(l => {
              return (
                <li id={l.id}>
                  <input type="checkbox" name="" id="" checked={l.isDone} />
                  {l.value} &nbsp;
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      this.deleteItem(l.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
