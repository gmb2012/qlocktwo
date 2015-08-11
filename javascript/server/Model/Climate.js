const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    timestamp: { type: Date, default: Date.now },
    interior: {
        temperature: Number,
        humidity: Number
    },
    exterior: {
        temperature: Number,
        humidity: Number
    }
}, { collection: 'climate' });

schema.index({ timestamp: -1 }, { unique: true });

// access methods
schema.methods.findMostCurrent = function () {
    return this.model('Climate').findOne({}).limit(10).sort({ timestamp: -1 }).exec();
}

module.exports = mongoose.model('Climate', schema);
