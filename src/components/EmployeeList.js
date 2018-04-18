import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.createDataSource();
  }

  createDataSource() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
       <FlatList
         data={this.props.employees}
         renderItem={this.renderRow}
         keyExtractor={employee => employee.uid}
       />
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
