import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import moment from "moment";

import AgGridDatePicker from "./AgGridDatePicker";

const dateColumnComparator = (filterLocalDateAtMidnight, cellValue) => {
  return (
    moment(cellValue, "DD-MM-YYYY") -
    moment(filterLocalDateAtMidnight, "MM-DD-YYYY")
  );
};

const gridOptions = {
  columnDefs: [
    {
      field: "athlete",
      sort: "desc"
    },
    {
      field: "age",
      width: 90
    },
    { field: "country" },
    {
      field: "year",
      width: 90,
      unSortIcon: true
    },
    {
      field: "date",
      filter: "agDateColumnFilter",
      floatingFilter: true,
      filterParams: {
        comparator: dateColumnComparator
      }
      // comparator: dateComparator
    },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" }
  ],
  defaultColDef: {
    width: 170,
    sortable: true
  },
  floatingFilter: true,
  enableFilter: true,
  frameworkComponents: { agDateInput: AgGridDatePicker }
};

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: null
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div className="container">
        <div style={{ width: "100%", height: "500px" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-inv-light"
          >
            <AgGridReact
              gridOptions={gridOptions}
              onGridReady={this.onGridReady}
              rowData={this.state.rowData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
