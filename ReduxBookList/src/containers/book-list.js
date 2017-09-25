import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
      <li 
        key={book.title} 
        onClick={()=> this.props.selectBook(book) }
        className="list-group-item">{book.title}</li>
      );
    });
  }
  
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
        
      </ul>
    )
  }
   
}


function mapStateToProps(state) {
  //whatever gets returned will show up as props
  //inside of BookList
  return  {
    books: state.books
  }
  
}

//anything returned from this function will end up as props in the BookList container
function mapDispatchToProps(dispatch) {
  // when selectBook is called, the result is passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);