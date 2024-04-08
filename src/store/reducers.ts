import { combineReducers } from 'redux'

import { alumniReducer } from './Alumni/reducers'
import { conferencesReducer } from './Conferences/reducers'
import { modalsReducer } from './Modals/reducers'
import { newslettersReducer } from './Newsletters/reducers'
import { reportsReducer } from './Reports/reducers'
import { resourcesReducer } from './Resources/reducers'

export const rootReducer = combineReducers({
  alumni: alumniReducer,
  conferences: conferencesReducer,
  modals: modalsReducer,
  newsletters: newslettersReducer,
  reports: reportsReducer,
  resources: resourcesReducer,
})
