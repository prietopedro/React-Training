import React,{useState} from 'react';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Pedro Prieto",
      email: "pedro.prieto003@gmail.com",
      role: "Front End Engineer"
    }
  ]);

  const addTeamMember = member => {setTeamMembers([...teamMembers, member])}


  console.log(teamMembers)



  return (
    <div className="App">
      <button>CLICK</button>
    </div>
  );
}

export default App;
