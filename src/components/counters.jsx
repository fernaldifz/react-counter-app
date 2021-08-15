import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - rendered");

    const { counters, onAdd, onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete} //same as onDelete={this.props.onDelete} without const above
            counter={counter}
          >
            <h6>Counter #{counter.id}</h6>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
