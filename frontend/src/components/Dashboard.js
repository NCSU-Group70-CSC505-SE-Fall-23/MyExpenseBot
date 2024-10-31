import React, { useState } from 'react';
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const Dashboard = ({ expenses, onAddExpense }) => {
  const [showModal, setShowModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    currency: 'USD',
    paid_by: '',
    category: '',
    selected_date: '',
    shares: {}
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleAddShare = (userId, share) => {
    setNewExpense({ ...newExpense, shares: { ...newExpense.shares, [userId]: share } });
  };

  const handleAddNewExpense = () => {
    onAddExpense(newExpense); // Add the new expense through the parent function
    handleCloseModal(); // Close the modal after adding
  };

  return (
    <div className="dashboard">
      <h2>Expense Dashboard</h2>

      {/* Expenses Table */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Paid By</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, idx) => (
            <tr key={idx}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.currency}</td>
              <td>{expense.paid_by}</td>
              <td>{expense.category}</td>
              <td>{expense.selected_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Expense Button */}
      <Button variant="primary" onClick={handleShowModal} className="mt-4">
        Add New Expense
      </Button>

      {/* Add Expense Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" name="amount" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Control type="text" name="currency" onChange={handleChange} defaultValue="USD" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Paid By</Form.Label>
              <Form.Control type="text" name="paid_by" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="selected_date" onChange={handleChange} />
            </Form.Group>
            {/* Add user shares */}
            <Form.Group>
            <Form.Label>Shares</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="User ID"
                  onChange={(e) => handleAddShare(e.target.value, '')}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Share Amount"
                  onChange={(e) => handleAddShare(newExpense.shares.userId, e.target.value)}
                />
              </Col>
            </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddNewExpense}>
            Add Expense
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;