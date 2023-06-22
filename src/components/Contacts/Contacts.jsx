import React from 'react';

export const Contacts = ({ contacts }) => {
  console.log();
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          console.log(contact);
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </div>
  );
};
