import React from 'react';
import BookForm from './BookForm.js';
import Book from './Book.js';

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [{
        title: 'Professional Node.js',
        author: 'Pedro Teixeira'
      }]
    };
  }
  onBook(book) {
    this.state.books.push(book);

    this.setState({
      books: this.state.books
    });
  }
  render() {
    const books = this.state.books.map(function(book, index) {
      return (
        <Book
          key={index}
          title={book.title}
          read={book.read}
        />
      );
    });

    return (
      <div>
        <BookForm
          onBook={this.onBook.bind(this)}
        />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Books;
