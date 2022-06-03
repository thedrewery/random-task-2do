import { render } from "react-dom";
import { Component } from "react";
import TaskList from "./TaskList"

const App = () => {
    return (
        <TaskList />
    );
}

render(<App />, document.getElementById("root"));