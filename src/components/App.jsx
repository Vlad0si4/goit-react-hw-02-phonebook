import { Component } from 'react';
import { PhoneBookForm } from './PhonebookForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChangeInput = ({ target }) => {
    this.setState({ name: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: crypto.randomUUID(),
          name: this.state.name,
        },
      ],
    }));
  };

  render() {
    return (
      <>
        <PhoneBookForm
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
          nameUsers={this.state.name}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
