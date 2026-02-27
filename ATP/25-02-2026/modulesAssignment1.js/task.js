                    import { validateDueDate,validatePriority,validateTitle } from "./validator.js"
                    const tasks = [];
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      if(validateTitle(title)&&validateDueDate(dueDate)&&validatePriority(priority))
                        tasks.push({title:title,priority:priority,dueDate:dueDate,status:"Incomplete"})
                    }
                   
                    // 2. Get all tasks
                    function getAllTasks() {
                      console.log(tasks)
                    }
                   
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                        tasks[taskId].status="Completed"
                    }
                    export {addTask,completeTask,getAllTasks}