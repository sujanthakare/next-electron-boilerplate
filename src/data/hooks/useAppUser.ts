import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import store, { injectLazyReducer } from '../store'

type UserState = {
  isLoggedIn: boolean
  data?: {
    name: string
  }
}

type StoreState = {
  appUser: UserState
}
const userStateSlice = createSlice({
  name: 'appUser',
  initialState: {
    isLoggedIn: false,
  } as UserState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<UserState>) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

injectLazyReducer(store, {
  key: userStateSlice.name,
  reducer: userStateSlice.reducer,
})

/**
 *
 *
 */
const useAppUser = () => {
  return {
    isLoggedIn: true,
    user: { name: 'sujan' },
    signOut: async () => {},
  }
}

export default useAppUser
