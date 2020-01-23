import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Checkbox
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "../../pattern-components/Header";
import "../../pattern-components/patterns.scss";
var db = require("../storeComponent/data.json");
var base64 = require('base-64');


class TableList extends Component {
  columns = ['Name', 'Size', 'Comments', 'Store', 'Aisle'];
  constructor(props) {
    super(props);
    this.state = {
      data: getQuery(),
    };
  }

  async componentDidMount() {

    this.setState({
      data: getQuery(),
    })
  }
  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            data-testid={`row-${id}`}
            //defaultChecked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Checkbox id= {`checkbox-${id}`} data-testid= {`checkbox-${id}`} labelText="" /> 
          </StructuredListCell>
        </div>
        {this.columns.map(col => {
          const format = function(val) { return val; };
          return (
            <StructuredListCell key={col} className="simple-list-row" data-testid={col}>
              {format(row[col])}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const data = this.state.data;

    return (
      <div className="bx--grid pattern-container">
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {this.columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
                  })}
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody data-testid="body">
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

function getQuery(){
  let mySearchParams = window.location.search.split('')
  mySearchParams.shift();
  mySearchParams = mySearchParams.join('');
  if(mySearchParams ===  ""){
    return [];
  }
  return JSON.parse(base64.decode(mySearchParams));
}


export default TableList;
