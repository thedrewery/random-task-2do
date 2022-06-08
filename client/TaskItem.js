import { render } from "express/lib/response";
import TaskController from "../server/controllers/taskController";

const TaskItem = () => {
  state = {
    items: []
  }
  render() {
    const { items } = this.props;
  }
  return (
    <div>
     {items.map((item, created_at) => (
       //eslint-disable-next-line
        <p { task }
        <button type="submit" onClick={(items) => TaskController.postTask}> Add Task </button>
        <button type="remove" onClick={(_id) => TaskController.deleteTask}> Delete Task</button>
       />
      ))}
    </div>
  );
}
export default TaskItem;