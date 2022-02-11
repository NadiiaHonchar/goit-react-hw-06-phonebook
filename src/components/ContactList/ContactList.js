import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import {connect} from 'react-redux';
import {delContact} from '../../redux/actions';
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

const getVisibleContacts =(allContacts, filter)=>{  
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({name}) =>
  name.toLowerCase().includes(normalizedFilter)
    );
}

const mapStateToProps = ({contacts:{ filter, items}})=>({
  contacts : getVisibleContacts(items, filter),
})

const mapDispatchToProps = dispath =>({
  onDelContact: (id) => dispath(delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
