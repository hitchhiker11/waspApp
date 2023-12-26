import React, { useState } from 'react';
import { useQuery } from '../../queries';
import { useAction } from '../../actions';
import adjustMealPlan from '../../actions/adjustMealPlan';
import getPersonalData from '../../queries/getPersonalData';
import getMealPlan from '../../queries/getMealPlan';
import getFoodItems from '../../queries/getFoodItems';

export function MealAdjustment() {
  const { data: personalData, isLoading: personalDataLoading, error: personalDataError } = useQuery(getPersonalData);
  const { data: mealPlan, isLoading: mealPlanLoading, error: mealPlanError } = useQuery(getMealPlan);
  const { data: foodItems, isLoading: foodItemsLoading, error: foodItemsError } = useQuery(getFoodItems);
  const adjustMealPlanFn = useAction(adjustMealPlan);

  const [selectedFoodItem, setSelectedFoodItem] = useState('');
  const [selectedServings, setSelectedServings] = useState(0);

  const handleAdjustMealPlan = () => {
    adjustMealPlanFn({ foodItem: selectedFoodItem, servings: selectedServings });
    setSelectedFoodItem('');
    setSelectedServings(0);
  };

  if (personalDataLoading || mealPlanLoading || foodItemsLoading) return 'Loading...';
  if (personalDataError || mealPlanError || foodItemsError) return 'Error: ' + (personalDataError || mealPlanError || foodItemsError);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Meal Adjustment</h1>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <h2 className='text-xl font-bold mb-2'>Personal Data</h2>
          <p>Weight: {personalData.weight}</p>
          <p>Height: {personalData.height}</p>
          <p>Age: {personalData.age}</p>
          <p>Gender: {personalData.gender}</p>
          <p>Physical Activity Level: {personalData.physicalActivityLevel}</p>
          <p>Dietary Goals: {personalData.dietaryGoals}</p>
        </div>
        <div>
          <h2 className='text-xl font-bold mb-2'>Meal Plan</h2>
          {mealPlan.map((meal) => (
            <div key={meal.id} className='flex justify-between items-center mb-2'>
              <p>{meal.foodItem}</p>
              <p>{meal.servings}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-2'>Adjust Meal Plan</h2>
        <select
          value={selectedFoodItem}
          onChange={(e) => setSelectedFoodItem(e.target.value)}
          className='border border-gray-300 rounded p-2 mb-2'
        >
          <option value=''>Select Food Item</option>
          {foodItems.map((foodItem) => (
            <option key={foodItem.id} value={foodItem.foodItem}>{foodItem.foodItem}</option>
          ))}
        </select>
        <input
          type='number'
          value={selectedServings}
          onChange={(e) => setSelectedServings(parseInt(e.target.value))}
          className='border border-gray-300 rounded p-2 mb-2'
        />
        <button
          onClick={handleAdjustMealPlan}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Adjust Meal Plan
        </button>
      </div>
    </div>
  );
}