// https://small-ear-9a7.notion.site/Comparison-and-Logical-Condition-e9326217f5464a72b3ab205b4ceaa1ef


function displayMenu() {
    console.log("Menu:");
    console.log("1. Print 'Hello'");
    console.log("2. Print 'Goodbye'");
    console.log("3. Quit");
}

 

function performAction(choice) {
    switch(choice) {
        case 1:
            console.log("Hello");
            break;
        case 2:
            console.log("Goodbye");
            break;
        case 3:
            console.log("Quitting...");
            break;
        default:
            console.log("Invalid choice! Please run the program again.");
            break;
    }
}

function getUserChoice() {
    return parseInt(prompt("Enter your choice:"));
}

function run() {
    displayMenu();
    const choice = getUserChoice();
    performAction(choice);
}

run();