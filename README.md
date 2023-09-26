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
but in delet and put mention id as
router.put(':id', (req, res)=>{
res.status(200).json({`update ${req.param.id}`})
})
