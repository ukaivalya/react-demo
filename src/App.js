import Main from './components/MainComponent';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

class App extends React.Component {
    render() {
        const store = ConfigureStore();
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className='App'>
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;
