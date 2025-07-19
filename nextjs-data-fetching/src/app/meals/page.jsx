import React from 'react'
import MealSearchInput from './components/MealSearchInput';

export default async function MealsPage({searchParams}) {
    const query = searchParams;
   

    const fetchMeals = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search }`);
        const data = await res.json();
        return data.meals ;
        } catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    }
 const meals =await  fetchMeals();
    
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <h3>Search Meals</h3>
      {/* <input className='border mb-2 rounded ' value={search} onChange={(e) => setSearch(e.target.value)} /> */}
      <MealSearchInput/>
      <p className='text-blue-600 mb-4'>List of meals fetched from an external API.</p>
      
      <div className='space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {
    meals.map(meal => (
          <div key={meal.idMeal} className='p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 w-full'>
            <h2 className='text-lg font-semibold'>{meal.strMeal}</h2>   
            <p className='text-gray-600'>{meal.strArea} - {meal.strCategory}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-48 object-cover rounded mt-2' />
            </div>
        ))}
      </div>
    </div>
  )
}
