const asyncHandler = require('express-async-handler')
const {Goal} = require('../models/goalsModels')

// const GetAllGoals = (req, res) => {
//     res.status(200).json({
//         message: 'Get all Goal'
//     })
// }
const GetAllGoals = asyncHandler(async (req, res) => {
    const goals =await Goal.find().sort({createdAt:-1})
    res.status(200).json({
        message: 'Get all Goal',
        goals
    })
    
    // Goal.find().sort({createdAt:-1})
    // .then( (data) => {
    //     res.status(200).json(data)
    // })

    // Goal.find().sort({createdAt:-1})
    // .then( (data) => {
    //     res.status(200).json(data)
    // })
})


const GetGoals = asyncHandler(async(req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)
    res.status(200).json({
        message: `Get  Goal ${id}`,
        goal
    })
}
)

// const SetGoals = (req, res) => {
//     console.log(req.body);
//     if (!req.body) {
//         res.status(400)
//         throw new Error('please add a text field')
//     }

//     console.log(req.body);
//     const data = new Goal(req.body)
//     data.save()
//     .then(result => {
//         res.status(200).json(result)
//     })
//     .catch(err => console.log(err))
// }


const SetGoals = asyncHandler( async(req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400)
        throw new Error('please add a text field')
    }
    console.log(req.body);
    const data = await new Goal(req.body)
    const okm = await  data.save()
    res.status(200).json(okm)
}
)
const UpdateGoal = asyncHandler(async (req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)
    const data = req.body
    if (!req.body) {
        res.status(400)
        throw new Error('Please add a text field')
      }

    
  const updatedGoal = await Goal.findByIdAndUpdate(goal, data, {
    new: true,
  })

  res.status(200).json(updatedGoal)

}
)

const DeleteGoal = asyncHandler( async(req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
      }

    await goal.remove()


    res.status(200).json({ id: id })

})



module.exports = {
    GetAllGoals,
    GetGoals,
    SetGoals,
    UpdateGoal,
    DeleteGoal
}