import React, { Component } from 'react'
import FuncComp from './FuncComp'
import RegComp from './RegComp'

export default class ParentComp extends Component {
    state=({
        uname:'srikanth'
    })
    componentDidMount(){
        setInterval(()=>{
            this.setState=({
                uname:'Reddy'
            })
        },2000)
    }
    render() {
        return (
            <div>
                <RegComp uname={this.state.uname}/>
                <FuncComp uname={this.state.uname} />
            </div>
        )
    }
}
