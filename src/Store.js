import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './Components/TodoSlice';


export const Store = configureStore ({
  reducer:{
    TodoReducer
  }
})