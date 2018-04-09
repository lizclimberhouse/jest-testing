import React from 'react';


class TodoList extends React.Component {
  state = { items: [], name: '' }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, name } = this.state;
    this.setState({ 
      items: [name, ...items],
      name: ''
    })
  }

  render() {
    const { items, name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Add Item"
          value={name}
          onChange={this.handleChange}
          required
        />
        </form>
        <hr />
        <ul>
          { items.map( (item, i) => 
            <li key={i}>{item}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoList;