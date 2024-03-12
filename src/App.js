import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div>
      <h1 className='heading'>Todo App</h1>
      <Card titleText="Call Mother" descText="This is Description 1"/>
      <Card titleText="Call Father" descText="This is Description 2"/>
      <Card titleText="Call Brother" descText="This is Description 3"/>
    </div>

  );
}

export default App;
