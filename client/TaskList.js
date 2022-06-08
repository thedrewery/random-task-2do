import { Component } from "react";
import TaskController from "../server/controllers/taskController";
import TaskItem from "./TaskItem"

const TaskList = () => {
        return (
            <div className="taskListMain">
                <div className="header">
                    <form>
                        <input
                            placeHolder="Task"
                            onChange={(e) => this.props.item}
                        />
                        <button type="retrieve" onClick={(e) => TaskController.getTasks}> Get Tasks </button>
                        <button type="submit" onClick={(items) => TaskController.postTask}> Add Task </button>
                    </form>
                </div>
            </div>
        )
    }


export default TaskList;