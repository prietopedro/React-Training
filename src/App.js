import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import PlayersCards from "./components/PlayersCards"

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Pedro Prieto",
      email: "pedro.prieto003@gmail.com",
      role: "Front End Engineer"
    },
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
      <h1>TEAM MEMBERS</h1>
      <Form addTeamMember={addTeamMember} />
      <PlayersCards teamMembers={teamMembers} />
    </div>
  );
}

export default App;
