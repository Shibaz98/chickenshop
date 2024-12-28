import { useLoaderData, Link } from "react-router-dom"

export default function Meals() {

  const meals = useLoaderData()
  console.log(meals)

  return (
    <div className="meals">
      <h1>test</h1>
    </div>
  )
}

// need to use the loader data in the element at app level 
export async function mealsloader() {
    const response = await fetch('http://localhost:4000/meals')

    if (!response.ok) {
        throw new Error('Failed to fetch meals')
    } 
        return response.json()
    
  
}

