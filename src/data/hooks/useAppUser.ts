import { execute } from '@/data-bridge'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {} from 'electron-store'

import store, { injectLazyReducer } from '../store'
import storageService from '@/common/services/storage-service'
import { fetchUser } from '../data-fetchers'
import { User } from '@prisma/client'
import { createUserMutation } from '../data-mutators'

type UserState = {
  isLoggedIn: boolean
  data?: User
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
      if (payload.data?.email) {
        storageService.set('user', payload.data)
      }

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
  const dispatch = useDispatch()
  const { isLoggedIn, data: user } = useSelector(
    (state: StoreState) => state.appUser
  )

  useEffect(() => {
    const checkSession = async () => {
      const savedUser = storageService.get('user') as User

      if (savedUser) {
        const existingUser = await fetchUser({
          email: savedUser.email as string,
        })

        if (existingUser) {
          dispatch(
            userStateSlice.actions.setUserData({
              isLoggedIn: true,
              data: existingUser,
            })
          )
        } else {
          dispatch(
            userStateSlice.actions.setUserData({
              isLoggedIn: false,
            })
          )
        }
      }
    }

    checkSession()
  }, [dispatch])

  const signUp = async (email: string, name: string) => {
    const existingUser = await fetchUser({ email })

    if (existingUser) {
      dispatch(
        userStateSlice.actions.setUserData({
          isLoggedIn: true,
          data: existingUser,
        })
      )
    } else {
      const newUser = await createUserMutation({ email, name })

      dispatch(
        userStateSlice.actions.setUserData({
          isLoggedIn: true,
          data: newUser,
        })
      )
    }
  }

  return {
    isLoggedIn,
    user,
    signOut: async () => {},
    signUp,
  }
}

export default useAppUser
