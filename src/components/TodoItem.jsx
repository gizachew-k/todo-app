import { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo, theme }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCategory, setEditCategory] = useState(todo.category);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || '');

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, {
        text: editText,
        category: editCategory,
        dueDate: editDueDate || null,
      });
      setIsEditing(false);
    }
  };

  return (
    <li className={`p-3 border rounded ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      {isEditing ? (
        // Edit Mode
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={`w-full border rounded px-2 py-1 mb-2 ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            autoFocus
          />
          <div className="flex gap-2 mb-2">
            <select
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              className={`border rounded px-2 py-1 text-sm ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Shopping</option>
              <option>Other</option>
            </select>
            <input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
              className={`border rounded px-2 py-1 text-sm ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>
          <div className="flex gap-2">
            <button onClick={handleSave} className="text-green-600 hover:text-green-800 text-sm">Save</button>
            <button onClick={() => setIsEditing(false)} className="text-gray-600 hover:text-gray-800 text-sm">Cancel</button>
          </div>
        </div>
      ) : (
        // View Mode
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="w-5 h-5 cursor-pointer"
          />
          <span className={`flex-1 ${todo.completed ? 'line-through' : ''} ${
            todo.completed 
              ? (theme === 'dark' ? 'text-gray-500' : 'text-gray-400')
              : (theme === 'dark' ? 'text-white' : 'text-gray-900')
          }`}>
            {todo.text}
          </span>
          <div className="flex gap-2 text-xs">
            <span className={`px-2 py-1 rounded ${
              theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}>
              {todo.category}
            </span>
            {todo.dueDate && (
              <span className={`px-2 py-1 rounded ${
                theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
              }`}>
                📅 {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-600 hover:text-red-800 px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;