import {
    applyMiddleware,
    legacy_createStore as createStore,
    Store,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const reduxPersistConfig: PersistConfig<any> = {
    key: 'todo',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(reduxPersistConfig, rootReducer)

export const store: Store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
