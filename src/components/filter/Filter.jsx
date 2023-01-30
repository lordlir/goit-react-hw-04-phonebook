import PropTypes from 'prop-types';
import s from './filter.module.css';
export const Filter = ({ filter, onFilterChanche }) => {
  return (
    <label className={s.label} htmlFor="filter">
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilterChanche}
      />
    </label>
  );
};

Filter.propType = {
  filter: PropTypes.string.isRequired,
  onFilterChanche: PropTypes.func.isRequired,
};
