import { Provider } from 'react-redux';
import { store, persistor } from './Phonebook/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Phonebook />
      </PersistGate>
    </Provider>
  );
};
