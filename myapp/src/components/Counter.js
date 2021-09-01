import React, {Component} from 'react'
// import {Button} from 'semantic-ui-react'
import './Counter.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
increaseCount,
decreaseCount
} from '../actions/Counter'
const buttonStyle = {
  fontSize: 20, width: '80px',  height: '40px',  fontWeight: 'bold' , backgroundColor:"blue",
}
const divstyle = {
  display: 'inline',
 
}
class Counter extends Component {
      static mapStateToProps = state => {
            return {
                    count: state.counterReducer.count
                     }
          }
       static mapDispatchToProps = dispatch => {
                   return bindActionCreators({
                   increaseCount, decreaseCount
         },
  dispatch 
)}


render() {
          const { increaseCount, decreaseCount } = this.props
            return(
        < div className='counter'>
          {/* <h2>count1 : {this.props.number}</h2> */}
          <div style={divstyle}>
 
         
        <button style={buttonStyle} onClick={increaseCount} >+</button><br/>
       
        <span><h2>{this.props.count}</h2></span><br/>
        <button style={buttonStyle}  onClick={decreaseCount}>-</button>
        </div>
        </div>
)}}
export default connect(Counter.mapStateToProps,Counter.mapDispatchToProps)(Counter)