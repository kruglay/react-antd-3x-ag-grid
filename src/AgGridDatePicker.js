import React, { Component } from "react";
import moment from "moment";
import { DatePicker } from "antd";

export default class AgGridDatePicker extends Component {
  state = {
    date: null
  };

  getDate = () => {
    //ag-grid will call us here when in need to check what the current date value is hold by this
    //component.
    return this.state.date && this.state.date.toDate();
  };

  //*********************************************************************************
  //          AG-GRID OPTIONAL METHODS
  //*********************************************************************************
  setDate = (date) => {
    this.setState({ date: date ? moment(date) : null });
  };

  onChange = (date) => {
    this.setState({ date }, this.props.onDateChanged);
  };

  render() {
    const { date } = this.state;
    return (
      <DatePicker
        value={date}
        onChange={this.onChange}
        placeholder="ГГГГ-ММ-ДД"
      />
    );
  }
}
