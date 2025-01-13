import { useLoaderData, Link } from "react-router-dom"

export default function Meals() {

  const meals = useLoaderData()
  console.log(meals)

  return (
    <div className="meals">
      <h1>Choose a preset meal!</h1>
      {meals.map((meal, index) =>
      <Link to={meal.id} key={index}>
        <h2>{meal.meal}</h2>
        <p>£{meal.cost}</p>
        <p>Spice level: {meal.spice}</p>
      </Link>
      )}
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

