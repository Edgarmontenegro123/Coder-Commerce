import React, {useState, useEffect} from 'react'
import './ListItemContainer.css'
import ItemList from '../ItemList/ItemList'

/* function getItems(){
  return new Promise((res, rej) => {
    res([{name: 'CardItem1'}, {name: 'CardItem2'}, {name: 'CardItem3'}])
  })
} 
// Esto es igual a la const de abajo!
*/

const getItems = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([{name: 'CardItem1'}, {name: 'CardItem2'}, {name: 'CardItem3'}])
    }, 3000)
    /* rej('No hay cursos disponibles!') */
  })
}

export default function ListItemContainer(){
  const[item, setItem] = useState([])
  const[error, setError] = useState(null)
  useEffect(() => {
    getItems().then(items => {
      setItem(items)
    },
    err => {
      setError(err)
    })
  }, [])
  return <>
          {error && <p style = {{color: 'whitesmoke'}}>{error}</p>}
          <ItemList items = {item}/>
        </>
}
