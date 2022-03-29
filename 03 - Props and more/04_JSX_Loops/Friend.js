class Friend extends React.Component {
  render() {
    const { age, name, hobbies } = this.props;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <ul>
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    )
  }
}
