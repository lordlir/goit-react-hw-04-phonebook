import PropTypes from 'prop-types';

export const ContactListItem = ({ onDelContact, name, number, id }) => {
  return (
    <li className="list-item">
      {name}:{number}
      <button onClick={e => onDelContact(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDelContact: PropTypes.func.isRequired,
};
