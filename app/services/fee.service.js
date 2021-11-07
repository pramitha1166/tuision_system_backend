const { Fee } = require('../model/index')

exports.saveFeeService = (fee_item) => {
    return new Promise((resolve, reject) => {
        const fee = new Fee(fee_item)
        fee.save((err, fee) => {
            if(err) {
                reject(err)
            }else {
                resolve(fee)
            }
        })
    })
}

exports.gettAllFees = () => {
    return new Promise((resolve, reject) => {
        Fee.find()
            .exec((err, fees) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(fees)
                }
            })
    })
}

exports.getFeeById = (id) => {
    return new Promise((resolve, reject) => {
        Fee.findById(id, (err, fee) => {
            if(err) {
                reject(err)
            }else {
                resolve(fee)
            }
        })
    })
}

