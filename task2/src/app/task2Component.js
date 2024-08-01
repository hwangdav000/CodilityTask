import './task2.css';
import React, { Component } from 'react';

export default class TaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      totalPages: 3,
      users: [],
    };
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchData(this.state.currentPage);
    }
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  fetchData = (page) => {
    fetch(`http://localhost:9000/users/api/users?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.setState({ users: data.results });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    const { currentPage, totalPages, users } = this.state;

    return (
      <div className="center-all">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-container">
          <button
            onClick={() => this.handlePageChange(0)}
            disabled={currentPage === 0}
            className="first-page-btn"
          >
            First
          </button>
          <button
            onClick={() => this.handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="previous-page-btn"
          >
            Previous
          </button>
          <button
            onClick={() => this.handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="next-page-btn"
          >
            Next
          </button>
          <button
            onClick={() => this.handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="last-page-btn"
          >
            Last
          </button>
        </div>
      </div>
    );
  }
}
