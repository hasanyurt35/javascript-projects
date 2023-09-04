const express = require ('express');
const router =express.Router();
const data = require('../../data/products.js');

const {register, registerH, find, findAll, update, remove} = require("../services/productsService.js")

router.post('/register', register);
router.get("/:id", find)
router.get('/', findAll);
router.patch('/', update);
router.delete('/:id', remove);
router.post('/registerH', registerH);




module.exports =router

