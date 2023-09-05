import React, { Component } from 'react';

class App extends Component {
  state = {
      data: [
        { id: 1, name: 'eldrin' },
        { id: 2, name: 'Mark' },
        { id: 3, name: 'Gess' },
      ],
    };
  

  render() {
    return (
      <div>
        {/* Used the map function to iterate over the array */}
        {this.state.data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
