import { render } from "react-dom";
import { Component } from "react";
import TaskList from "./TaskList"

const App = () => {
    this.state = {
        items: [],
        currentItem: { text: '', key: '' },
    }
    return (
        <div className="App">
            <TaskList />
        </div>
    );
}    

render(<App />, document.getElementById("root"));