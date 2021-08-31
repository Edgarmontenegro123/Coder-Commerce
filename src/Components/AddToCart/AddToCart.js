import {useState} from 'react'
import {Button} from '@material-ui/core'

export default function AddToCart(){
    const [state, setState] = useState(0)
    function addState(){
        if(state === 5){
            setState(state)
        }
        else{
            setState(state + 1)
        }
    }
    function restState(){
        if(state < 1){
            setState(state)
        }
        else{
            setState(state - 1)
        }
    }
    function onAdd(){
        alert(`You added ${state} courses!`)
    }
    return(
        <div>
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button onClick = {restState} style = {{color: 'hotpink', fontSize: '3rem'}}>-</Button>
                <span style = {{fontSize: '2rem'}}>{state}</span>
                <Button onClick = {addState} style = {{color: 'hotpink', fontSize: '3rem'}}>+</Button>
            </div>
            <Button onClick = {onAdd} style = {{color: 'whitesmoke', boxShadow: '1px 2px 3px hotpink'}}>Add To Cart!</Button>
        </div>
    )
}
