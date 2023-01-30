import PropTypes from 'prop-types';

import { ContactListItem } from 'components/contact-list-item/ContactListItem';

export const ContactList = ({ contactsFiltred, onDelContact }) => {
  return (
    <ul className="list">
      {contactsFiltred.map(({ name, number, id }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelContact={onDelContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propType = {
  contactsFiltred: PropTypes.func.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
