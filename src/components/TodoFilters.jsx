const TodoFilters = ({ filter, setFilter, theme }) => {
    const filters = ['all', 'active', 'completed'];
  
    return (
      <div className="flex gap-2 justify-center mb-4">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded capitalize transition-colors ${
              filter === f
                ? 'bg-blue-500 text-white'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    );
  };
  
  export default TodoFilters;