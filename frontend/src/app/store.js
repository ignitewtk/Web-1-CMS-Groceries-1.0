import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../pages/public/redux/accountSlice'

export const store = configureStore({
    reducer: {
        account: accountReducer,
    }
})