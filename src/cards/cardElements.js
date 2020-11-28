export const church = <circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="black" />
export const roadTurnLeft = <path d="M 0 50 C 0 50, 50 50, 50 100" stroke="white" stroke-width="30" fill="transparent"/>
export const roadTurnRight = <path d="M 50 100 C 50 70, 70 50, 100 50" stroke="white" stroke-width="30" fill="transparent"/>
export const roadHorizontal = <path d="M 0 50 L 100 50" stroke="white" stroke-width="30" fill="transparent"/>
export const roadVertical = <path d="M 50 0 L 50 100" stroke="white" stroke-width="30" fill="transparent"/>
export const roadVerticalHalf = <path d="M 50 50 L 50 100" stroke="white" stroke-width="30" fill="transparent"/>
export const shieldMiddle = <path d="M 50 40 L 60 55 L 40 55 Z" fill="orange"/>
export const shieldTopLeft= <path d="M 83 10 L 93 25 L 73 25 Z" fill="orange"/>
export const cityTop = <path 
    d="
        M 0 0
        L 30 20
        L 70 20
        L 100 0
        Z
    " 
    fill="black"
/>
export const cityBottom = <path 
d="
    M 0 100
    L 30 80
    L 70 80
    L 100 100
    Z
" 
fill="black"
/>
export const cityRight = <path 
d="
    M 100 0
    L 80 30
    L 80 70
    L 100 100
    Z
" 
fill="black"
/>
export const cityHorizontal = <path 
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
fill="black"
/>

export const cityTopRight = <path 
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
fill="black"
/>

export const cityTopRightLeft = <path 
d="
    M 0 0
    L 100 0
    L 100 100
    L 80 80
    L 20 80
    L 0 100
    Z
" 
fill="black"
/>
export const cityFull = <path 
d="
    M 0 0
    L 100 0
    L 100 100
    L 0 100
    Z
" 
fill="black"
/>