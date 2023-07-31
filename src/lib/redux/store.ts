import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
