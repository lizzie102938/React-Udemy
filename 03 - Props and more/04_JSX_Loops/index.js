class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          age="28"
          name="Elton"
          hobbies={['Piano', 'Singing', 'Dancing']}
        />
        <Friend
          age="15"
          name="Frida"
          hobbies={['Drawing', 'Painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
