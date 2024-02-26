
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteNumber } from "../../redux/numberSlice";

export const Contact = ({ dataContact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteNumber(id));

  return (
    <li className={css.listItem} >
        <div className={css.contactItem}>
          <p className={css.contactIcon}>
            <BsFillPersonFill />
            {name}
          </p>
          <p className={css.contactIcon}>
            <FaPhone />
            {number}
          </p>
        </div>
        <div className={css.contactBtn}>
          <button className={css.btn} onClick={handleDeleteContact}>
            Delete
          </button>
        </div>
    </li>
  );
};

