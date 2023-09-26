# node_foundation

fisrt make server.js
import express
and make http server to run project on port 5000
then make router folder 
then import router and express in it
make end points using router 
like const router = express.Router()
now end point router.get('/', (req, res)=>{
res.status(200).json({message: 'set goals})
},
now same as router.post, put and delete
but in delete and put mention id as
router.put(':id', (req, res)=>{
res.status(200).json({`update ${req.param.id}`})
})
now make controller in controller 
make getGoals , PostGoals,  and update goals and delet goals, 
and put router function in it like : 
const getGoals = (req, res)=>{
    res.status(200).json( {message: 'Get goals'} )
} then export it.
and then import in route file in like:
const {getGoals,
    postGoal,
    updateGoal,
    deleteGoal} = require('../controller/goalsControlers'); 
    then for each route make get, post and put, del requesrt like:
  
   by each route 
 router.get('/', getGoals)
 router.post('/', postGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

    by  chaining system 
    router.route('/').get(getGoals).post(postGoal);
    router.route('/:id').put(updateGoal).delete(deleteGoal);

    then use this in server.js 
    app.use('/api/goals', require('./routes/goalsRoute'))
