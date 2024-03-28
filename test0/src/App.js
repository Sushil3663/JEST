import './App.css';
import InputBox from './onchangetest/InputBox';
import Button from './buttonClick/Button';
import User from './classmethodtest/User';
import Count from './functionalcomponent/Count';

function App() {
  return (
    <div className="App">
      <p>React First Test case 11</p>

      <User />

      <br />
      <br />

      <Count />


      {/* <p>Sushil Karki</p>
      <br />
      <input type='text' placeholder='Enter User Name' name='username' id='nameid' value="sushil" />
      <br />
      <br />

      <img src={logo19} title='Logo' alt='img' /> */}

      {/* <InputBox />
      <br />
      <Button /> */}

    </div>
  );
}

export default App;
