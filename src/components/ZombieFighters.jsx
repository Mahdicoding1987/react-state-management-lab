import { useState } from "react";
const ZombieFighters = ({ zombieFighter, addToTeam, removeFromTeam, checkIfTeam, index }) => {
  const { name, price, strength, agility, img } = zombieFighter;

  return (
    <li key={index} className="zombie-fighters">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      {checkIfTeam ? (
        <button onClick={() => removeFromTeam(zombieFighter, index)}>Remove</button>
      ) : (
        <button onClick={() => addToTeam(zombieFighter)}>Add</button>
      )}
    </li>
  );
};

export default ZombieFighters;
