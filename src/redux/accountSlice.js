import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        userName: 'Account',
        password: '',
        email: '',
        uploadFiles: null,
        profileImageSrc: '',
    },
    reducers: {
        setUserName: (state, action) => {
            console.log("(accountSlice.js/setUserName): ", action.payload)
            state.userName = action.payload
        },
        setPassword: (state, action) => {
            console.log("(accountSlice.js/setPassword): ", action.payload)
            state.password = action.payload
        },
        setEmail: (state, action) => {
            console.log("(accountSlice.js/setEmail): ", action.payload)
            state.email = action.payload
        },
        setUploadFile: (state, action) => {
            console.log("(accountSlice.js/setUploadFile): ", action.payload)
            state.uploadFiles = action.payload
        },
        setProfileImageSrc: (state, action) => {
            console.log("(accountSlice.js/setProfileImageSrc): ", action.payload)
            state.profileImageSrc = action.payload
        },
    }
})

export const { setUserName, setPassword, setEmail, setUploadFile, setProfileImageSrc } = accountSlice.actions
export const selectUserName = (state) => state.account.userName
export const selectPassword = (state) => state.account.password
export const selectEmail = (state) => state.account.email
export const selectUploadFile = (state) => state.account.uploadFiles
export const selectProfileImageSrc = (state) => state.account.profileImageSrc

export default accountSlice.reducer

