const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const Order = require('../model/order.model');
const db = require('../database/config');
const router = express.Router();

// connect to mongodb
mongoose.connect(db.url);
mongoose.Promise = global.Promise;

/* GET: get all orders. */
router.get('/', function (req, res, next) {
    Order.find({}).then(function (orders) {
        res.send(orders);
    }).catch(next);
});

/* GET: get order by order id. */
router.get('/:orderId', function (req, res, next) {
    Order.findOne({id: req.params.orderId}).then(function (order) {
        if (order == null) {
            res.send({message: 'Order not found'});
        } else {
            res.send(order);
        }
    }).catch(next);
});

// POST: save new order to db.
router.post('/', function (req, res, next) {
    Order.create(req.body).then(function (order) {
        res.send(order);
    }).catch(next);
});

/* PUT: update order by order id. */
router.put('/:orderId', function (req, res, next) {
    Order.findOne({id: req.params.orderId}).then(function (order) {
        if (order == null) {
            res.send({message: 'Order not found'});
        } else {
            Order.findOneAndUpdate({id: req.params.orderId}, req.body, {new: true}).then(function (order) {
                res.send(order);
            }).catch(next);
        }
    }).catch(next);
});

module.exports = router;