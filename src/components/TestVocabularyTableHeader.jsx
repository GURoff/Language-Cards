import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../styles/TestVocabularyTable.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';


class TestVocabularyTableHeader extends Component {
  render(props) {
    return (
      <div>
        <BootstrapTable data={props}>
          <TableHeaderColumn isKey dataField='props.number'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='props.word.input'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='props.word.output'>
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TestVocabularyTableHeader;



