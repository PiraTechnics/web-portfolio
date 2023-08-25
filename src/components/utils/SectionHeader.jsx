import { Row } from "react-bootstrap";

const SectionHeader = ({ title, subtitle }) => {
  if (subtitle) {
    return (
      <Row className="section-header">
        <h2 className="px-0">{title}</h2>
        <hr className="border-2 mb-2 px-0" />
        <span className="px-0">{subtitle}</span>
      </Row>
    );
  } else {
    return (
      <Row className="section-header mb-2">
        <h2 className="px-3 pt-2">{title}</h2>
      </Row>
    );
  }
};

export default SectionHeader;
