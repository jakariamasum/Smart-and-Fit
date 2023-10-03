import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programms from './components/Programms/Programms';
import Reasons from './components/Reasons/Reasons';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programms/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
