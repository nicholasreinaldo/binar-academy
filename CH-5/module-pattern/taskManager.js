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

// taskManager.js
const User = require('./user');

const TaskManager = (function() {
  let tasks = [];
  let currentId = 1;
  let observers = [];

  function Task(title, description) {
    this.id = currentId++;
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  function addObserver(observer) {
    observers.push(observer);
  }

  function removeObserver(observer) {
    observers = observers.filter(obs => obs !== observer);
  }

  function notifyObservers(changeType, taskId) {
    observers.forEach(observer => {
      observer.update(changeType, taskId);
    });
  }

  function addTask(title, description) {
    const task = new Task(title, description);
    tasks.push(task);
    console.log(`Adding Task number ${task.id}`);
    notifyObservers('added', task.id);
  }

  function getTasks() {
    console.log('=========== Task List ==========');
    return tasks;
  }

  function completeTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Task #${taskId} has been marked completed`);
      notifyObservers('completed', taskId);
    } else {
      console.error(`Error: Task #${taskId} not found`);
    }
  }

  function removeTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      tasks = tasks.filter(task => task.id !== taskId);
      console.log(`Task #${taskId} has been removed`);
      notifyObservers('removed', taskId);
    } else {
      console.error(`Error: Task #${taskId} not found`);
    }
  }

  return {
    addObserver,
    removeObserver,
    addTask,
    getTasks,
    completeTask,
    removeTask
  };
})();

module.exports = TaskManager;
