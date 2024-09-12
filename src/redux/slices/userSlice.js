import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuth: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dispatchisAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
})

export const { dispatchisAuth } = userSlice.actions

export default userSlice.reducer
