import React, { Component } from 'react';
import { Badge, Table, Modal } from 'react-bootstrap';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedTicket: null,
      showModal: false,
      queryHistory: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getTicket = async () => {
    try {
      const authToken = localStorage.getItem('usertoken');
      console.log("authtoken: ", authToken);
      const response = await fetch('http://localhost:5000/tickets/getTicketAll', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user tickets');
      }

      const userTickets = await response.json();
      console.log('User Tickets:', userTickets);
      this.setState({ data: userTickets });
    } catch (error) {
      console.error('Error fetching user tickets:', error);
    }
  };

  getQueryHistory = async (ticketNumber) => {
    try {
      const authToken = localStorage.getItem('usertoken');
      const response = await fetch(`http://localhost:5000/query/getQueryHistory/${ticketNumber}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch query history');
      }

      const queryHistory = await response.json();
      console.log('Query History:', queryHistory);

      this.setState({
        queryHistory,
        showModal: true,
        selectedTicket: ticketNumber,
      });
    } catch (error) {
      console.error('Error fetching query history:', error);
    }
  };

  handleClose = () => {
    this.setState({
      showModal: false,
      selectedTicket: null,
      queryHistory: [],
    });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.getTicket();
  }

  statusName = (status) => {
    switch (status) {
      case 'open':
        return <Badge pill variant="primary">Open</Badge>;
      case 'closed':
        return <Badge pill variant="success">Closed</Badge>;
      default:
        return <Badge pill variant="primary">Open</Badge>;
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">User Tickets</h1>
          </div>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>TicketNumber</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Query History</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.length > 0 &&
                this.state.data.map((row, index) => (
                  <tr key={index} onClick={() => this.getQueryHistory(row.ticketNumber)}>
                    <td>{row.ticketNumber}</td>
                    <td>{row.message}</td>
                    <td>{this.statusName(row.status)}</td>
                    <td><button onClick={() => this.getQueryHistory(row.ticketNumber)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>

        {/* Modal to display Query History */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Query History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Sender</th>
                  <th>Message</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {this.state.queryHistory.length > 0 &&
                  this.state.queryHistory.map((history, index) => (
                    <tr key={index}>
                      <td>{history.sender}</td>
                      <td>{history.message}</td>
                      <td>{history.timestamp}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
