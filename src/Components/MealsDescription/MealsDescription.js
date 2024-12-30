import { useParams, useLoaderData } from "react-router-dom"




export default function MealsDescription() {
    
    const descriptionLoader = useLoaderData()
    let { id } = useParams()
  
    return (
    <div className="meals-description">
        <h1>{descriptionLoader.meal}</h1>
        <p>{descriptionLoader.cost}</p>
        <p>{descriptionLoader.spice}</p>
        <p>{descriptionLoader.description}</p>
    </div>
  )
}


export async function descriptionloader({params}) {

    const response = await fetch(`http://localhost:4000/meals/` + params.id)
    console.log(params)
    if (!response.ok) {
        throw new Error('Failed to fetch meals')
    } 
        return response.json()
    
  
}