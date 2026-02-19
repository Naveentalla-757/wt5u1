// Import EventEmitter from Node.js
const EventEmitter = require('events');

// Create an instance of EventEmitter
const customEmitter = new EventEmitter();

// -----------------------------------------
// Async Function to Simulate Delay Process
// -----------------------------------------
async function simulateAsyncProcess(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 2000); // 2 seconds delay
    });
}

// -----------------------------------------
// Event Listener 1: userLogin
// -----------------------------------------
customEmitter.on('userLogin', async (username) => {
    console.log(`User "${username}" is logging in...`);

    await simulateAsyncProcess('Checking user credentials...');

    console.log(`User "${username}" successfully logged in!`);
});

// -----------------------------------------
// Event Listener 2: sensorReading
// -----------------------------------------
customEmitter.on('sensorReading', async (sensorType, value) => {
    console.log(`Received a reading from ${sensorType}: ${value}`);

    await simulateAsyncProcess(`Processing ${sensorType} data...`);

    if (sensorType === 'temperature' && value > 30) {
        console.log('Warning: Temperature is too high!');
    } else {
        console.log('Sensor data processed successfully.');
    }
});

// -----------------------------------------
// Emit Events (Simulated Events)
// -----------------------------------------

// Simulate User Login after 1 second
setTimeout(() => {
    customEmitter.emit('userLogin', 'john_doe');
}, 1000);

// Simulate Temperature Sensor after 3 seconds
setTimeout(() => {
    customEmitter.emit('sensorReading', 'temperature', 35);
}, 3000);

// Simulate Humidity Sensor after 5 seconds
setTimeout(() => {
    customEmitter.emit('sensorReading', 'humidity', 50);
}, 5000);
