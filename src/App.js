import { Provider } from 'react-redux';
import RestaurantScreen from './components/RestaurantScreen';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>hello, world</h1>
        <RestaurantScreen />
      </Provider>
    </div>
  );
}

export default App;
