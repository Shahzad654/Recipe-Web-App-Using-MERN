import {React, useState} from 'react'
import './create.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imgaeURL, setImgaeURL] = useState('')
  const [cookingTime, setCookingTime] = useState(0)
  const navigate = useNavigate()

  const createRecipe = async()=>{
    try{
    await axios.post('http://localhost:3001/recipes/recipe',{
        name,
        ingredients,
        instructions,
        imgaeURL,
        cookingTime
  
      }).then(
        (response)=>{
          alert('Recipe Created!')
          navigate('/')
        }
      )

    }
    catch(err){
      console.log(err)

    }
    

  }
  return (
    <>
    <Navbar/>
    <div className="create_container">
      <label htmlFor="">Name</label>
      <br/>
      <input type="text" placeholder='name' onChange={(e)=>{
        e.preventDefault()
        setName(e.target.value)
      }} />
      <br/>

      <label htmlFor="">Ingredients</label>
      <br/>
      <textarea type="text" placeholder='ingredients' onChange={(e)=>{
        e.preventDefault()
        setIngredients(e.target.value)
      }} />
      <br/>

      <label htmlFor="">Instructions</label>
      <br/>
      <input type="text" placeholder='instructions' onChange={(e)=>{
        e.preventDefault()
        setInstructions(e.target.value)
      }} />
      <br/>

      <label htmlFor="">ImageURL</label>
      <br/>
      <input type='url' placeholder='Image URL' onChange={(e)=>{
        e.preventDefault()
        setImgaeURL(e.target.value)
      }} />
      <br/>

      <label htmlFor="">Cooking Time</label>
      <br/>
      <input type="Number" placeholder='cooking time' onChange={(e)=>{
        e.preventDefault()
        setCookingTime(e.target.value)
      }}/>
      <br/>
      <button className='create_button' onClick={createRecipe}>Create</button>
    </div>
    </>
  )
}

export default Create