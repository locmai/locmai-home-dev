import { FC } from "react";
import Head from "next/head";
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap"
type Props = {
    title?: string;
    page?: string;
};

const MasterLayout: FC<Props> = ({
  children,
  title = "Loc Mai",
  page = "home",
}) => (
  <Container fluid>
    <Head>
      <title>Loc Mai</title>
    </Head>
    <Row>
      <Col>
        <Navbar className="navbar">
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            {/* <Nav.Link href="/posts">Posts</Nav.Link> */}
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <section className="section">{children}</section>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <footer className="footer">
          <div>
            <Nav.Link href="https://ping.locmai.dev/" target="blank">
              Sites Status
            </Nav.Link>
            <span>&copy; 2021 Loc Mai.</span>
          </div>
        </footer>
      </Col>
    </Row>
  </Container>
);

export default MasterLayout;