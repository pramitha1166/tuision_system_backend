const { saveFeeService, gettAllFees, getFeeById } = require('../services/fee.service')

exports.saveFeeController = async (req, res) => {
    try {
        req.body.student = req.student._id
        req.body.class = req.class_item._id
        console.log(req.body)
        const result = await saveFeeService(req.body)
        res.status(201).json(result)
    } catch(err) {
        res.status(400).json({error: err})
    }
}