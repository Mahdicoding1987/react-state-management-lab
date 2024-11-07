import { useState } from "react";
const ZombieFighters = ({ zombieFighter, addToTeam }) => {
  const { name, price, strength, agility, img } = zombieFighter;

  const [buttonText, setButtonText] = useState("Add");

  return (
    <li className="zombie-fighters">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button onClick={() => addToTeam(zombieFighter)}>{buttonText}</button>
    </li>
  );
};

export default ZombieFighters;
