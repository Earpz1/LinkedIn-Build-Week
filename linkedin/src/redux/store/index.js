import {
  ConfigureStore,
  CombineReducers,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
// import favouriteReducer from '../reducer/favouriteReducer'
// import fetchingReducer from '../reducer/fetchingReducer'
import userReducer from '../reducer/userReducer'
import localStorage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const mainReducer = combineReducers({
  //   favourite: favouriteReducer,
  user: userReducer,
  //   fetchData: fetchingReducer,
})

const persistConfig = {
  key: 'root',
  storage: localStorage,
  transforms: [
    encryptTransform({ secretKey: process.env.REACT_APP_PRIVACY_KEY }),
  ],
}

const peristedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({ reducer: peristedReducer })

export const persistor = persistStore(store)
