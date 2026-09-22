const fs = require("fs");

function readEvents() {
    const data = fs.readFileSync("events.json", "utf8");
    return JSON.parse(data);
}

function displayEvents(events) {
    events.forEach((event, index) => {
        console.log(`Event ${index + 1}`);
        console.log(`Name: ${event.eventName}`);
        console.log(`Date: ${event.date}`);
        console.log(`Time: ${event.time}`);
        console.log(`Location: ${event.location}`);
        console.log(`Category: ${event.category}`);
        console.log("-------------------------");
    });
}

const events = readEvents();

displayEvents(events);