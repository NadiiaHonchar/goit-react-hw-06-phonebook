import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import style from "./ContactList.module.css";
import { delContact } from "../../redux/actions";
import ElementContacts from "../ElementContacts";

const ContactList = () => {
  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );

  const dispath = useDispatch();

  return (
    <ul className={style.ulStyle}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ElementContacts
            contacts={contact}
            onDelContact={() => dispath(delContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
