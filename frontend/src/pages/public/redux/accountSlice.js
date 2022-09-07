import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        isLogin: false,
        username: 'N/A',
    },
    reducers: {
        login: state => {
            state.isLogin = true
            state.username = 'Congrades You are login now'
            console.log(state.username)
        },
        logout: state => {
            state.isLogin = false
            state.username = 'You log out'
            console.log(state.username)
        }
    }
})

export const { login, logout } = accountSlice.actions
export const selectUsername = (state) => state.account.username
export const selectIsLogin = (state) => state.account.isLogin
export default accountSlice.reducer


// export const shelfSlice = createSlice({
//     name: 'shelf',
//     initialState: {
//         sort: 'DEFAULT',
        
//     },
//     reducers: {
//         sortBy: state = (key) => {
//             // Keys: 'DEFAULT', 'NAME ASC', 'NAME DESC', 
//             // 'PRICE ASC', 'PRICE DESC', 'DATE ASC', 'DATE DESC', 
//             // 'POPULARITY ASC', 'DESC'
//             state.sort = key
//         }
//     }
// })

