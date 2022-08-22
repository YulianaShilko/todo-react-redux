import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Container from './components/container'
import TodoApp from './containers/todoApp'
import { persistor, store } from './store/configureStore'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <Container>
                    <TodoApp />
                </Container>
            </PersistGate>
        </Provider>
    )
}

export default App
