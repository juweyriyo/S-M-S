const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    studentTel: { // New field added for the student's studentTel
        type: String,
        required: true
    },
    parentName: { // New field added for the student's parentName
        type: String,
        required: true
    },
    parentTel: { // New field added for the student's parentTel
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
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },
    role: {
        type: String,
        default: "Student"
    },
    examResult: [
        {
            subName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'subject',
            },
            marksObtained: {
                type: Number,
                default: 0
            }
        }
    ],
    attendance: [{
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Present', 'Absent'],
            required: true
        },
        subName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: true
        }
    }],
    transferStatus: { // New field added for the student's transferStatus
        type: String,
        enum: ['New', 'Transfer'],
        required: true
    },
    previousSchoolName: { // New field added for the student's  previousSchoolName
        type: String,
        required: function() { return this.transferStatus === 'Transfer'; }
    },
    dateOfBirth: { // New field added for the student's dateOfBirth
        type: Date,
        required: true
    },
    placeOfBirth: { // New field added for the student's placeOfBirth
        type: String,
        required: true
    },
    currentAddress: {  // New field added for the student's current address
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("student", studentSchema);
