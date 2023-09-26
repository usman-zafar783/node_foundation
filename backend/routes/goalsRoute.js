const express = require('express')
const router = express.Router()
const {getGoals,
    postGoal,
    updateGoal,
    deleteGoal} = require('../controller/goalsControlers');

    // chaining system 
    router.route('/').get(getGoals).post(postGoal);
    router.route('/:id').put(updateGoal).delete(deleteGoal);








// // by each route 
// router.get('/', getGoals)

// router.post('/', postGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router;