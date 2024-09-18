const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    studentTel: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    parentTel: {
        type: String,
        required: true
    },
    rollNum: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sclassName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sclass',
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true
    },
    role: {
        type: String,
        default: "Student"
    },
    transferStatus: {
        type: String,
        enum: ['New', 'Transfer'],
        default: 'New',
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    placeOfBirth: {
        type: String,
        required: true
    },
    currentAddress: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("student", studentSchema);
