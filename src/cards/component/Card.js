import { cards } from "../cards";
const Card = ({ x, y, rotation, elements }) => {
  return (
    <svg
      x={x}
      y={y}
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="rgba(132, 197, 186, 0.52)" />
      <g transform={"rotate(" + rotation + ")"} transform-origin="center">
        {elements}
      </g>
    </svg>
  );
};

export default Card;
