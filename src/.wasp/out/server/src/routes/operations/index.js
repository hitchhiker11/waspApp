import express from 'express'

import auth from '../../core/auth.js'

import calculateBMR from './calculateBMR.js'
import createMealPlan from './createMealPlan.js'
import adjustMealPlan from './adjustMealPlan.js'
import getPersonalData from './getPersonalData.js'
import getMealPlan from './getMealPlan.js'
import getFoodItems from './getFoodItems.js'

const router = express.Router()

router.post('/calculate-bmr', auth, calculateBMR)
router.post('/create-meal-plan', auth, createMealPlan)
router.post('/adjust-meal-plan', auth, adjustMealPlan)
router.post('/get-personal-data', auth, getPersonalData)
router.post('/get-meal-plan', auth, getMealPlan)
router.post('/get-food-items', auth, getFoodItems)

export default router
