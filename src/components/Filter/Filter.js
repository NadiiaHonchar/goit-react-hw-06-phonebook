import { changeFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import style from "./Filter.module.css";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispath = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        className={style.input}
        value={value}
        onChange={(e) => dispath(changeFilter(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </>
  );
};

export default Filter;
