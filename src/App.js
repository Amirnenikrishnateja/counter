import './App.css';
import { Provider } from 'react-redux';
import Counter from './component/Counter';
import store from './store';
import Todolist from './component/Todolist';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>REDUX</h1>
      <Counter/>
      <Todolist/>
    </div>
    </Provider>
  );
}
export default App;
