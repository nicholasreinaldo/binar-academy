// Create a Task Manager module using the Module Pattern in Node.js. The Task Manager should allow users to:
// Add tasks to the task list.
// Retrieve the list of tasks.
// Mark tasks as completed.
// Remove tasks from the task list.
// Requirements:
// Create a taskManager.js file to implement the Task Manager module using the Module Pattern.
// The module should have methods for adding tasks, getting the task list, marking tasks as completed, and removing tasks.
// Ensure that tasks are represented as objects with properties like id, title, description, and completed.
// Implement functionality to generate unique IDs for tasks.
// Use appropriate data structures to store tasks (e.g., arrays, objects).
// Export the Task Manager module so it can be used in other Node.js files.

const TaskManager = require('./taskManager');

// Testing scenarios:
// Add 3 Tasks
TaskManager.addTask('Task 1', 'Description for Task 1');
TaskManager.addTask('Task 2', 'Description for Task 2');
TaskManager.addTask('Task 3', 'Description for Task 3');

// Get Task List
let tasks = TaskManager.getTasks();
console.log('Task List:', tasks);

// Complete a Task
TaskManager.completeTask(1);

// Remove a Task
TaskManager.removeTask(2);

// Get Task Lists again to test
tasks = TaskManager.getTasks();
console.log('Task List:', tasks);

// Add 1 Tasks to test for the last time;

TaskManager.addTask('Task 4', 'Description for Task 4');

// Get Task Lists again for the last time;
tasks = TaskManager.getTasks();
console.log('Task List:', tasks);