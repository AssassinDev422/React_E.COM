import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/styles.css';
import header from '../styles/header.css';
import table from '../styles/table.css';
import {
  Table,
  Col,
  Row,
  FormGroup,
  FormControl,
  Button,
  ProgressBar
} from "react-bootstrap/";
import {
  addItem,
  getItems,
  deleteItem,
  updateItem,
  getItem
} from "../actions/itemsAction";
import { withRouter } from 'react-router';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import LanguageSelect from './LanguageSelect';
import { error } from '@firebase/database/dist/esm/src/core/util/util';
import Header from "./Header";
class TableView extends Component {
  state = {
    filterTerm: "",
    name: "",
    language: "",
    mandant: "",
    count: "",
    loading: true,
    desc: ""
  };
  componentWillMount() {
    const { getItems } = this.props;
    getItems();
  }
  inputHandler = e => {
    const { target: { value, name } } = e;
    this.setState({ [name]: value, error: "" });
  };
  render() {
    const { name, language, mandant, count } = this.state;
    const { loading } = this.props;
    const progressInstance = <ProgressBar active now={100} />;
    return (
      <div>
        <div>
          <Header content="table" />
        </div>
        <Col sm={8} smOffset={2} className="indent">
          <FormGroup controlId="formHorizontalName">
            <Col sm={12} className="search-block">
              <FormControl
                className="search"
                name="filterTerm"
                type="text"
                onChange={this.inputHandler}
                placeholder="Search"
              />
            </Col>
          </FormGroup>
          {/* <input name="filterTerm" type="text" placeholder="SEARCH" onChange={this.inputHandler} /> */}

          <Col sm={12} className="add-item">
            <form onSubmit={e => this.addOne(e)}>
              <FormGroup controlId="formHorizontalName">
                <Col lg={2} md={6} className="add-item">
                  <FormControl
                    value={name}
                    name="name"
                    type="text"
                    onChange={this.inputHandler}
                    placeholder="Bezeichnung"
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalName">
                <Col lg={2} md={6} className="add-item">
                  <FormControl
                    value={mandant}
                    name="mandant"
                    type="text"
                    onChange={this.inputHandler}
                    placeholder="Mandant"
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalName">
                <Col lg={2} md={6} className="add-item">
                  <FormControl
                    value={count}
                    name="count"
                    type="text"
                    onChange={this.inputHandler}
                    placeholder="Schlüssel"
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalName">
                <Col lg={2} md={6} className="add-item">
                  <LanguageSelect
                    value={language}
                    name={"language"}
                    value={this.state.language}
                    onChange={this.inputHandler}
                  />
                </Col>
              </FormGroup>
              <Col md={1} sm={6} className="add-item">
                <Button bsStyle="success" type="submit">
                  <i className="fa fa-plus" aria-hidden="true" />
                </Button>
              </Col>
            </form>
            <Col md={12}>
              <div className="error-ms" style={{ color: "red" }}>
                {this.state.error}
              </div>
            </Col>
          </Col>
          <Col lg={12} md={12} sm={12} className="table-block">
            <Table
              striped
              bordered
              condensed
              responsive
              hover
              className="table-col"
            >
              <thead>
                <tr>
                  <th
                    className="table-header"
                    onClick={() => {
                      this.sortItems("name");
                    }}
                  >
                    Bezeichnung
                  </th>
                  <th
                    className="table-header"
                    onClick={() => {
                      this.sortItems("language");
                    }}
                  >
                    Sprache
                  </th>
                  <th
                    className="table-header"
                    onClick={() => {
                      this.sortItems("count");
                    }}
                  >
                    Mandant
                  </th>
                  <th
                    className="table-header"
                    onClick={() => {
                      this.sortItems("mandant");
                    }}
                  >
                    Schlüssel
                  </th>
                  <th />
                </tr>
              </thead>

              {!loading && <tbody>{this.rednderItems()}</tbody>}
            </Table>
          </Col>
          {loading && (
            <Col lg={12} md={12} sm={12}>
              {progressInstance}
            </Col>
          )}
        </Col>
      </div>
    );
  }
  sortItems(orderBy) {
    let { orders } = this.state;
    if (orders == "desc") orders = "asc";
    else orders = "desc";
    this.setState({ orderBy, orders });
  }
  searchFilter(items, filterTerm) {
    return _.filter(items, item => {
      return _.includes(item.name, filterTerm);
    });
  }
  sortByField(items, orderBy, orders) {
    return _.orderBy(items, orderBy, orders);
  }
  rednderItems() {
    let { items } = this.props;
    const { filterTerm, orderBy, orders } = this.state;
    if (filterTerm) {
      items = this.searchFilter(items, filterTerm);
    }
    if (orderBy) {
      items = this.sortByField(items, orderBy, orders);
    }
    return _.map(items, (item, key) => {
      return (
        <tr key={key}>
          <td>
            <Link to={`/item/${key}`}> {item.name} </Link>
          </td>
          <td>{item.language}</td>
          <td>{item.mandant}</td>
          <td>{item.count}</td>
          <td
            style={{ cursor: "pointer", color: "red", textAlign: "center" }}
            onClick={() => {
              this.removeItem(key);
            }}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </td>
        </tr>
      );
    });
  }
  filterItems(items) {}

  removeItem(id) {
    const { deleteItem, updateItem, getItem } = this.props;
    deleteItem(id);
  }
  addOne(e) {
    e.preventDefault();
    const { addItem } = this.props;
    const { name, language, mandant, count } = this.state;
    if (!name || !language || !mandant || !count) {
      this.setState({ error: "Please fill all fields" });
      return;
    }
    const item = { name, language, mandant, count };
    addItem(item);
    this.setState({ name: "", language: "", mandant: "", count: "" });
  }
}

export default withRouter(
  connect(
    state => {
      return { items: state.ItemsReducer.items, loading: state.ItemsReducer.loading };
    },
    { addItem, getItems, deleteItem, updateItem, getItem }
  )(TableView)
);
