const db = require('../db');

class Barang {
    static create (req, res) {
        const {
            name, kategory, harga
        } = req.body

        db.query(`insert into barang (name, kategory, harga) values ('${name}', '${kategory}', '${harga}') `,
            (err, result) => {
                if(err) {
                    return res.status(400).json({
                        status: 'error',
                        message: err.message,
                    })
                } else {
                    return res.status(201).json({
                        status : 'success',
                        message: 'success add data',
                        data: result.rows
                    })
                }
            }
        )
    }
    static read (req, res) {
        db.query(`select * from barang;`, (err, result) => {
            if(err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message,
                })
            } else {
                return res.status(200).json({
                    status : 'success',
                    message: 'success get all data',
                    data: result.rows
                })
            }
        })
    }
    static read_id (req, res) {
        const id = req.params.id;
        db.query(`select * from barang where id=${id};`, (err, result) => {
            if(result === null) {
                return res.status(404).json({
                    status: 'error',
                    message: 'data not found'
                })
            } else {
                return res.status(200).json({
                    status : 'success',
                    message: 'success get data by id',
                    data: result.rows
                })
            } 
        })
    }
    static update (req, res) {
        const id = req.params.id;
        const {
            name, kategory, harga
        } = req.body

        db.query(`update barang 
                set name='"+${name}+"'
                where id=${id}`,
            (err, result) => {
                //return console.log(err);
                if(err) {
                    return res.status(400).json({
                        status: 'error',
                        message: err.message,
                    })
                } else {
                    return res.status(200).json({
                        status : 'success',
                        message: 'success edit data',
                        data: result.rows
                    })
                }
            }
        )
    }
    static delete (req, res) {
        const id = req.params.id;
        db.query(`delete from barang where id=${id};`, (err, result) => {
            if(err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message,
                })
            } else {
                return res.status(200).json({
                    status : 'success',
                    message: 'success delete data',
                })
            }
        })
    }
}

module.exports = Barang