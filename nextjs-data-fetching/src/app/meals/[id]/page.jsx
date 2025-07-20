import React from 'react'

    const fetchMeal = async (id) => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals || []; 
        } catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    }
   

    export async function generateMetadata( { params }){
      // read route params
      const { id } = await params
      // fetch data
      const [singleMeal] = await fetchMeal(id)
    
      return {
        title: singleMeal.strMeal,
        description: singleMeal.strInstructions,
      }
    }
   
export default async function SingleMealPage({params}) {
    const p = await params;
     const meal =await  fetchMeal(p?.id);
  return (
    <div>
      <h1>Meal Details</h1>
      <p>{JSON.stringify(meal)}</p>
    </div>
  )
}
