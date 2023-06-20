import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting='from a stateful class component!' name='Mike' />
    </div>
  );
}

export default App;
