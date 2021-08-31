import React, {useState, useEffect} from 'react'

const getItems =() => {
  return new Promise((res, rej) => {
    res([
      {
          id: 1,
          name:'name1',
          description: 'Description1'
      },
      {
          id: 2,
          name:'name2',
          description: 'Description2'
      },
      {
          id: 3,
          name:'name3',
          description: 'Description3'
      }
  ])
  })
}

function ItemContainer(){
  const[item, setItem] = useState([])
  useEffect(() => {
    getItems().then(items => {
      setItem(items)
    })
  }, [])
  return <Item  items = {item} />
}


function PokemonList({ pokemons}){
  return(
    <ul>
      {pokemons.map(p => (
        <li>{p}</li>
  ))}
    </ul>
  )
}

const getPokemons = () => {
  return new Promise((res, rej) => {
    res(['Pikachu', 'Charmander'])
  })
}

function PokemonContainer(){
  const[list, setList] = useState([])
  useEffect(() => {
    console.log('Pokémon container mounted')
    getPokemons().then(pokemons => {
      setList(pokemons)
    })
  }, [])
  return <PokemonList pokemons = {list} /> 
}
export default function App(){
  return(
    <>
      <h3>Pokémon App</h3>
      <PokemonContainer />
    </>
  );
}


 