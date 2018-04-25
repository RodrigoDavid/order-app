const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const oldStatus = new Schema({date: Date, status: String});

// create order Schema & model
const OrderSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Order ID is required']
    },
    product: {
        type: [String],
        required: [true, 'Product name is required']
    },
    currentStatus: {
        type: String,
        default: 'Processing'
    },
    statusHistory: {
        list: {
            type: [],
            required: false
        }
    }
});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;