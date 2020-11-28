enum Side {
    ROAD,
    CITY,
    FIELD,
}

interface Card {
    sides: Side[];
    count: number;
    church: boolean;
    shield: boolean;
}

const cards: Card[] = [
    //https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Carcassonne_tiles.svg/1000px-Carcassonne_tiles.svg.png
    // COLUMN 1
    {
        sides: [Side.FIELD, Side.FIELD, Side.FIELD, Side.FIELD],
        count: 4,
        church: true,
        shield: false,
    },
    {
        sides: [Side.FIELD, Side.FIELD, Side.ROAD, Side.FIELD],
        count: 2,
        church: true,
        shield: false,
    },
    {
        sides: [Side.FIELD, Side.ROAD, Side.FIELD, Side.ROAD],
        count: 8,
        church: false,
        shield: false,
    },
    {
        sides: [Side.FIELD, Side.FIELD, Side.ROAD, Side.ROAD],
        count: 9,
        church: false,
        shield: false,
    },
    {
        sides: [Side.FIELD, Side.ROAD, Side.ROAD, Side.ROAD],
        count: 4,
        church: false,
        shield: false,
    },
    {
        sides: [Side.ROAD, Side.ROAD, Side.ROAD, Side.ROAD],
        count: 1,
        church: false,
        shield: false,
    },
    // COLUMN 2
    {
        sides: [Side.CITY, Side.FIELD, Side.FIELD, Side.FIELD],
        count: 5,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.ROAD, Side.FIELD, Side.ROAD],
        count: 4,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.FIELD, Side.ROAD, Side.ROAD],
        count: 3,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.ROAD, Side.ROAD, Side.FIELD],
        count: 3,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.ROAD, Side.ROAD, Side.ROAD],
        count: 3,
        church: false,
        shield: false,
    },
    // COLUMN 3
    {
        sides: [Side.FIELD, Side.CITY, Side.CITY, Side.FIELD],
        count: 1,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.CITY, Side.FIELD, Side.FIELD],
        count: 3,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.FIELD, Side.CITY, Side.FIELD],
        count: 3,
        church: false,
        shield: false,
    },
    // TODO: fix - separate cities
    {
        sides: [Side.CITY, Side.CITY, Side.FIELD, Side.FIELD],
        count: 2,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.CITY, Side.ROAD, Side.ROAD],
        count: 2,
        church: false,
        shield: false,
    },
    // COLUMN 4
    {
        sides: [Side.FIELD, Side.CITY, Side.CITY, Side.FIELD],
        count: 2,
        church: false,
        shield: true,
    },
    {
        sides: [Side.CITY, Side.CITY, Side.FIELD, Side.FIELD],
        count: 2,
        church: false,
        shield: true,
    },
    {
        sides: [Side.CITY, Side.CITY, Side.ROAD, Side.ROAD],
        count: 2,
        church: false,
        shield: true,
    },
    // COLUMN 5
    {
        sides: [Side.CITY, Side.CITY, Side.CITY, Side.FIELD],
        count: 3,
        church: false,
        shield: false,
    },
    {
        sides: [Side.CITY, Side.CITY, Side.CITY, Side.ROAD],
        count: 1,
        church: false,
        shield: false,
    },
    // COLUMN 6
    {
        sides: [Side.CITY, Side.CITY, Side.CITY, Side.FIELD],
        count: 1,
        church: false,
        shield: true,
    },
    {
        sides: [Side.CITY, Side.CITY, Side.CITY, Side.ROAD],
        count: 2,
        church: false,
        shield: true,
    },
    // COLUMN 7
    {
        sides: [Side.CITY, Side.CITY, Side.CITY, Side.CITY],
        count: 1,
        church: false,
        shield: true,
    },
];
