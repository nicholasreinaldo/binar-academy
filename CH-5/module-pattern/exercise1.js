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

TaskManager.addTask('Task 1', 'Description for Task 1');
TaskManager.addTask('Task 2', 'Description for Task 2');
TaskManager.addTask('Task 3', 'Description for Task 3');

const tasks = TaskManager.getTasks();
console.log('Task List:', tasks);

TaskManager.completeTask(1);

TaskManager.removeTask(2);