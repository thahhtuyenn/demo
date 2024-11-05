    import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './slices/TodoSlice';

    const store = configureStore({
        reducer: {
            todos: TodoSlice,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });

    export default store;