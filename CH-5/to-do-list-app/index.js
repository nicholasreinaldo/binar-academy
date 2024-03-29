const readline = require('node:readline');

let userTask = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const addTask = (task) => {
    userTask.push(task);
    console.log(`Task "${task}" added`);
    rl.prompt();
};

const viewAllTask = () => {
    if (userTask.length === 0) {
        console.log("No tasks added yet");
    } else {
        console.log("All Tasks:");
        userTask.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    rl.prompt();
};

const deleteTask = (taskNumber) => {
    if (taskNumber >= 1 && taskNumber <= userTask.length) {
        const deletedTask = userTask.splice(taskNumber - 1, 1);
        console.log(`Task "${deletedTask}" deleted`);
    } else {
        console.log("Task number error, please try again");
    }
    rl.prompt();
};

const handleUserInput = (actionNumber) => {
    switch (actionNumber) {
        case '1':
            rl.question("Enter task: ", (task) => {
                addTask(task);
            });
            break;
        case '2':
            viewAllTask();
            break;
        case '3':
            rl.question("Enter task number to delete: ", (taskNumber) => {
                deleteTask(parseInt(taskNumber));
            });
            break;
        default:
            console.log("Input number error, please only put 1, 2 or 3");
            rl.prompt(); // Prompt again for next action
    }
};

console.log("Welcome to Task List App,\nType 1, 2 or 3 to do: \n1. Add task \n2. View all task\n3. Delete a task");

rl.on('line', (input) => {
    handleUserInput(input.trim());
}).on('close', () => {
    console.log('Thank you for using Task List App.');
    process.exit(0);
});
