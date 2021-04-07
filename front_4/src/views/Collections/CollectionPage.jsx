/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip,
  FormGroup,
  FormLabel,
  FormText,
  FormControl,
  Radio,
  FormCheck,
} from "react-bootstrap";

// react component that creates a switch button that changes from on to off mode
import Switch from "react-bootstrap-switch";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import img1 from "assets/img/blog-1.jpg";
import img2 from "assets/img/blog-2.jpg";
import img3 from "assets/img/blog-3.jpg";
import img4 from "assets/img/blog-4.jpg";
import img5 from "assets/img/blog-5.jpg";

class CollectionPage extends Component {
  render() {
    const view = <Tooltip id="view">View Profile</Tooltip>;
    const edit = <Tooltip id="edit">Edit Profile</Tooltip>;
    const remove = <Tooltip id="remove">Remove</Tooltip>;
    const viewPost = <Tooltip id="view">View Post</Tooltip>;
    const editPost = <Tooltip id="edit">Edit Post</Tooltip>;
    const removePost = <Tooltip id="remove">Remove Post</Tooltip>;
    const actions = (
      <td className="td-actions text-center">
        <OverlayTrigger placement="top" overlay={view}>
          <Button simple bsStyle="info" bsSize="xs">
            <i className="fa fa-user" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={edit}>
          <Button simple bsStyle="success" bsSize="xs">
            <i className="fa fa-edit" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={remove}>
          <Button simple bsStyle="danger" bsSize="xs">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
      </td>
    );
    const actionsPost = (
      <td className="td-actions">
        <OverlayTrigger placement="left" overlay={viewPost}>
          <Button simple icon bsStyle="info">
            <i className="fa fa-image" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={editPost}>
          <Button simple icon bsStyle="success">
            <i className="fa fa-edit" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={removePost}>
          <Button simple icon bsStyle="danger">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
      </td>
    );
    return (
      <div className="main-content">
        <Container fluid>
            <div className="d-flex">
                <FormLabel className="mx-auto h1 "><b>Collection Page</b></FormLabel>
            </div>
            <Row className="align-items-baseline">
                <Col md={{ span: 2, offset: 1 }}>
                    <FormLabel>Collecting <b className="mx-4">test-espn.com</b></FormLabel>
                </Col>
                <Col md={{ span: 1 }}>
                    <FormLabel>12:45-13:15 </FormLabel>
                </Col>
                <Col md={{ span: 3 }}>
                    <FormControl type="text"/>
                </Col>
                <Col md={{ span: 1 }}>
                    <Button variant="info" className="btn-fill">Search</Button>
                </Col>
                <Col md={{ span: 1 }}>
                    <Button variant="info" className="btn-fill">Show All</Button>
                </Col>
                <Col md={{ span: 2 }}>
                    <Button variant="info" className="btn-fill">Refresh API Data</Button>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 10, offset:1 }} sm={{ span: 12 }}>
                    <Card
                        content={
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>No pick?</th>                        
                                        <th>Game time</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                        <th>sport</th>
                                        <th>pick</th>
                                        <th>grade</th>
                                        <th>line</th>
                                        <th>analyst</th>
                                        <th>Action</th>                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><FormCheck type="checkbox"/></td>
                                        <td><FormText>13:10</FormText></td>
                                        <td><FormText>Atlanta Hawks</FormText></td>
                                        <td><FormText>Miami Heat</FormText></td>
                                        <td><FormText>NBA</FormText></td>
                                        <td><FormControl type="text" value="Atlanta Hawks" /></td>
                                        <td><FormControl type="text" value="A" /></td>
                                        <td><FormControl type="text" value="-7.5" /></td>
                                        <td><FormControl type="text" value="Ralph Nugent" /></td>
                                        <td><Button variant="info" className="btn-fill">Duplicate</Button></td>
                                    </tr>

                                    <tr>
                                        <td><FormCheck type="checkbox"/></td>
                                        <td><FormText>13:10</FormText></td>
                                        <td><FormText>Atlanta Hawks</FormText></td>
                                        <td><FormText>Miami Heat</FormText></td>
                                        <td><FormText>NBA</FormText></td>
                                        <td><FormControl type="text" value="Atlanta Hawks" /></td>
                                        <td><FormControl type="text" value="A" /></td>
                                        <td><FormControl type="text" value="-7.5" /></td>
                                        <td><FormControl type="text" value="Ralph Nugent" /></td>
                                        <td><Button variant="info" className="btn-fill">Duplicate</Button></td>
                                    </tr>

                                    <tr>
                                        <td><FormCheck type="checkbox"/></td>
                                        <td><FormText>13:10</FormText></td>
                                        <td><FormText>Atlanta Hawks</FormText></td>
                                        <td><FormText>Miami Heat</FormText></td>
                                        <td><FormText>NBA</FormText></td>
                                        <td><FormControl type="text" value="Atlanta Hawks" /></td>
                                        <td><FormControl type="text" value="A" /></td>
                                        <td><FormControl type="text" value="-7.5" /></td>
                                        <td><FormControl type="text" value="Ralph Nugent" /></td>
                                        <td><Button variant="info" className="btn-fill">Duplicate</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        }
                        legend={
                            <Row>
                                <Col md={{ span: 2, offset: 4 }} className="d-flex justify-content-center">
                                    <Button variant="warning" className="btn-fill">Cancel</Button>
                                </Col>
                                <Col md={{ span: 2}} className="d-flex justify-content-center">
                                    <Button variant="primary" className="btn-fill">Submit</Button>
                                </Col>
                            </Row>
                        }
                    />
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default CollectionPage;
