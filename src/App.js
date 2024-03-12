import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './data.json';

function App() {
  // console.log(Data);
let items=[];
// for(let x=0; x<Data.length; x++){
//   items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>);
// }

// items= Data.map((item)=><Card titleText={item.title} descText={item.desc}/>); 

  return (
    <div>
      <h1 className='heading'>Todo App</h1>
      {Data.map((item,index)=><Card key={index} titleText={item.title} descText={item.desc}/>)};
    </div>

  );
}

export default App;
