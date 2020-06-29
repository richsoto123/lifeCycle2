import React, {Component} from 'react'

class Ticker extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            pauseTicker: false
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                count: this.state.count +1
            })
        }, 1000)

    }
    shouldComponentUpdate(nextProps, nextState){
        if ( nextState.ount % 3 ===0)return true;
        else return false;

    }

    pause =() => {
        if(this.state.pauseTicker){
            this.setState({
                pauseTicker: false
            })
        } else{
            this.setState({
                pauseTicker: true
            })
        }


    }

    render (){
        return(
            <div>
                <p>The ticker is : {this.state.count}</p>
                <button type ="button">Reset Ticker</button>
                <button type = "button" onClick={this.pause}> 
          {this.state.pauseTicker ? 'Ticker is pause' : 'Pause the Ticker'}</button>
            </div>
        )
    }
}
export default Ticker