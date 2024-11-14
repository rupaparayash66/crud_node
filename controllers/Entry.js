var ENTRY = require('../models/Entry')

exports.Add = async (req, res) => {
    try {

        let { Email, Password, gender, hobby, city ,imgURL } = req.body

        let data = await ENTRY.create(req.body)

        res.status(201).json({
            status: "sucessfully",
            data
        })

    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: error.message
        })

    }
}

exports.Allget = async (req, res) => {
    try {

        let data = await ENTRY.find()

        res.status(201).json({
            status: "sucessfully",
            data
        })

    } catch (error) {

        res.status(401).json({
            status: "failed",
            message: error.message
        })

    }
}

exports.get = async (req, res) => {
    try {

        let { Email, Password, gender, hobby, city ,imgURL } = req.body

        let data = await ENTRY.findById(req.params.id)

        res.status(201).json({
            status: "sucessfully",
            data
        })

    } catch (error) {

        res.status(401).json({
            status: "failed",
            message: error.message
        })

    }
}

exports.update = async (req, res) => {
    try {

        let { Email, Password, gender, hobby, city ,imgURL } = req.body

        let data = await ENTRY.findByIdAndUpdate(req.params.id, req.body)

        res.status(201).json({
            status: "sucessfully",
        })

    } catch (error) {

        res.status(401).json({
            status: "failed",
            message: error.message
        })

    }
}

exports.delete = async (req, res) => {

    try {

        let {Email, Password, gender, hobby, city ,imgURL} = req.body

        let data = await ENTRY.findByIdAndDelete(req.params.id)

        res.status(201).json({
            status: "sucessfully",
        })

    } catch (error) {

        res.status(401).json({
            status: "failed",
            message: error.message
        })

    }
}



