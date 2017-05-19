import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleBtnClick() {
    Meteor.subscribe('employees',PER_PAGE * (this.page + 1));
    this.page +=1;
  }
  render(){
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee =>
            <EmployeeDetail  key={employee._id} employee={employee}/>)}
        </div>
        <button
          onClick={this.handleBtnClick.bind(this)}
          className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  };
}

export default createContainer(() => {

  //Setup subscription
  Meteor.subscribe('employees',PER_PAGE);
  //Return an object. Whatever is returned ill be sent to EmployeeList component

  return { employees: Employees.find({}).fetch() };
},EmployeeList);
