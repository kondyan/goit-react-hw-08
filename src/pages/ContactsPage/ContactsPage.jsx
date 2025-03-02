import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectUser } from "../../redux/auth/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import DocumentTitle from "../../components/DocumentTitle";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>{`${user.name}'s Contacts`}</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>

      <ContactList />
    </div>
  );
};

export default ContactsPage;
