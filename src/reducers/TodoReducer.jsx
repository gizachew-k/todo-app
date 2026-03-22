export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
      
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id 
          ? { ...todo, ...action.payload.updates } 
          : todo
      );
      
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
      
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload 
          ? { ...todo, completed: !todo.completed } 
          : todo
      );
      
    default:
      return state;
  }
};

export default todoReducer;