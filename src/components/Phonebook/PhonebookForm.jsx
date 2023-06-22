import React from 'react';
import {
  StyleButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './Phonebook.styled';

export const PhoneBookForm = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <StyledForm>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <StyleButton type="submit">Add contact</StyleButton>
        </StyledLabel>
      </StyledForm>
    </Wrapper>
  );
};
