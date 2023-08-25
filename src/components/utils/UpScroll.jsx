import { Row } from "react-bootstrap";
import { FaChevronUp } from "react-icons/fa";

const DownScroll = ({ navLink }) => {
  return (
    <Row className="flex-grow-1 align-self-center mt-4 pt-3 text-center">
      <a href={navLink}>
        <FaChevronUp size={30} className="nav-link" />
      </a>
    </Row>
  );
};

export default DownScroll;
