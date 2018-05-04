import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
class Navigator extends Component {
  state = { toggleBurger: false };
  burgerToggler = () => {
    this.setState({ toggleBurger: !this.state.toggleBurger });
    let linksEl = document.querySelector(".nav-burger");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
    //   style={this.state.toggleBurger ? { display: "block" } : { display: "none" }}
  };
  render() {
    const { content, id } = this.props;
    return <div className={id} >
        {content === "list" && <Col md={11}  sm={12}>

            <nav id="mainmenu-container">
              <ul id="mainmenu">
                <li>
                  <Link to="/" className="">
                    e.com
                  </Link>
                </li>
                <li className="hasSub">
                  <a href="" title="Leistungen">
                    Leistungen
                  </a>
                  <ul id="csecond36">
                    <li id="mainmenu">
                      <a href="" title="Datenoptimierung">
                        Datenoptimierung
                      </a>
                    </li>
                    <li>
                      <a href="" title="Vertriebsoptimierung">
                        Vertriebsoptimierung
                      </a>
                    </li>
                    <li>
                      <a href="" title="IT">
                        IT
                      </a>
                    </li>
                    <li>
                      <a href="" title="Telefonmarketing">
                        Telefonmarketing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="" title="Vorgehensweise">
                    Vorgehensweise
                  </a>
                </li>
                <li>
                  <a href="" title="Kunden">
                    Kunden
                  </a>
                </li>
                <li className="hasSub">
                  <a href="" title="Unternehmen">
                    Unternehmen
                  </a>
                  <ul id="csecond30">
                    <li>
                      <a href="" title="Standorte">
                        Standorte
                      </a>
                    </li>
                    <li>
                      <a href="" title="Karriere">
                        Karriere
                      </a>
                    </li>
                    <li>
                      <a href="" title="Partner">
                        Partner
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" title="News">
                    News
                  </a>
                </li>
              </ul>
            </nav>
          </Col>}
        {content === "table" && <Col sm={10}>
            <nav id="mainmenu-container">
              <ul id="mainmenu">
                <li>
                  <Link to="/" className="">
                    e.com
                  </Link>
                </li>
                <li className="hasSub">
                  <a href="" title="Leistungen">
                    Konfiguration
                  </a>
                  <ul id="csecond36">
                    <li id="mainmenu">
                      <a href="" title="Datenoptimierung">
                     Einstellungen
                      </a>
                    </li>
                    <li>
                      <a href="" title="Vertriebsoptimierung">
                        Online-Hilfe
                      </a>
                    </li>
                    <li>
                      <a href="" title="IT">
                        Wahrungen
                      </a>
                    </li>
                    <li>
                      <a href="" title="Telefonmarketing">
                        Schlagwortverwaltung
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="" title="Vorgehensweise">
                    Organisationsstruktur
                  </a>
                </li>
                <li>
                  <a href="" title="Kunden">
                   Benutzerpofil
                  </a>
                </li>
              </ul>
            </nav>
          </Col>}
      </div>;
  }
}

export default Navigator;