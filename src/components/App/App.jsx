
import { ContactList } from "../ContactList/ContactList";
import { SearchBar } from "../SearchBar/SearchBar";
import { ConctactForm } from "../ContactForm/ContactForm";

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ConctactForm />
      <SearchBar />
      <ContactList/>
    </>
  );
};
