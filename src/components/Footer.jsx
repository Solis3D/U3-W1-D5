import { Row, Col, Container } from "react-bootstrap";

const Footer = function () {
  return (
    <Container fluid={true} className="mt-6 bg-black">
      <div className="px-4 px-lg-5 mt-5 text-muted">
        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/" className="text-muted fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" className="text-muted fs-4">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://x.com/?lang=it/" className="text-muted fs-4">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://youtube.com/" className="text-muted fs-4">
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        <Row className="my-3 d-flex gap-1 gap-md-0">
          <Col className="gap-md-0 d-flex d-md-block justify-content-start gap-2" xs={12} md={3}>
            <p className="footer-text">Audio and Subtitles</p>
            <p className="footer-text">Media Center</p>
            <p className="footer-text">Privacy</p>
            <p className="footer-text">Contact Us</p>
          </Col>

          <Col className="gap-md-0 d-flex d-md-block justify-content-start gap-2" xs={12} md={3}>
            <p className="footer-text">Audio Description</p>
            <p className="footer-text">Investor Relations</p>
            <p className="footer-text">Legal Notices</p>
          </Col>

          <Col className="gap-md-0 d-flex d-md-block justify-content-start gap-2" xs={12} md={3}>
            <p className="footer-text">Help Center</p>
            <p className="footer-text">Jobs</p>
            <p className="footer-text">Cookie Preferences</p>
          </Col>

          <Col className="gap-md-0 d-flex d-md-block justify-content-start gap-2" xs={12} md={3}>
            <p className="footer-text">Gift Cards</p>
            <p className="footer-text">Terms of use</p>
            <p className="footer-text">Corporate Information</p>
          </Col>
        </Row>

        <div className=" d-flex justify-content-center">
          <a href="#" className="btn border-1 border-light-subtle rounded-0 py-1 text-muted">
            {" "}
            Service Code
          </a>
        </div>

        <p className="footer-text mt-3 mb-1 text-white-50 text-center">&copy; 1997 &dot;2019 Netflix,Inc. &#123;i-0d00fcda2fdf9c0de&#125;</p>
      </div>
    </Container>
  );
};

export default Footer;
