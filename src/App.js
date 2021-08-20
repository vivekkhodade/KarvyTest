import {Provider} from 'react-redux';
import configureStore from '../src/redux/store/store'; //
import Layout from './app/layouts';
import './App.css';

export const store = configureStore();
function App() {
  return (
    <div className="App" id="container">
      <Provider store={store}>
          <Layout/>
      </Provider>
    </div>
  );
}

export default App;
