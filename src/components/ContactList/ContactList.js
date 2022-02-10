import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import ElementContacts from "../ElementContacts";

const ContactList = ({ contacts, onDelContact }) => {
  return (
    <ul className={style.ulStyle}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ElementContacts contacts={contact} onDelContact={onDelContact} />
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
  onDelContact: PropTypes.func.isRequired,
};

export default ContactList;
