import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import PlayersCards from "./components/PlayersCards"

function App() {
  const [editMemberIndex, setEditMemberIndex] = useState();
  const [editMember, setEditMember] = useState("")
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Pedro Prieto",
      email: "pedro.prieto003@gmail.com",
      role: "Front End Engineer"
    },
    {
      name: "John Gonzales",
      email: "pedro03@gmail.com",
      role: "Back End Engineer"
    }
  ]);


  const addTeamMember = member => {setTeamMembers([...teamMembers, member])}
  
  

// console.log(teamMembers)
// console.log(editMember)
// console.log(editMemberIndex);
  return (
    <div className="App">
      <h1>TEAM MEMBERS</h1>
      <Form editMemberIndex={editMemberIndex} teamMembers={teamMembers} setEditMember={setEditMember} editMember={editMember} addTeamMember={addTeamMember}  />
      <PlayersCards setEditMemberIndex={setEditMemberIndex} setEditMember={setEditMember} teamMembers={teamMembers} />
      
    </div>
  );
}

export default App;
