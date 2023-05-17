import PropTypes from 'prop-types';
import { Input, ButtonForm, Form } from './SearchBar.styled';

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Enter query"
        name="search"
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        onChange={onChange}
      ></Input>
      <ButtonForm type="submit">Search</ButtonForm>
    </Form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
