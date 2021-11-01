import { combineReducers } from '@reduxjs/toolkit'

import tasksModule from './tsx/modules/tasksModule'

const rootReducer = combineReducers({
    tasks: tasksModule.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer