import './App.css';
import User from './functionalComTest/User';

function App() {
  return (
    <div className="App">

      <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>

      </ul>

      <>
        <button>Click 1</button>
        <button>Click 2</button>

      </>

      <label htmlFor='input1'>Input1</label>
      <input type="text" id='input1' />

      <label htmlFor='input2'>Input2</label>
      <input type="text" id='input2' />

      <br />

      <div role='div'>Hello</div>


      <User />

    </div>
  );
}

export default App;
