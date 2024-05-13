const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;