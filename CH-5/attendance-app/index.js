const readline = require('node:readline');
const fs = require('node:fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DATA_FILE = 'attendance_data.json'; // File to store data

// Initialize data (load from file if available)
let classes = {};

function loadData() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        classes = JSON.parse(data);
    } catch (err) {
        console.log('Error loading data:', err.message);
    }
}

function saveData() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(classes, null, 2), 'utf8');
        console.log('Data saved successfully.');
    } catch (err) {
        console.log('Error saving data:', err.message);
    }
}

function createClass() {
    rl.question('Enter the class name: ', (className) => {
        classes[className] = [];
        console.log(`Class "${className}" created successfully.`);
        displayMenu();
    });
}

function viewClasses() {
    console.log('===============================');
    console.log('Available classes:');
    Object.keys(classes).forEach((className) => {
        console.log(`- ${className}`);
    });
    displayMenu();
}

function addStudentToClass() {
    rl.question('Enter the class name: ', (className) => {
        if (classes[className]) {
            rl.question('Enter student name: ', (studentName) => {
                classes[className].push(studentName);
                console.log(`Student "${studentName}" added to class "${className}".`);
                displayMenu();
            });
        } else {
            console.log(`Class "${className}" does not exist.`);
            displayMenu();
        }
    });
}

function markAttendance() {
    rl.question('Enter the class name: ', (className) => {
        if (!classes[className]) {
            console.log(`Class "${className}" does not exist.`);
            displayMenu(); // Show menu again
            return;
        }

        rl.question('Enter student name: ', (studentName) => {
            const currentDate = new Date().toLocaleDateString();
            if (!classes[className].students) {
                classes[className].students = {};
            }
            classes[className].students[studentName] = currentDate;
            console.log(`Attendance marked for "${studentName}" in class "${className}" on ${currentDate}.`);
            saveData();
            displayMenu(); // Show menu again
        });
    });
}

function viewAttendance() {
    rl.question('Enter the class name: ', (className) => {
        if (!classes[className]) {
            console.log(`Class "${className}" does not exist.`);
            displayMenu(); // Show menu again
            return;
        }

        console.log(`Attendance records for class "${className}":`);
        const students = classes[className].students || {};
        Object.entries(students).forEach(([studentName, attendanceDate]) => {
            console.log(`- ${studentName}: ${attendanceDate}`);
        });
        displayMenu(); // Show menu again
    });
}

function exitApp() {
    saveData(); // Save data before exiting
    console.log('Exiting the app. Goodbye!');
    rl.close();
}

// Load existing data
loadData();

function displayMenu() {
    console.log('===============================');
    console.log('Student Attendance App');
    console.log('===============================');
    console.log('1. Create Class');
    console.log('2. View Classes');
    console.log('3. Add Student to Class');
    console.log('4. Mark Attendance');
    console.log('5. View Attendance');
    console.log('6. Exit');
    console.log('===============================');

    rl.question('Enter your choice: ', (userInput) => {
        switch (userInput) {
            case '1':
                createClass();
                break;
            case '2':
                viewClasses();
                break;
            case '3':
                addStudentToClass();
                break;
            case '4':
                markAttendance();
                break;
            case '5':
                viewAttendance();
                break;
            case '6':
                exitApp();
                break;
            default:
                console.log('Invalid choice. Please select a valid option.');
                displayMenu();
        }
    });
}

// Start the app
displayMenu();