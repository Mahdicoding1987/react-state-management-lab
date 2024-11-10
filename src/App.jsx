import { useState } from "react";
import ZombieFighters from "./components/ZombieFighters";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [teamStrength, setTeamStrength] = useState(0);
  const [teamAgility, setTeamAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const addToTeam = (newMember) => {
    if (money >= newMember.price) {
      setTeam([...team, newMember]);
      setMoney(money - newMember.price);
      setTeamStrength(teamStrength + newMember.strength);
      setTeamAgility(teamAgility + newMember.agility);
    }
  };

  const removeFromTeam = (memberToRemove, index) => {
    const updatedTeam = [...team];
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
    setMoney(money + memberToRemove.price);
    setTeamStrength(teamStrength - memberToRemove.strength);
    setTeamAgility(teamAgility - memberToRemove.agility);
  };

  return (
    <div className="zombie-fighters-container">
      <h3>Money: {money}</h3>
      <h3>Team Strength: {teamStrength}</h3>
      <h3>Team Agility: {teamAgility}</h3>
      <h1>Your Team</h1>
      <p>Pick some team members</p>
      <ul>
        {team.map((member, index) => {
          return (
            <ZombieFighters zombieFighter={member} index={index} checkIfTeam={true} removeFromTeam={removeFromTeam} />
          );
        })}
      </ul>
      <h1>Zombie Fighters</h1>
      <ul>
        {zombieFighters.map((notMember, index) => {
          return <ZombieFighters zombieFighter={notMember} index={index} addToTeam={addToTeam} checkIfTeam={false} />;
        })}
      </ul>
    </div>
  );
};

export default App;
