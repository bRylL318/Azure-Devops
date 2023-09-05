import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    };
  }

  render() {
    return (
      <div>
        {/* Use the map function to iterate over the array */}
        {this.state.data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
