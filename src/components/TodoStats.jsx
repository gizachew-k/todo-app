const TodoStats = ({ todos, theme }) => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;
  
    return (
      <div className={`mt-4 text-sm text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        Total: {total} | 
        Completed: {completed} | 
        Pending: {pending}
      </div>
    );
  };
  
  export default TodoStats;