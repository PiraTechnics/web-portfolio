import { Row } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const DownScroll = ({ navLink }) => {
  return (
    <Row className="flex-grow-1 align-self-center align-items-end my-4">
      <a href={navLink}>
        <FaChevronDown size={30} className="nav-link" />
      </a>
    </Row>
  );
};

export default DownScroll;
