import axios from 'axios';
import actions from './actions';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));    
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));    
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };