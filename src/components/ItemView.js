import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  Checkbox,
  ControlLabel
} from "react-bootstrap";
import { withRouter } from 'react-router';
import {getItem, updateItem } from '../actions/itemsAction';
import LanguageSelect from './LanguageSelect';
import _ from 'lodash';
import Header from "./Header";


function mapStateToProps(state) {
    return { selectedItem: state.selectedItemsReducer.item, loading: state.selectedItemsReducer.loading};
}

class ItemView extends Component {
  state = { selectedItem: { name: "", language: "", mandant: "", count: "" } };
  componentWillMount() {
    const { getItem } = this.props;
    const { match: { params: { id } } } = this.props;
    getItem(id);

  }
  inputHandler = e => {
    const { target: { value, name } } = e;
    const newItem = { ...this.state.selectedItem, [name]: value };
    this.setState({ selectedItem: newItem, error: '' });
  };

  componentWillReceiveProps(props) {
    const { selectedItem } = props;
    this.setState({ selectedItem });
  }
  SaveHandler = (e) =>{
    const { updateItem } = this.props;
    const { history, match: { params: { id } } } = this.props;
    const { selectedItem } = this.state;
    if (!selectedItem.name || !selectedItem.language || !selectedItem.mandant || !selectedItem.count) {
      this.setState({ error: "Please fill all fields" });
      return;
    }
    updateItem(id, selectedItem);
    history.push("/list");
  };
  CancelHandler = (e) => {
    const { history } = this.props;
    history.push("/list");
  }
  render() {
    const { selectedItem } = this.state;
      const { history, match: { params: { id } }, loading } = this.props;
      if(_.isNull(selectedItem)){
          history.push("/list");
      }
    return (selectedItem && <div>
        <div>
            <Header content="table" />
        </div>
        <Col sm={8} smOffset={2} className="indent">
            {loading && <div className="loader"></div>}
            {!loading && <Form horizontal>
                <FormGroup controlId="formHorizontalName">
                    <Col smOffset={2} sm={8}>
                        <ControlLabel className="label-group">Bezeichnung</ControlLabel>
                        <FormControl className="text-area" value={selectedItem.name} name="name" type="text" onChange={this.inputHandler}
                                     placeholder="Bezeichnung"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalLanguage">
                    <Col smOffset={2} sm={8}>
                        <ControlLabel className="label-group">Language</ControlLabel>
                        <LanguageSelect className="text-area" name={"language"} value={selectedItem.language} onChange={this.inputHandler}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalKey">
                    <Col smOffset={2} sm={8}>
                        <ControlLabel className="label-group">Schlüssel</ControlLabel>
                        <FormControl className="text-area"  value={selectedItem.count} onChange={this.inputHandler} name="count" type="text"
                                     placeholder="Schlüssel"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalClient">
                    <Col smOffset={2} sm={8}>
                        <ControlLabel className="label-group">Mandant</ControlLabel>
                        <FormControl className="text-area" value={selectedItem.mandant} onChange={this.inputHandler} name="mandant"
                                     style={{resize: "none", marginBottom: "15px"}} componentClass="textarea" placeholder="Mandant"/>
                        <div style={{color: "red", textAlign: "right", marginBottom: "15px"}}>{this.state.error}</div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={8} className="button-box">
                        <Button style={{marginRight: "10px"}} onClick={this.SaveHandler} bsStyle="success">
                            Save
                        </Button>
                        <Button onClick={this.CancelHandler} bsStyle="danger">Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>}
        </Col>
    </div>);
  }
}

export default withRouter(connect(mapStateToProps, { getItem , updateItem})(ItemView));