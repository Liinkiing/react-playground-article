import React, {Component} from 'react';
import styled from 'styled-components'
import './App.css';

const ListItem = styled.li`
  font-size: 2rem;
  color: red;
  :hover {
    color: blue;
  }
`

class App extends Component {

    state = {
        newTodo: '',
        todos: [
            {
                id: 1,
                name: 'Todo 1',
                dueDate: new Date()
            },
            {
                id: 2,
                name: 'Todo 2',
                dueDate: new Date()
            },
            {
                id: 3,
                name: 'Todo 3',
                dueDate: new Date()
            },
            {
                id: 4,
                name: 'Todo 4',
                dueDate: new Date()
            }
        ]
    }

    // Si votre state dépends des props, vous devez l'initialiser comme ceci, sinon préférez l'approche du dessus, qui est plus recommandé
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //     }
    // }

    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }

    handleInput = (e) => {
        if (e.keyCode === 13) {
            const { newTodo, todos } = this.state
            if (newTodo === '') return
            const id = todos[todos.length - 1].id + 1
            const todo = {
                id,
                name: newTodo,
                dueDate: new Date()
            };
            this.setState(prevState => ({
                todos: [...prevState.todos, todo],
                newTodo: ''
            }))
        }
    }

    render() {
        return (
            <div className="App">
                <p className="my-component">
                    Je suis mon premier composant
                </p>
                <ul>
                    {this.state.todos.length > 0 && this.state.todos.map(todo =>
                        <ListItem key={todo.id}>
                            {todo.name} - {todo.dueDate.toLocaleString()}
                        </ListItem>
                    )}
                </ul>
                <input type="text" value={this.state.newTodo} onChange={this.handleChange} onKeyDown={this.handleInput} placeholder="Entrez votre todo..."/>
            </div>
        );
    }
}

export default App;
