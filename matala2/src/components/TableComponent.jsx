import React, { Component } from 'react';

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTableWide: true,
    };
  }

  handleTableClick = () => {
    this.setState({ isTableWide: false });
  };

  handleTableDoubleClick = () => {
    this.setState({ isTableWide: true });
  };

  render() {
    const { isTableWide } = this.state;
    const tableWidth = isTableWide ? '100%' : '50%';

    return (
      <div style={{ textAlign: 'center' }}>
        <table
          style={{
            width: tableWidth,
            borderCollapse: 'collapse',
            margin: 'auto',
            cursor: 'pointer',
            transition: 'width 0.5s ease',
          }}
          onClick={this.handleTableClick}
          onDoubleClick={this.handleTableDoubleClick}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Header 1</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center', backgroundColor: '#f2f2f2' }}>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Data 1</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Data 2</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Data 3</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Data 4</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
