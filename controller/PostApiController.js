const GetAllGoals = (req, res) => {
    res.status(200).json({
        message: 'Get all Goal'
    })
}


const GetGoals = (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `Get  Goal ${id}`
    })
}


const SetGoals = (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: 'Create all Goal'
    })
}

const UpdateGoal = (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `Update  Goal ${id}`
    })
}


const DeleteGoal = (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `Delete  Goal ${id}`
    })
}



module.exports = {
    GetAllGoals,
    GetGoals,
    SetGoals,
    UpdateGoal,
    DeleteGoal
}