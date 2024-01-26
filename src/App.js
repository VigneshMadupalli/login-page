import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import FieldConfigPage from './components/FieldConfigPage';
import FieldList from './components/FieldList';
// ... other necessary imports

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<FieldConfigPage />} />
            <Route path="/field-list" element={<FieldList />} />
            {/* Define other routes as needed */}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
