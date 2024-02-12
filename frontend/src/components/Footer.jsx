import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const monthNumber = new Date().getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[monthNumber];
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              ProTech &copy; {currentMonth} {currentYear}
            </p>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
