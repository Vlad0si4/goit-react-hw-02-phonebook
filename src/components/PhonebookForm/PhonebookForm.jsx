import React from 'react';
import {
  StyleButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './Phonebook.styled';
import PropTypes from 'prop-types';

export const PhoneBookForm = ({
  handleChangeInput,
  handleAddItem,
  nameUsers,
  userNumber,
  title,
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    handleAddItem(nameUsers, userNumber);
  };
  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            Name
            <StyledInput
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={nameUsers}
              onChange={handleChangeInput}
            />
            Number
            <StyledInput
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={userNumber}
              onChange={handleChangeInput}
            />
            <StyleButton type="submit">Add contact</StyleButton>
          </StyledLabel>
        </StyledForm>
      </Wrapper>
    </>
  );
};

PhoneBookForm.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  // nameUsers: PropTypes.string.isRequired,
  // userNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
