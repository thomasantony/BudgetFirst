import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';

class Categories extends Component {
  static propTypes = {
    insertCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };
  constructor(props){
    super(props);
    this.onAddClick = this.onAddClick.bind(this);
  }
  onAddClick(){
    this.props.insertCategory({name: 'Dummy 1', parent_id: -1})
  }
  render() {
    const { insertCategory, updateCategory, deleteCategory, categories } = this.props;
    console.log(categories)
    return (
      <div style={{width:'800px'}}>
        <div className={{position: 'absolute'}}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <RaisedButton label="Add dummy" onClick={this.onAddClick}/>
        <Table style={{marginTop:'10px'}}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip='ID'>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip='Category'>Category Name</TableHeaderColumn>
              <TableHeaderColumn tooltip='Parent'>Parent</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} showRowHover={true}>
            {categories.map( (cat) => (
              <TableRow key={cat._id}>
                <TableRowColumn>{cat._id}</TableRowColumn>
                <TableRowColumn>{cat.name}</TableRowColumn>
                <TableRowColumn>{cat._parent}</TableRowColumn>
                <TableRowColumn> <IconButton iconClassName="material-icons" tooltipPosition="bottom-center"
  tooltip="Delete" onClick={() => deleteCategory(cat._id)}>delete</IconButton></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Categories;
