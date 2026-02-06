import { Col, Image } from "react-bootstrap";

const MyCard = function (props) {
  return (
    <Col xs={6} md={4} lg={2}>
      <div>
        <div className="selectedFilm position-relative py-1">
          <div className=" d-flex justify-content-between px-1">
            <h6 className=" text-truncate w-75">{props.title}</h6>
            <h6>({props.year})</h6>
          </div>
          <Image fluid src={props.imgSrc} className="card-img border border-0 rounded-0" alt="..." style={{ height: "300px" }} />
        </div>
      </div>
    </Col>
  );
};

export default MyCard;
