
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddressDataForm from './AddressDataForm/AddressDataForm';
import Lamp from './Lamp/Lamp';
import PersonalDataForm from './PersonalDataForm/PersonalDataForm';
import SharedCounterForm from './SharedCounterForm/SharedCounterForm';

function Router() { 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/lamp" element={<Lamp/>}/>
          <Route path="/personal-data" element={<PersonalDataForm/>}/>
          <Route path="/address-data" element={<AddressDataForm/>}/>
          <Route path="/counter" element={<SharedCounterForm/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
