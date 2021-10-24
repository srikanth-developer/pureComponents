import React from 'react'
import ParentComp from './ParentComp'

function FuncComp(props) {
    return (
        <div>
            {props.uname}
            {console.log('Functional Component',props.uname)}
            
        </div>
    )
}

export default React.memo( FuncComp)
