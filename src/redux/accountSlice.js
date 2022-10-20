import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        uploadFiles: null,
        profileImageSrc: '',
    },
    reducers: {
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

export const { setUploadFile, setProfileImageSrc } = accountSlice.actions
export const selectUploadFile = (state) => state.account.uploadFiles
export const selectProfileImageSrc = (state) => state.account.profileImageSrc

export default accountSlice.reducer

