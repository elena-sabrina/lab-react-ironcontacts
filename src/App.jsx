import React from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContact = () => {
    const unused = contacts.filter(
      (contact) => !this.state.contacts.includes(contact)
    );
    const contact = unused[Math.floor(Math.random(0) * contacts.length)];

    this.setState({
      contacts: [...this.state.contacts, contact]
    });
  };

  sortBypopularity = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((first, second) =>
      second.popularity - first.popularity ? -1 : 1
    );
    this.setState({
      contacts: sorted
    });
  };

  sortByname = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((first, second) => (second.name > first.name ? -1 : 1));
    this.setState({
      contacts: sorted
    });
  };

  removeContact = () => {};

  render() {
    return (
      <div>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortBypopularity}>Sort by popularity</button>
        <button onClick={this.sortByname}>Sort by name</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={this.removeContact}>Remove contact</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
