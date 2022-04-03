const API = "https://pokeapi.co/api/v2/"
const getAllPokemon = async()=>{
    try{
        const response = await fetch(`${API}pokemon?limit=10`)
        const data = await response.json()
        return data.results
    }catch{

    }
}
const getPokemon= async(id)=>{
    try{
    const response = await fetch(`${API}${id}`)
    const data = await response.json()
    return data
        
    }
    catch{
        console.log("Error")
    }
}
const getPokemonUrl= async(url)=>{
    try{
    const response = await fetch(url)
    const data = await response.json()
    return data
        
    }
    catch{
        console.log("Error")
    }
}
export { getAllPokemon, getPokemon, getPokemonUrl}