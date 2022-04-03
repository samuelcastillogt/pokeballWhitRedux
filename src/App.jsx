import { useEffect, useState } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import './App.css'
import { getAllPokemon, getPokemonUrl } from './hooks/useData'
import Header from  "./components/Header"
import PokedexContainer from './components/PokedexContainer'
import PokemonCard from './components/PokemonCard'
import {setPokemon} from "./actions"

function App() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)
  const getData= async()=>{
    const peticion = await getAllPokemon()
    dispatch(setPokemon(peticion))
  }
useEffect(()=>{
  getData()
}, [])  
   return (
    <div className="App">
    <Header />
    <PokedexContainer>
     {list && list.map(item=><PokemonCard name={item.name}/>)}
    </PokedexContainer>
    
    
    </div>
  )

 
}

export default App
