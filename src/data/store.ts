import {
  Reducer,
  Store,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'

import mutationApi from './mutation-api'
import queryApi from './query-api'

const defaultReducers = {
  [queryApi.reducerPath]: queryApi.reducer,
  [mutationApi.reducerPath]: mutationApi.reducer,
}

export const injectLazyReducer = (
  currentStore: Store & { lazyReducers?: Record<string, Reducer<any>> },
  reducerMap: {
    key: string
    reducer: Reducer<any>
  }
) => {
  if (!currentStore.lazyReducers) {
    currentStore.lazyReducers = {}
  }

  if (currentStore.lazyReducers[reducerMap.key]) {
    return
  }
  currentStore.lazyReducers[reducerMap.key] = reducerMap.reducer
  currentStore.replaceReducer(
    combineReducers({
      ...defaultReducers,
      ...currentStore.lazyReducers,
    })
  )
}

const store = configureStore({
  reducer: combineReducers({ ...defaultReducers }),
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(queryApi.middleware)
      .concat(mutationApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
