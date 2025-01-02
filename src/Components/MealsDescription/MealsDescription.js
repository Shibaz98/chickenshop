import { useParams, useLoaderData } from "react-router-dom"




export default function MealsDescription({addToCart}) {
    
    
    const descriptionLoader = useLoaderData()

    const handleClick = () =>{
        addToCart(descriptionLoader)
    };


    return (
    <div className="meals-description">
        <h1>{descriptionLoader.meal}</h1>
        <p>{descriptionLoader.cost}</p>
        <p>Spice level: {descriptionLoader.spice}</p>
        <p>{descriptionLoader.description}</p>
        <img src={descriptionLoader.image} alt="image of a spicy burger"/>
        <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}


export async function descriptionloader({params}) {

    const response = await fetch(`http://localhost:4000/meals/` + params.id)
    
    if (!response.ok) {
        throw new Error('Failed to fetch meals')
    } 
        return response.json()
    
  
}