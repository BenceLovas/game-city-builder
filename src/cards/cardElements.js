export const church = <circle cx="50" cy="50" r="30" fill="rgba(0,0,0, .7)" />;
export const roadTurnLeft = (
  <path
    d="M 0 50 C 0 50, 50 50, 50 100"
    stroke="white"
    strokeWidth="30"
    fill="transparent"
  />
);
export const roadTurnRight = (
  <path
    d="M 50 100 C 50 70, 70 50, 100 50"
    stroke="white"
    strokeWidth="30"
    fill="transparent"
  />
);
export const roadHorizontal = (
  <path
    d="M 0 50 L 100 50"
    stroke="white"
    strokeWidth="30"
    fill="transparent"
  />
);
export const roadVertical = (
  <path
    d="M 50 0 L 50 100"
    stroke="white"
    strokeWidth="30"
    fill="transparent"
  />
);
export const roadVerticalHalf = (
  <path
    d="M 50 50 L 50 100"
    stroke="white"
    strokeWidth="30"
    fill="transparent"
  />
);
export const shieldMiddle = <circle cx="50" cy="50" r="10" fill="orange" />;
export const shieldTopLeft = <circle cx="83" cy="15" r="10" fill="orange" />;
export const cityTop = (
  <path
    d="
        M 0 0
        L 30 20
        L 70 20
        L 100 0
        Z
    "
    fill="rgba(0,0,0, .7)"
  />
);
export const cityBottom = (
  <path
    d="
    M 0 100
    L 30 80
    L 70 80
    L 100 100
    Z
"
    fill="rgba(0,0,0, .7)"
  />
);
export const cityRight = (
  <path
    d="
    M 100 0
    L 80 30
    L 80 70
    L 100 100
    Z
"
    fill="rgba(0,0,0, .7)"
  />
);
export const cityHorizontal = (
  <path
    d="
    M 0 0
    L 20 20
    L 80 20
    L 100 0
    L 100 100
    L 80 80
    L 20 80
    L 0 100
    Z
"
    fill="rgba(0,0,0, .7)"
  />
);

export const cityTopRight = (
  <path
    d="
    M 0 0
    L 20 20
    L 60 20
    L 80 40
    L 80 80
    L 100 100
    L 100 0
    Z
"
    fill="rgba(0,0,0, .7)"
  />
);

export const cityTopRightLeft = (
  <path
    d="
    M 0 0
    L 100 0
    L 100 100
    L 80 80
    L 20 80
    L 0 100
    Z
"
    fill="rgba(0,0,0, .7)"
  />
);
export const cityFull = (
  <path
    d="
    M 0 0
    L 100 0
    L 100 100
    L 0 100
    Z
"
    fill="rgba(0,0,0, .7)"
  />
);
