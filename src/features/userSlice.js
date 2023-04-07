import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isToken: false,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logIn: (store, actions) => {
      store.isToken = actions.payload
    },
  },
})

export const { logIn } = userSlice.actions
export default userSlice.reducer
