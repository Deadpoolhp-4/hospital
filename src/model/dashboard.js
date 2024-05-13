const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
    // Define your schema fields here
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    // Add more fields as needed
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;