import PropTypes from "prop-types";
import style from "./ElementContacts.module.css";

const ElementContacts = ({ contacts: { id, name, number }, onDelContact }) => {
  return (
    <>
      <p className={style.list}>
        {name} : {number}{" "}
      </p>
      <button
        type="submit"
        name="button"
        className={style.button}
        onClick={() => onDelContact(id)}
      >
        Delete contact
      </button>
    </>
  );
};

ElementContacts.propTypes = {
  contacts: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelContact: PropTypes.func.isRequired,
};

export default ElementContacts;
