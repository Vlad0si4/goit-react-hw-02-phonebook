import { Component } from 'react';
import { PhoneBookForm } from './Phonebook/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <PhoneBookForm />
      </>
    );
  }
}
