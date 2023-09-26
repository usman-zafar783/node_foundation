
const getGoals = (req, res)=>{
    res.status(200).json( {message: 'Get goals'} )
}

const postGoal= (req, res)=>{
    res.status(200).json( {message: 'set goals'} )
}
const updateGoal= (req, res)=>{
    res.status(200).json( {message: `update goals ${req.params.id}`} )
}

const deleteGoal=  (req, res)=>{
    res.status(200).json( {message: `delete goals ${req.params.id}`} )
}



module.exports={
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}