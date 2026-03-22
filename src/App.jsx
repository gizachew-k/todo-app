import { useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import TodoManager from './components/TodoManager'
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto max-w-2xl p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Advanced Todo App
          </h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <TodoManager />
        </div>
        
        <div className={`p-8 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Theme system is working! Click the button to toggle dark/light mode.
          </p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Current theme: <span className="font-semibold">{theme}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;