import PropTypes from 'prop-types';
import { SerchForm, SerchButton, Input } from './SearchForm.styled';

const SearchFormForMovies = ({ value, onChange, onSubmit }) => {
  return (
    <SerchForm onSubmit={onSubmit}>
      <Input
        name="search"
        type="text"
        placeholder="Enter query"
        autoComplete="off"
        autoFocus
        value={value}
        onChange={onChange}
      />
      <SerchButton type="submit">Search</SerchButton>
    </SerchForm>
  );
};

SearchFormForMovies.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchFormForMovies;
