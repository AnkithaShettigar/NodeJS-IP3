// import logo from './logo.svg';
import './App.css';

function App() {
  fetch("http://localhost:8001/data")
  .then(res => res.json())
  .then(data => console.log(data))
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
