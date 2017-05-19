import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <EmployeeList />
  );
};




//After Meteor loads in the DOM render my app
Meteor.startup(() => {
  //React render call

ReactDOM.render(<App />,document.querySelector(".container"));

});
