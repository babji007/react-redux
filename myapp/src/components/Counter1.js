import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
  
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <h2>{this.props.count}</h2>
          {/* console.log({this.state.count}); */}
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.CReducer.count
  };
}

export default connect(mapStateToProps)(Counter)