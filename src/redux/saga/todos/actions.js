export const FETCH_TODOS = 'FETCH_TODOS';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const ADD_TODOS = 'ADD_TODOS';

export const fetchTodos = () => ({ type: FETCH_TODOS });
export const updateTodos = (data) => ({ type: UPDATE_TODOS, payload: data });
export const addTodos = (data) => ({ type: ADD_TODOS, payload: data }); 

