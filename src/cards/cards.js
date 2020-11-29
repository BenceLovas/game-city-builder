import * as cardElements from "./cardElements";

export const Side = {
  FIELD: "FIELD",
  CITY: "CITY",
  ROAD: "ROAD",
};

export const cardFirst = {
  sides: [Side.CITY, Side.ROAD, Side.FIELD, Side.ROAD],
  count: 4,
  church: false,
  shield: false,
  elements: [cardElements.cityTop, cardElements.roadHorizontal],
};

export const cards = [
  //https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Carcassonne_tiles.svg/1000px-Carcassonne_tiles.svg.png
  // COLUMN 1
  {
    sides: [Side.FIELD, Side.FIELD, Side.FIELD, Side.FIELD],
    count: 4,
    church: true,
    shield: false,
    elements: [cardElements.church],
  },
  {
    sides: [Side.FIELD, Side.FIELD, Side.ROAD, Side.FIELD],
    count: 2,
    church: true,
    shield: false,
    elements: [cardElements.roadVerticalHalf, cardElements.church],
  },
  {
    sides: [Side.FIELD, Side.ROAD, Side.FIELD, Side.ROAD],
    count: 8,
    church: false,
    shield: false,
    elements: [cardElements.roadHorizontal],
  },
  {
    sides: [Side.FIELD, Side.FIELD, Side.ROAD, Side.ROAD],
    count: 9,
    church: false,
    shield: false,
    elements: [cardElements.roadTurnLeft],
  },
  {
    sides: [Side.FIELD, Side.ROAD, Side.ROAD, Side.ROAD],
    count: 4,
    church: false,
    shield: false,
    elements: [cardElements.roadVerticalHalf, cardElements.roadHorizontal],
  },
  {
    sides: [Side.ROAD, Side.ROAD, Side.ROAD, Side.ROAD],
    count: 1,
    church: false,
    shield: false,
    elements: [cardElements.roadHorizontal, cardElements.roadVertical],
  },
  // COLUMN 2
  {
    sides: [Side.CITY, Side.FIELD, Side.FIELD, Side.FIELD],
    count: 5,
    church: false,
    shield: false,
    elements: [cardElements.cityTop],
  },
  {
    sides: [Side.CITY, Side.ROAD, Side.FIELD, Side.ROAD],
    // orinially 4 but the first card is also this so that is why the -1
    count: 3,
    church: false,
    shield: false,
    elements: [cardElements.cityTop, cardElements.roadHorizontal],
  },
  {
    sides: [Side.CITY, Side.FIELD, Side.ROAD, Side.ROAD],
    count: 3,
    church: false,
    shield: false,
    elements: [cardElements.cityTop, cardElements.roadTurnLeft],
  },
  {
    sides: [Side.CITY, Side.ROAD, Side.ROAD, Side.FIELD],
    count: 3,
    church: false,
    shield: false,
    elements: [cardElements.cityTop, cardElements.roadTurnRight],
  },
  {
    sides: [Side.CITY, Side.ROAD, Side.ROAD, Side.ROAD],
    count: 3,
    church: false,
    shield: false,
    elements: [
      cardElements.roadVerticalHalf,
      cardElements.roadHorizontal,
      cardElements.cityTop,
    ],
  },
  // COLUMN 3
  {
    sides: [Side.FIELD, Side.CITY, Side.CITY, Side.FIELD],
    count: 1,
    church: false,
    shield: false,
    elements: [cardElements.cityHorizontal],
  },
  {
    sides: [Side.CITY, Side.CITY, Side.FIELD, Side.FIELD],
    count: 3,
    church: false,
    shield: false,
    elements: [cardElements.cityTopRight],
  },
  {
    sides: [Side.CITY, Side.FIELD, Side.CITY, Side.FIELD],
    count: 3,
    church: false,
    shield: false,
    elements: [cardElements.cityTop, cardElements.cityBottom],
  },
  // TODO: fix - separate cities
  {
    sides: [Side.CITY, Side.CITY, Side.FIELD, Side.FIELD],
    count: 2,
    church: false,
    shield: false,
    elements: [cardElements.cityTop, cardElements.cityRight],
  },
  {
    sides: [Side.CITY, Side.CITY, Side.ROAD, Side.ROAD],
    count: 2,
    church: false,
    shield: false,
    elements: [cardElements.cityTopRight, cardElements.roadTurnLeft],
  },
  // COLUMN 4
  {
    sides: [Side.FIELD, Side.CITY, Side.CITY, Side.FIELD],
    count: 2,
    church: false,
    shield: true,
    elements: [cardElements.cityHorizontal, cardElements.shieldMiddle],
  },
  {
    sides: [Side.CITY, Side.CITY, Side.FIELD, Side.FIELD],
    count: 2,
    church: false,
    shield: true,
    elements: [cardElements.cityTopRight, cardElements.shieldTopLeft],
  },
  {
    sides: [Side.CITY, Side.CITY, Side.ROAD, Side.ROAD],
    count: 2,
    church: false,
    shield: true,
    elements: [
      cardElements.cityTopRight,
      cardElements.roadTurnLeft,
      cardElements.shieldTopLeft,
    ],
  },
  // COLUMN 5
  {
    sides: [Side.CITY, Side.CITY, Side.CITY, Side.FIELD],
    count: 3,
    church: false,
    shield: false,
    elements: [cardElements.cityTopRightLeft],
  },
  {
    sides: [Side.CITY, Side.CITY, Side.CITY, Side.ROAD],
    count: 1,
    church: false,
    shield: false,
    elements: [cardElements.roadVerticalHalf, cardElements.cityTopRightLeft],
  },
  // COLUMN 6
  {
    sides: [Side.CITY, Side.CITY, Side.CITY, Side.FIELD],
    count: 1,
    church: false,
    shield: true,
    elements: [cardElements.cityTopRightLeft, cardElements.shieldMiddle],
  },
  {
    sides: [Side.CITY, Side.CITY, Side.CITY, Side.ROAD],
    count: 2,
    church: false,
    shield: true,
    elements: [
      cardElements.roadVerticalHalf,
      cardElements.cityTopRightLeft,
      cardElements.shieldMiddle,
    ],
  },
  // COLUMN 7
  {
    sides: [Side.CITY, Side.CITY, Side.CITY, Side.CITY],
    count: 1,
    church: false,
    shield: true,
    elements: [cardElements.cityFull, cardElements.shieldMiddle],
  },
];
