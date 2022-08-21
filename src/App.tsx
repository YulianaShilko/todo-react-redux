import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import TodoApp from './containers/todoApp'
import { persistor, store } from './store/configureStore'
import { Container } from './styles/Container'

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
