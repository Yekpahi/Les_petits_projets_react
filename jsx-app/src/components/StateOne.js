function Clock(props) {
  return (
    <div>
      <h1>Bonjour, mode !</h1>
      <h1> Il est {props.date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock
