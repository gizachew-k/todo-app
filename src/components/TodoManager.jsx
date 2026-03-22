import { useReducer, useEffect, useState } from 'react';
import todoReducer, { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../reducers/todoReducer';

const TodoManager = ({ theme }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      dispatch({ type: ADD_TODO, payload: newTodo });
      setInputText('');
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const toggleComplete = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className={`flex-1 border rounded px-3 py-2 ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-900'
          }`}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.length === 0 ? (
          <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            No todos yet. Add one above!
          </p>
        ) : (
          todos.map(todo => (
            <li key={todo.id} className={`p-3 border rounded flex items-center gap-2 ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="w-5 h-5"
              />
              <span className={`flex-1 ${todo.completed ? 'line-through' : ''} ${
                todo.completed 
                  ? (theme === 'dark' ? 'text-gray-500' : 'text-gray-400')
                  : (theme === 'dark' ? 'text-white' : 'text-gray-900')
              }`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoManager;