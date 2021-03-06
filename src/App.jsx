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
    const contact = contacts[Math.floor(Math.random(0) * contacts.length)];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(contact);
    this.setState({
      contacts: contactsCopy
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
