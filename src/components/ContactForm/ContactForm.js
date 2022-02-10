import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    setContacts({ name, number });
  }, [name, number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contacts);
    reset();
  };

  const reset = () => {
    setContacts([]);
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.text}>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={style.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <h2 className={style.text}>Number</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          className={style.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit" name="button" className={style.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import style from "./ContactForm.module.css";

// class ContactForm extends Component {
//   state = {
//     contacts: [],
//     name: "",
//     number: "",
//   };

//   static defaultProps = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ contacts: [], name: "", number: "" });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className={style.form}>
//           <h2 className={style.text}>Name</h2>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             className={style.input}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//           <h2 className={style.text}>Number</h2>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             className={style.input}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//           <button type="submit" name="button" className={style.button}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// export default ContactForm;
