import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_API = "https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos";

const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    try {
        const response = await axios.get(`${URL_API}?completed=false`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
const updateTodos = createAsyncThunk('updateTodos', async (data) => {
    try {
        const response = await axios.put(`${URL_API}/${data.id}`, data.body)
        return response.data;
    } catch (error) {
        console.log(error)
    }

})

const addTodo = createAsyncThunk('addTodo', async (data) => {
    try {
        const response = await axios.post(`${URL_API}`, data.body)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
const todoSlice = createSlice({
  name: "todos",
  initialState: {value: []},
  reducers: {
    setTodos: (state, action) => {
        state.value = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.value = action.payload 
    }) 
    builder.addCase(updateTodos.fulfilled, (state, action) => {
        
    })
    builder.addCase(addTodo.fulfilled, (state, action) => {
        state.value = [...state.value, action.payload]
    })
  }
});

export {fetchTodos, updateTodos, addTodo}
export const { setTodos } = todoSlice.actions
export default todoSlice.reducer;