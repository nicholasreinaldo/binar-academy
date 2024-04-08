class User {
    constructor(name) {
      this.name = name;
    }
  
    update(changeType, taskId) {
      console.log(`User ${this.name} received update: Task ${taskId} has been ${changeType}.`);
    }
  }
  
  module.exports = User;