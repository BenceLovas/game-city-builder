import PropTypes from "prop-types";

const Card = ({ x, y, rotation, elements }) => {
  return (
    <svg
      x={x}
      y={y}
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="rgba(0, 0, 0, 0.52)" />
      <g transform={"rotate(" + rotation + ")"} transform-origin="center">
        {elements}
      </g>
    </svg>
  );
};

Card.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  rotation: PropTypes.number,
  elements: PropTypes.any,
};

export default Card;
