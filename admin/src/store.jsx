import {configureStore} from '@reduxjs/toolkit'
import {mainReducer} from './reducers'

const stores = configureStore({
    reducer: mainReducer
})

export default stores