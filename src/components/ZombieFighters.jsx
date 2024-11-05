const ZombieFighters = (props) => {
  return (
    <li className="zombie-fighters">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Strength: {props.strength}</p>
      <p>Agility: {props.agility}</p>
      <button>Add</button>
    </li>
  );
};

export default ZombieFighters;
