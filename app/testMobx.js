/**
 * Created by belle on 2017/10/27.
 */

import {observable, computed} from "mobx";
import  {observer} from "mobxReact";
import {Component} from "react";

////////////////////
// Store

class TodoStore {
    @observable todos = [];
    @computed get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length;
    }
    addTodo(task) {
        this.todos.push({ task, completed: false });
    }
}

////////////////////
// Components

@observer
class TodoList extends Component {
    render() {
        const { todoStore } = this.props;
        return (
            <div>
                { todoStore.todos.map((todo, index) => <Todo todo={todo} key={index} />)  }
                Progress: { todoStore.completedTodosCount }
            </div>
        );
    }
}

@observer
class Todo extends Component {
    render() {
        const { todo } = this.props;
        return (
            <li onDoubleClick={this.onRename}>
                <input
                    type="checkbox"
                    checked={ todo.completed }
                    onChange={ this.onToggleCompleted }
                />
                { todo.task }
            </li>
        );
    }
    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }
    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || "";
    }
}

////////////////////
// Init

const todoStore = new TodoStore();
todoStore.addTodo('foo');
todoStore.addTodo('bar');

React.render(
    <TodoList todoStore={todoStore} />,
    document.getElementById('app')
);




