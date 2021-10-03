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
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav.Link href="/">/home/lmai</Nav.Link>
            <Nav.Link href="/posts">./posts</Nav.Link>
            <Nav.Link href="/projects">./projects</Nav.Link>
            <Nav.Link href="/about">./about</Nav.Link>
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
            <span>&copy; 2021 Loc Mai.</span>
          </div>
        </footer>
      </Col>
    </Row>
  </Container>
);

export default MasterLayout;
