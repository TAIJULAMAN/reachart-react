
import './App.css';
import SimpleAreaChart from './Components/SimpleAreaChart/SimpleAreaChart';
import SimpleLineChart from './Components/SimpleLineChart/SimpleLineChart';

function App() {
  return (
    <div className="App">
      <h1>ANALYSIS OF A COLLECTION</h1>
      <SimpleLineChart></SimpleLineChart>
      <h1>ANALYSIS USING AREA CHART</h1>
      <SimpleAreaChart></SimpleAreaChart>
    </div>
  );
}

export default App;
