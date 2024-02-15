import { useState, useEffect } from 'react'
import './App.css'
import { Link,
  Routes,
  Route,
  useNavigate } 
from 'react-router-dom'
import Puppy from './components/puppy';
import Home from './components/Home'
import Puppies from './components/Puppies';
import Create from './components/Create'

function App() {
  const navigate = useNavigate();
  const [puppies, setPuppies] = useState([]);

  const create = async(puppy)=> {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players',
    {
      method: 'POST',
      body: JSON.stringify(puppy),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

  }

  useEffect(()=> {
    const fetchPuppies = async()=> {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players');
      const json = await response.json();
      setPuppies(json.data.players);
    };
    fetchPuppies();
  }, []);

 return (
    <div>
      <h1>Welcome to the Puppy Bowl ! ! !</h1>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/puppies'>Puppies</Link>
          <Link to='/create'>Create a new puppy!!!</Link>
        </nav>
        <input 
        id='search' 
        placeholder='search for puppies'
        onChange={ ev => {
          if(ev.target.value === ''){
            navigate('/puppies')
          }
          else {
            navigate(`/puppies/search/${ev.target.value}`);
          }
        }}
        />
        <Routes>
        <Route 
          path='/puppies/search/:term'
          element = { <Puppies puppies={ puppies }/> }
          />
          <Route 
          path='/'
          element = { <Home puppies={ puppies }/> }
          />
          <Route 
          path='/puppies'
          element = { <Puppies puppies={ puppies }/> }
          />
          <Route 
          path='/puppies/:id'
          element = { <Puppy puppies={ puppies }/> }
          />
          <Route 
          path='/create'
          element = { <Create create={ create }/> }
          />
        </Routes>
      </div>
      </div>
  )
}

export default App