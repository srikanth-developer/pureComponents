import React, { PureComponent } from 'react'


/* 
    When a class component is extending PureComponent
    Whenever state or props is chabged in shouldComponentUpdate Method
    shallow comparison of the state or props will be done and if at all if there
    are some changes in the state or props the next life cycle methods of updating phase 
    will be executed i.e; render(),getSnapshortBeforeUpdate(),componentDidUpdate() 
    else the next life cycle methods of updating phase will not be executed

    Note:it does shallow comparison not deep Comparison
 */
export default class RegComp extends PureComponent {
    render() {
        console.log(this.props.uname);
        return (
            <div>
                {this.props.uname}
            </div>
        )
    }
}
