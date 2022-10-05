import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

class Table1 extends Component {
    render() {
      return (
        <div>
          <BootstrapTable data={this.props.wordsTable}>
            
            <TableHeaderColumn isKey dataField='id'>
              #
            </TableHeaderColumn>
            <TableHeaderColumn dataField='name'>
              Your language
            </TableHeaderColumn>
            <TableHeaderColumn dataField='value'>
              Translate
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }
   
  export default Table1;