import React, { useState } from 'react';
import { useAction } from '@wasp/actions';
import calculateBMR from '@wasp/actions/calculateBMR';

export function DataEntry() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState('');
  const [dietaryGoals, setDietaryGoals] = useState('');

  const calculateBMRFn = useAction(calculateBMR);

  const handleCalculateBMR = () => {
    calculateBMRFn({
      weight: parseFloat(weight),
      height: parseFloat(height),
      age: parseInt(age),
      gender,
      physicalActivityLevel,
      dietaryGoals
    });
  };

  return (
    <div className='p-4'>
      <div className='mb-2'>
        <label className='block mb-1 font-bold'>Weight</label>
        <input
          type='number'
          placeholder='Weight'
          className='px-1 py-2 border rounded'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <label className='block mb-1 font-bold'>Height</label>
        <input
          type='number'
          placeholder='Height'
          className='px-1 py-2 border rounded'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <label className='block mb-1 font-bold'>Age</label>
        <input
          type='number'
          placeholder='Age'
          className='px-1 py-2 border rounded'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <label className='block mb-1 font-bold'>Gender</label>
        <select
          className='px-1 py-2 border rounded'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </div>
      <div className='mb-2'>
        <label className='block mb-1 font-bold'>Physical Activity Level</label>
        <select
          className='px-1 py-2 border rounded'
          value={physicalActivityLevel}
          onChange={(e) => setPhysicalActivityLevel(e.target.value)}
        >
          <option value='sedentary'>Sedentary</option>
          <option value='lightlyActive'>Lightly Active</option>
          <option value='moderatelyActive'>Moderately Active</option>
          <option value='veryActive'>Very Active</option>
          <option value='superActive'>Super Active</option>
        </select>
      </div>
      <div className='mb-2'>
        <label className='block mb-1 font-bold'>Dietary Goals</label>
        <select
          className='px-1 py-2 border rounded'
          value={dietaryGoals}
          onChange={(e) => setDietaryGoals(e.target.value)}
        >
          <option value='weightLoss'>Weight Loss</option>
          <option value='weightGain'>Weight Gain</option>
          <option value='maintenance'>Maintenance</option>
        </select>
      </div>
      <button
        onClick={handleCalculateBMR}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Calculate BMR
      </button>
    </div>
  );
}