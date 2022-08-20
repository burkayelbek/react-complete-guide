import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      id:'e1',
      title:'Car Insurance',
      amount:294.67,
      date:new Date(2021,2 ,28),
    },
    {
      id:'e2',
      title:'Car Test',
      amount:294.67,
      date: new Date(2021,3 ,28),
    },
    {
      id:'e3',
      title:'Car Desk',
      amount:294.67,
      date:new Date(2021,5 ,28),
    }
  ];

  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
