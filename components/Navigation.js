import logo from "../public/Logo.jpg";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
function Header() {
  return (
    <div className="d-flex">
      <div className="">
        <Image src={logo} className="" alt="Bravo" height="40" width="40" />
      </div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-3"
              style={{ marginLeft: "14rem", fontSize: "24px" }}
            >
              <Nav.Link>
                <a
                  href="/"
                  className="text-decoration-none mr-2"
                  style={{ color: "red" }}
                >
                  Home
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  href="/about"
                  className="text-decoration-none mr-2"
                  style={{ color: "red" }}
                >
                  About
                </a>
              </Nav.Link>
              <Nav.Link>
                <Link href="/contact">
                  <a
                    className="text-decoration-none mr-2"
                    style={{ color: "red" }}
                  >
                    Contact
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/location">
                  <a
                    className="text-decoration-none mr-2"
                    style={{ color: "red" }}
                  >
                    Location
                  </a>
                </Link>{" "}
              </Nav.Link>

              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <a className="text-decoration-none" style={{ color: "red" }}>
                    Birthdays
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {" "}
                  <a className="text-decoration-none" style={{ color: "red" }}>
                    Outdooring
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
                  <a className="text-decoration-none" style={{ color: "red" }}>
                    Engagement
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {" "}
                  <a className="text-decoration-none" style={{ color: "red" }}>
                    Dinner
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
