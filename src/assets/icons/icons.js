import React from 'react'

// Icono de Flecha hacia arriba
export const IconArrowTop = ({ size, style = {}, color }) => <svg x='0px' y='0px' viewBox='0 0 38 27' style={style} width={size} height={size}> <path fill={color} d='M0,21.6c0.1-1.8,0.7-3.1,1.9-4.3c5.5-5.5,11-11,16.5-16.6c0.5-0.5,0.8-0.5,1.2,0c1.2,1.3,2.5,2.5,3.7,3.8 c1.3,1.3,2.6,2.6,3.8,3.8c1.3,1.3,2.6,2.6,3.9,3.9c1.2,1.2,2.4,2.4,3.6,3.6c0.7,0.7,1.4,1.4,2,2.2c1.3,1.6,1.5,3.5,0.8,5.4 c-0.8,1.9-2.2,3.1-4.3,3.4c-1.8,0.3-3.3-0.2-4.6-1.5c-2.3-2.3-4.6-4.6-6.9-6.9c-0.8-0.8-1.7-1.6-2.5-2.5c-0.2-0.3-0.4-0.2-0.7,0 c-2.1,2.1-4.2,4.3-6.4,6.4c-1.1,1.1-2.1,2.2-3.3,3.2C7,27,5,27.2,2.9,26.3C1.3,25.5,0,23.4,0,21.6z' /></svg>

// Icono de Flecha hacia derecha
export const IconArrowR = ({ size, style = {}, color }) => <svg x='0px' y='0px' viewBox='0 0 492.004 492.004' style={style} width={size} height={size}><path fill={color} d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" /></svg>

// Icon de X de cerrar con circulo sin relleno
export const IconCancel = ({ style = {}, size, color }) => <svg x='0px' y='0px' width={size} height={size} style={style} viewBox='0 0 174.239 174.239'><path fill={color} d='M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z' /><path fill={color} d='M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z' /></svg>

// Icono Facebook
export const IconFacebook = ({ style = {}, size, color }) => <svg x='0px' y='0px' viewBox='0 0 511 511.9' width={size} height={size} style={style}><path fill={color} d='M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z' /></svg>

// Icono de Instagram
export const IconInstagram = ({ style = {}, size, color }) => <svg x='0px' y='0px' viewBox='0 0 511 511.9' width={size} height={size} style={style}><path fill={color} d='m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0' /><path fill={color} d='m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0' /><path fill={color} d='m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0' /></svg>

// Icon logo tipo
export const IconLogo = ({ style = {}, color, size }) => <svg width={size} height={size} viewBox="0 0 80 43" fill={color} style={style} xmlns="http://www.w3.org/2000/svg"><path d="M0 24.258h6.09L9.498 7.472h-6.09L0 24.258zM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836zM8.498 28.985h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0 0 22.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985z"></path><path d="M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608zM47 24.633c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608M69.082 24.258h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 0 0-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944zM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093z"></path></svg>

// Icono  de Youtube
export const IconYoutube = ({ style = {}, size, color, color2 }) => <svg x='0px' y='0px' viewBox='0 -77 512.00213 512' width={size} height={size} style={style}><path fill={color} d='m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0' /><path fill={color2} d='m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0' /></svg>

//Icono de Log Out / cerrar sesión
export const IconLogout = ({ size, color }) => <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xmlSpace="preserve" viewBox="0 0 512 512" width={size} height={size} >
    <g>
        <g>
            <path fill={color} d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15 c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724 c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262 C276.412,478.129,266.908,468.625,255.15,468.625z" />
        </g>
    </g>
    <g>
        <g>
            <path fill={color} d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z" />
        </g>
    </g>
</svg>

// Icono Banner Derecho
export const IconArrowRight = ({ style = {}, size, color }) => <svg x='0px' y='0px' viewBox='0 0 22.893 45.908' style={style} width={size} height={size}>
    <path fill='none' stroke={color} strokeWidth='3px' strokeLinecap='round' strokeLinejoin='bevel' d='M1365.5,348.848l21.837-22.686L1365.5,303.635' transform='translate(-1365.14 -303.287)' />
</svg>
/* Icono De Flecha derecha del banner */
export const IconArrowLeft = ({ style = {}, size, color }) => <svg x='0px' y='0px' viewBox='0 0 22.893 45.908' style={style} width={size} height={size}>
    <path fill='none' stroke={color} strokeWidth='2px' strokeLinecap='round' strokeLinejoin='bevel' d='M1365.5,348.848l21.837-22.686L1365.5,303.635' transform='translate(1388.033 349.194) rotate(180)' />
</svg>

/* Icono de WhatsApp */
export const IconWhatsApp = ({ style = {}, size, color }) => <svg x='0px' y='0px' viewBox='-23 -21 682 682.66669' style={style} width={size} height={size}><path fill={color} d='m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0' fillRule='evenodd' /></svg>

// Icono de IconInstagramGradient
export const IconInstagramGradient = ({ style = {}, size }) => <svg x='0px' y='0px' viewBox='0 0 512 512' width={size} height={size} style={style}><linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='-46.0041' y1='634.1208' x2='-32.9334' y2='647.1917' gradientTransform='matrix(32 0 0 -32 1519 20757)'> <stop offset='0' stopColor='#FFC107' /> <stop offset='0.507' stopColor='#F44336' /><stop offset='0.99' stopColor='#9C27B0' /></linearGradient><path fill='url(#SVGID_1_)' d='M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z' /><linearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='-42.2971' y1='637.8279' x2='-36.6404' y2='643.4846' gradientTransform='matrix(32 0 0 -32 1519 20757)'><stop offset='0' stopColor='#FFC107' /><stop offset='0.507' stopColor='#F44336' /><stop offset='0.99' stopColor='#9C27B0' /></linearGradient><path fill='url(#SVGID_2_)' d='M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z' /><linearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='-35.5456' y1='644.5793' x2='-34.7919' y2='645.3331' gradientTransform='matrix(32 0 0 -32 1519 20757)'><stop offset='0' stopColor='#FFC107' /><stop offset='0.507' stopColor='#F44336' /><stop offset='0.99' stopColor='#9C27B0' /></linearGradient><circle fill='url(#SVGID_3_)' cx='393.6' cy='118.4' r='17.056' /></svg>

// Icono  de Tres AddPlusCircle
export const AddPlusCircle = ({ style = {}, size }) => <svg x='0px' y='0px' viewBox="0 0 27 27" width={size} height={size} style={style}>
    <circle fill='#e4e4e4' cx="13.5" cy="13.5" r="13.5" /><circle fill='#068cf3' cx="8.5" cy="8.5" r="8.5" transform="translate(5,5)" /><line fill='none' stroke='#fff' strokeWidth='3px' x2="8.494" transform="translate(9.517 13.5)" />
    <line fill='none' stroke='#fff' strokeWidth='3px' y2="8.809" transform="translate(13.606 9.096)" /></svg>

export const IconShopping = ({ style = {}, size, color }) => <svg fill={color} style={style} width={size} height={size} fillRule='evenodd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23"><path d="M8.7.2c-1.1 0-2 .3-2.6.9-.6.6-1 1.4-1.2 2.2-.2.6-.3 1.1-.3 1.7H2C.9 5 0 5.9 0 7l.1 13c0 1.7 1.3 3 3 3H15c1.7 0 3-1.3 3-3V7c0-1.1-.9-2-2-2h-3.2c-.1-.6-.1-1.1-.3-1.6-.2-.8-.6-1.7-1.2-2.2-.7-.6-1.5-1-2.6-1zm2.7 6.3v2.6c0 .4.3.7.8.7.4 0 .7-.3.7-.8v-.8-1.8H16c.3 0 .5.2.5.5l-.1 13c0 .8-.7 1.5-1.5 1.5H3.1c-.8 0-1.5-.7-1.5-1.5L1.5 7c0-.3.2-.5.5-.5h2.5v2.6c0 .4.3.8.7.8.4 0 .8-.4.8-.8v-.8-1.8h5.4zM11.3 5c0-.4-.1-.8-.2-1.2-.2-.7-.4-1.2-.8-1.5-.4-.3-.8-.5-1.6-.5s-1.3.2-1.6.5c-.4.3-.6.8-.8 1.5-.1.4-.2.8-.2 1.2h5.2z"></path></svg>
// Icon de lupa

export const IconSearch = ({ style = {}, size }) => <svg style={style} width={size} height={size} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.39 16.23"><circle fill="none" stroke='#ea1d2c' cx="6.91" cy="6.91" r="6.41" /><rect fill="none" strokeMiterlimit='10' stroke='#ea1d2c' x="-39.59" y="7.49" width="5.71" height="0.54" rx="0.22" transform="translate(45.89 33.02) rotate(42.94)" /></svg>
// Icon de Arrow
export const IconArrowBottom = ({ style = {}, color, size }) => <svg height={size} width={size} color={color} style={style} version="1.1" viewBox="0 0 129 129" >
    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
</svg>
// Icon de Google full color
export const IconGoogleFullColor = ({ size }) => <svg width={size} height={size} viewBox="0 0 256 262" version="1.1" >
    <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4"></path>
    <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853"></path>
    <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05"></path>
    <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335"></path>
</svg>
// Icon de Arrow
export const IconCategories = ({ size }) => <svg width={size} height={size} viewBox="0 0 269.71 271.12">
    <path fill="none" stroke="red" strokeMiterlimit='1' strokeWidth='7px' d="M1069.19,337c-2,9.92-4.62,21.82-7.77,35.92a24.79,24.79,0,0,1-4.28,9.7,19.77,19.77,0,0,1-1.78,2.11L997,439.6" transform="translate(-802.91 -175.1)" />
    <rect fill="none" stroke="red" strokeMiterlimit='1' strokeWidth='7px' />
    <path fill="none" stroke="red" strokeMiterlimit='1' strokeWidth='7px' d="M954,439,897.87,379.2a12,12,0,0,1,.52-17l73.28-68.89a26,26,0,0,1,2.21-1.65,29,29,0,0,1,12-4.4c44.51-6.5,66.76-9.75,72.71-3.52,6.86,7.17,1.81,29.78-8.3,75a24.72,24.72,0,0,1-4.27,9.7,22.25,22.25,0,0,1-1.78,2.11L971,439.48A12,12,0,0,1,954,439Z" transform="translate(-802.91 -175.1)" />
    <circle fill="none" stroke="red" strokeMiterlimit='10' strokeWidth='5px' cx="221.37" cy="140.22" r="10.76" />
</svg>
// Icon de Google full color
export const IconSendMessage = ({ size }) => <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.02 39.35"><defs></defs><title>Asset 8</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1px' d="M45.84,1.13,17.26,26.45l12.08,3.14a1,1,0,0,0,1.17-.51L46,1.26A.1.1,0,0,0,45.84,1.13Z" /><path fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1px' d="M9.62,23.15l-7.83-2a1,1,0,0,1-.15-2L45.62,1a.06.06,0,0,1,.05.11l-36.05,22,4.86,14.57a1,1,0,0,0,2-.31l.79-11" /><line fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1px' x1="16.06" y1="38.35" x2="23.65" y2="28.11" /></g></g></svg>
// Icon de Google full color
export const IconSendMessageTwo = ({ size }) => <svg width={size} height={size} width="20px" height="20px" viewBox="0 0 24 24"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0080ff" fillRule="evenodd" stroke="none" ></path></svg>
// Icono  de Ubicación
export const IconEnterLocation = ({ style = {}, size, color }) => <svg x='0px' y='0px' viewBox='0 0 16.045 22.389' width={size} height={size} style={style}><g transform='translate(-309.47 -48.69)'><path fill='none' stroke={color} strokeLinecap='round' strokeMiterlimit='10' d='M325.015,56.713c0,4.155-7.523,13.565-7.523,13.565s-7.522-9.41-7.522-13.565a7.523,7.523,0,1,1,15.045,0Z' /><circle fill='none' stroke={color} strokeLinecap='round' strokeMiterlimit='10' cx='3.479' cy='3.479' r='3.479' transform='translate(314.013 53.293)' /></g></svg>

//
//
//countries codes
// Icono  de Ubicación
export const IconColombia = ({ style = {}, size }) => <svg width={size} height={size} style={style} version="1.1" id="Capa_1" x="0px" y="0px"
    viewBox="0 0 450 300">
    <rect fill='#CE1126' width="450" height="300" />
    <rect fill='#003893' width="450" height="225" />
    <rect fill='#FCD116' width="450" height="150" />
</svg>
// Icono  de Venezuela
export const IconVenezuela = ({ style = {}, size }) => <svg width={size} height={size} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120">
    <g id="s" transform="translate(0,-36)">
        <g id="f">
            <g id="t">
                <path d="M0,-5V0H3z" fill="#fff" transform="rotate(18,0,-5)" id="o" />
                <use transform="scale(-1,1)" />
            </g>
            <use href="#t" transform="rotate(72)" />
        </g>
        <use href="#t" transform="rotate(-72)" />
        <use href="#f" transform="rotate(144)" />
    </g>
    <path d="M0,0H180V120H0z" fill="#cf142b" />
    <path d="M0,0H180V80H0z" fill="#00247d" />
    <path d="M0,0H180V40H0z" fill="#ffcc00" />
    <g transform="translate(90,84)">
        <g id="s4">
            <g id="s2">
                <use href="#s" transform="rotate(10)" />
                <use href="#s" transform="rotate(30)" />
            </g>
            <use href="#s2" transform="rotate(40)" />
        </g>
        <use href="#s4" transform="rotate(-80)" />
    </g>
</svg>
// Icono  de Paraguay
export const IconParaguay = ({ style = {}, size }) => <svg width={size} height={size} style={style} version="1.1" id="svg2" x="0px" y="0px" viewBox="0 0 600 330" >
    <rect id="rect4" fill='#0038A8' width="600" height="330" />
    <rect id="rect6" fill='#D52B1E' width="600" height="220" />
    <rect id="rect8" fill='#fff' width="600" height="110" />
    <path id="path2542" fill='#fff' stroke='#000000' strokeWidth='1.8429' strokeMiterlimit='10' d="M341.8,165c0,23.1-18.7,41.8-41.8,41.8c-23.1,0-41.8-18.7-41.8-41.8c0-23.1,18.7-41.8,41.8-41.8
C323.1,123.2,341.8,141.9,341.8,165z" />
    <path id="path2550" d="M326.1,164.9c0,14.4-11.7,26.1-26.1,26.1s-26.1-11.7-26.1-26.1c0-14.4,11.7-26,26.1-26
S326.1,150.5,326.1,164.9z" />
    <path id="path2554" fill='#FEDF00' stroke='#000000' strokeWidth='0.3013' d="M300,155.5l2.2,6.3l6.6,0.1l-5.3,4l1.9,6.3l-5.5-3.8l-5.5,3.8l1.9-6.3l-5.3-4l6.6-0.1L300,155.5z
" />
</svg>
// Icono  de Brazil
export const IconBrazil = ({ style = {}, size }) => <svg width={size} height={size} style={style} version="1.0" viewBox="-2100 -1470 4200 2940">
    <rect y="-50%" x="-50%" height="100%" fill="#009b3a" width="100%" />
    <path d="m-1743 0 1743 1113 1743-1113-1743-1113z" fill="#fedf00" />
    <circle r="735" fill="#002776" />
</svg>
// Icono  de Brazil
export const IconCostaRica = ({ style = {}, size }) => <svg width={size} height={size} style={style} viewBox="0 0 10 6">
    <path d="M0,0h10v6H0z" width={size} height={size} fill="#002b7f" />
    <path d="M0,1h10v4H0z" width={size} height={size} fill="#fff" />
    <path d="M0,2h10v2H0z" width={size} height={size} fill="#ce1126" />
</svg>
// Icono  de Cuba
export const IconCuba = ({ style = {}, size }) => <svg width={size} height={size} style={style} version="1.1" id="Layer_1" x="0px" y="0px"
    viewBox="0 0 64 42" >

    <path id="Rounded_Rectangle_7_copy_1_" fill='#0038A8' d="M5.8,0h52.3C61.4,0,64,2.6,64,5.7v30.6c0,3.2-2.6,5.7-5.8,5.7H5.8
C2.6,42,0,39.4,0,36.3V5.7C0,2.6,2.6,0,5.8,0z"/>
    <rect y="24.9" fill='#fff' width="64" height="8.4" />
    <rect y="8.4" fill='#fff' width="64" height="8.4" />
    <path fill='#CF142B' d="M2.1,40.7L32.9,21L2.1,1.3C0.8,2.4,0,4,0,5.7v30.6C0,38,0.8,39.6,2.1,40.7z" />
    <polygon fill='#fff' points="11.7,14.8 13.3,19.5 18.4,19.5 14.3,22.4 15.8,27.2 11.7,24.2 7.7,27.2 9.3,22.4 5.2,19.5 10.2,19.5
"/>
</svg>
// Icono  de USA
export const IconUSA = ({ style = {}, size }) => <svg width={size} height={size} style={style} version="1.1" x="0px" y="0px"
    viewBox="0 0 64 42" >

    <rect y="9.6" fill='#fff' width="64" height="3.2" />
    <path fill='#fff' d="M0,36.3c0,0.7,0.1,1.5,0.4,2.1h63.2c0.3-0.7,0.4-1.4,0.4-2.1v-1.1H0V36.3z" />
    <rect y="22.4" fill='#fff' width="64" height="3.2" />
    <rect y="28.8" fill='#fff' width="64" height="3.2" />
    <rect y="16" fill='#fff' width="64" height="3.2" />
    <path fill='#fff' d="M0,5.7v0.7h64V5.7c0-0.9-0.2-1.7-0.6-2.5H0.6C0.2,4,0,4.8,0,5.7z" />
    <path fill='#CF142B' d="M58.2,0H5.8C3.5,0,1.5,1.3,0.6,3.2h62.8C62.5,1.3,60.5,0,58.2,0z" />
    <rect y="6.4" fill='#CF142B' width="64" height="3.2" />
    <rect y="12.8" fill='#CF142B' width="64" height="3.2" />
    <rect y="19.2" fill='#CF142B' width="64" height="3.2" />
    <rect y="25.6" fill='#CF142B' width="64" height="3.2" />
    <rect y="32" fill='#CF142B' width="64" height="3.2" />
    <path fill='#CF142B' d="M5.8,42h52.4c2.4,0,4.5-1.5,5.4-3.6H0.4C1.3,40.5,3.3,42,5.8,42z" />
    <path fill='#0b0b9d' d="M31.5,0H5.8C4.1,0,2.6,0.7,1.6,1.8h0.7L2.6,1l0.3,0.8h0.9L3.1,2.4l0.3,0.9L2.6,2.7L1.9,3.3l0.3-0.9L1.5,1.9
C0.6,2.9,0,4.2,0,5.7v16.7h31.5V0z"/>
</svg>
export const IconMéxico = ({ style = {}, size }) => <svg width={size} height={size} style={style} x="0px" y="0px"
    viewBox="0 0 64 42" >
    <path fill='#FFFFFF' d="M5.8,0h52.3C61.4,0,64,2.6,64,5.7v30.6c0,3.2-2.6,5.7-5.8,5.7H5.8
C2.6,42,0,39.4,0,36.3V5.7C0,2.6,2.6,0,5.8,0z"/>
    <path fill='#57A863' d="M64,5.3v31.4c0-0.1,0-0.3,0-0.4V5.7C64,5.6,64,5.5,64,5.3z" />
    <path fill='#006847' d="M5.8,42h15.5V0H5.8C2.6,0,0,2.6,0,5.7v30.7C0,39.5,2.6,42.1,5.8,42z" />
    <path fill='#CE1126' d="M58.2,42H42.7V0h15.5C61.4,0,64,2.6,64,5.7v30.7C64,39.5,61.4,42.1,58.2,42z" />
    <circle fill='#EABC28' cx="32" cy="21" r="7" />
</svg>
export const IconPeru = ({ size }) => <svg width={size} height={size} version="1.1" x="0px" y="0px"
    viewBox="0 0 64 42">
    <path id="Rounded_Rectangle_7_copy" fill='#FFFFFF' d="M5.8,0h52.3C61.4,0,64,2.6,64,5.7v30.6c0,3.2-2.6,5.7-5.8,5.7H5.8
C2.6,42,0,39.4,0,36.3V5.7C0,2.6,2.6,0,5.8,0z"/>
    <path fill='#57A863' d="M64,5.3v31.4c0-0.1,0-0.3,0-0.4V5.7C64,5.6,64,5.5,64,5.3z" />
    <path fill='#CC0000' d="M5.8,42h15.5V0H5.8C2.6,0,0,2.6,0,5.7v30.7C0,39.5,2.6,42.1,5.8,42z" />
    <path fill='#CC0000' d="M58.2,42H42.7V0h15.5C61.4,0,64,2.6,64,5.7v30.7C64,39.5,61.4,42.1,58.2,42z" />
</svg>
export const IconPanama = ({ size }) => <svg width={size} height={size} x="0px" y="0px"
    viewBox="0 0 64 42">
    <path id="SVGID_1_" fill='#FFFFFF' d="M58.1,0H36.2h-8.4h-22C2.6,0,0,2.6,0,5.7v11.1v8.4v11.1C0,39.4,2.6,42,5.8,42h22h8.4h22
c3.2,0,5.8-2.5,5.8-5.7V25.2v-8.4V5.7C64,2.6,61.4,0,58.1,0z"/>
    <path fill='#CF1033' d="M58.1,0H36.2H32v21h32v-4.2V5.7C64,2.6,61.4,0,58.1,0z" />
    <path fill='#0063C0' d="M0,21v4.2v11.1C0,39.4,2.6,42,5.8,42h22H32V21H0z" />
    <polygon fill='#0063C0' points="16.1,4.9 17.4,9.1 21.9,9.1 18.3,11.7 19.7,16 16.1,13.3 12.5,16 13.8,11.7 10.2,9.1 14.7,9.1 " />
    <polygon fill='#CF1033' points="48,24.4 49.4,28.6 53.8,28.6 50.2,31.2 51.6,35.5 48,32.8 44.4,35.5 45.8,31.2 42.2,28.6 46.6,28.6 " />
</svg>
export const IconRepublDom = ({ size }) => <svg x="0px" y="0px" width={size} height={size}
    viewBox="0 0 64 42" >
    <path fill="#002D61" d="M27.8,0h-22C2.6,0,0,2.6,0,5.7v11.1h27.8V0z" />
    <path fill="#CF1033" d="M0,25.2v11.1C0,39.4,2.6,42,5.8,42h22V25.2H0z" />
    <path fill="#CF1033" d="M58.1,0H36.2v16.8H64V5.7C64,2.6,61.4,0,58.1,0z" />
    <path fill="#002D61" d="M36.2,42h22c3.2,0,5.8-2.5,5.8-5.7V25.2H36.2V42z" />
    <polygon fill="#fff" points="36.2,0 27.8,0 27.8,16.8 0,16.8 0,25.2 27.8,25.2 27.8,42 36.2,42 36.2,25.2 64,25.2 64,16.8
36.2,16.8 "/>
    <circle fill="#1F714D" cx="32" cy="21" r="4.3" />
</svg>
export const IconRate = ({ style = {}, size, color }) => <svg width={size} height={size} style={style} x="0px" y="0px"
    viewBox="0 0 122.8 116.7">
    <polygon fill={color} points="61.4,0 80.3,38.4 122.8,44.6 92.1,74.5 99.3,116.7 61.4,96.8 23.4,116.7 30.7,74.5 0,44.6 42.4,38.4 " />
</svg>
/* Icono de IconDocument */
export const IconInfo = ({ style = {}, size, color }) => <svg fill={color} style={style} width={size} height={size} viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><path d="M15.333 21.999h3.333v3.333h-3.333v-3.333zm0-13.334h3.333v10h-3.333v-10zm1.65-8.333C7.783.332.333 7.799.333 16.999c0 9.2 7.45 16.666 16.65 16.666C26.2 33.665 33.666 26.2 33.666 17S26.2.332 16.983.332zm.017 30c-7.367 0-13.334-5.967-13.334-13.333C3.666 9.632 9.633 3.665 17 3.665c7.366 0 13.333 5.967 13.333 13.334 0 7.366-5.967 13.333-13.333 13.333z"></path></svg>
/* Icono de IconDocument */
export const IconEdit = ({ style = {}, size, color }) => <svg fill={color} style={style} width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.76 1.24a4.25 4.25 0 0 0-6.012 0l-.487.488L2.658 13.33a.854.854 0 0 0-.188.3c0 .01-.012.01-.012.021L.045 20.904a.83.83 0 0 0 1.052 1.052l7.252-2.413c.01 0 .01-.011.022-.011.11-.045.21-.1.299-.189l3.1-3.1a.835.835 0 0 0 0-1.173.835.835 0 0 0-1.174 0l-2.513 2.513-3.665-3.665 10.43-10.43 1.827 1.827 1.827 1.827-4.23 4.23a.836.836 0 0 0 0 1.173.835.835 0 0 0 1.174 0l4.816-4.816.487-.487a4.23 4.23 0 0 0 1.24-3A4.174 4.174 0 0 0 20.76 1.24zm-1.173 1.174c.487.488.753 1.14.753 1.827 0 .642-.233 1.251-.654 1.727L17.86 4.142l-1.827-1.827a2.591 2.591 0 0 1 3.554.1zM3.61 15.457l2.934 2.934-4.407 1.473 1.473-4.407z" fill="#EA1D2C"></path></svg>

/* Icono de IconDocument */
export const IconDost = ({ style = {}, size, color }) => <svg xmlns="http://www.w3.org/2000/svg" fill={color} style={style} width={size} height={size} viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

/* Icono de IconDocument */
export const IconDelete = ({ style = {}, size, color }) => <svg fill={color} style={style} width={size} height={size} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.014 10.085l-.544 8.656c-.036.48.338.9.822.925h.06a.87.87 0 0 0 .87-.817l.544-8.656a.867.867 0 0 0-.822-.924.892.892 0 0 0-.93.816zM8.965 9.269a.883.883 0 0 0-.821.924l.543 8.656a.87.87 0 0 0 .87.817h.06a.883.883 0 0 0 .822-.925l-.543-8.656a.892.892 0 0 0-.93-.816z" fill="#EA1D2C"></path><path d="M22.027 4.946h-5.968V3.338C16.058 1.5 14.547 0 12.698 0H10.21C8.35 0 6.839 1.5 6.839 3.338v1.608H.882A.866.866 0 0 0 0 5.811c0 .48.387.876.882.876h2.066l.894 14.191C3.952 22.631 5.304 24 6.912 24h9.074c1.607 0 2.96-1.369 3.069-3.122l.096-1.572a.875.875 0 0 0-.821-.925.884.884 0 0 0-.93.817l-.097 1.572c-.049.829-.629 1.49-1.317 1.49H6.91c-.688 0-1.268-.65-1.317-1.49L4.7 6.687H18.21l-.387 6.1c-.036.48.338.9.822.924a.876.876 0 0 0 .93-.817l.399-6.207h2.066a.884.884 0 0 0 .882-.876c0-.48-.41-.865-.894-.865zM8.603 3.338c0-.877.725-1.597 1.607-1.597h2.49c.881 0 1.606.72 1.606 1.597v1.608H8.603V3.338z" fill="#EA1D2C"></path></svg>
/* Icono de IconDocument */
/* Icono de IconDocument */
export const IconPromo = ({ style = {}, size }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="red" style={style} width={size} height={size} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M22.404 12.31a.703.703 0 0 1 0-.62l.895-1.832a2.083 2.083 0 0 0-.899-2.767l-1.8-.955a.703.703 0 0 1-.366-.503l-.352-2.007a2.084 2.084 0 0 0-2.353-1.71L15.51 2.2a.703.703 0 0 1-.591-.192L13.454.592a2.083 2.083 0 0 0-2.91 0L9.082 2.009a.704.704 0 0 1-.592.192l-2.018-.285a2.083 2.083 0 0 0-2.353 1.71l-.352 2.007a.703.703 0 0 1-.366.503l-1.8.955a2.083 2.083 0 0 0-.9 2.767l.896 1.831a.703.703 0 0 1 0 .622L.7 14.142A2.083 2.083 0 0 0 1.6 16.91l1.8.955a.703.703 0 0 1 .366.503l.352 2.008a2.082 2.082 0 0 0 2.353 1.71l2.018-.286c.218-.03.434.04.592.192l1.465 1.417a2.085 2.085 0 0 0 2.909 0l1.464-1.417a.704.704 0 0 1 .592-.192l2.018.286a2.083 2.083 0 0 0 2.353-1.71l.352-2.008a.703.703 0 0 1 .366-.503l1.8-.955a2.083 2.083 0 0 0 .9-2.767l-.896-1.831zm-.652 3.376l-1.8.955a2.078 2.078 0 0 0-1.08 1.487l-.353 2.007a.705.705 0 0 1-.796.579l-2.018-.285a2.078 2.078 0 0 0-1.748.567l-1.465 1.417a.705.705 0 0 1-.984 0l-1.465-1.417a2.076 2.076 0 0 0-1.748-.568l-2.018.286a.705.705 0 0 1-.796-.579l-.352-2.007a2.078 2.078 0 0 0-1.08-1.487l-1.8-.955a.705.705 0 0 1-.305-.936l.895-1.831a2.079 2.079 0 0 0 0-1.838l-.895-1.83a.705.705 0 0 1 .304-.937l1.8-.955a2.079 2.079 0 0 0 1.08-1.487l.353-2.007a.705.705 0 0 1 .796-.579l2.018.286a2.079 2.079 0 0 0 1.748-.568l1.465-1.417a.705.705 0 0 1 .984 0l1.465 1.417a2.078 2.078 0 0 0 1.747.568l2.019-.286c.38-.054.73.2.796.579l.352 2.007c.112.64.506 1.182 1.08 1.487l1.8.955c.34.18.473.591.305.936l-.896 1.831a2.08 2.08 0 0 0 0 1.838l.896 1.83a.705.705 0 0 1-.305.937z"></path><path d="M17.057 6.943a.692.692 0 0 0-.979 0l-9.135 9.135a.692.692 0 0 0 .979.98l9.135-9.136a.692.692 0 0 0 0-.98zM9.232 5.771a2.54 2.54 0 0 0-2.538 2.538 2.54 2.54 0 0 0 2.538 2.538 2.54 2.54 0 0 0 2.537-2.538A2.54 2.54 0 0 0 9.232 5.77zm0 3.691A1.155 1.155 0 0 1 8.078 8.31a1.155 1.155 0 0 1 2.307 0c0 .636-.517 1.153-1.153 1.153zM14.768 13.153a2.54 2.54 0 0 0-2.537 2.538 2.54 2.54 0 0 0 2.537 2.538 2.54 2.54 0 0 0 2.538-2.538 2.54 2.54 0 0 0-2.538-2.538zm0 3.692a1.155 1.155 0 0 1-1.153-1.154c0-.636.517-1.153 1.153-1.153s1.154.517 1.154 1.153-.518 1.154-1.154 1.154z"></path></g><defs><clipPath><path fill="red" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
/* Icono de IconDocument */
/* Icono de Facebook */
export const Facebook = ({ style = {}, size, color }) =><svg viewBox="0 0 48 48" fill={color} style={style} width={size} height={size} xmlns="http://www.w3.org/2000/svg"><path d="M27.629 47V23.997h6.509L35 16.07h-7.371l.011-3.967c0-2.067.201-3.175 3.245-3.175h4.069V1h-6.51c-7.818 0-10.57 3.845-10.57 10.312v4.76H13v7.926h4.874V47h9.755z"></path></svg>

/* Icono de IconDocument */
export const IconTwitter = ({ style = {}, size, color }) =><svg viewBox="0 0 48 48" fill={color} style={style} width={size} height={size} xmlns="http://www.w3.org/2000/svg"><path d="M22.821 14.375l.102 1.686-1.698-.206c-6.18-.792-11.58-3.477-16.165-7.987L2.82 5.63l-.58 1.653c-1.222 3.683-.441 7.574 2.106 10.19 1.358 1.446 1.053 1.652-1.29.792-.816-.276-1.529-.482-1.597-.379-.237.241.578 3.374 1.223 4.613.883 1.721 2.683 3.408 4.652 4.407L9 27.697l-1.97.035c-1.901 0-1.969.034-1.765.757.679 2.238 3.362 4.613 6.35 5.646l2.106.723-1.834 1.102c-2.717 1.583-5.909 2.478-9.101 2.547-1.528.035-2.785.172-2.785.275 0 .345 4.143 2.273 6.554 3.03 7.234 2.238 15.826 1.274 22.278-2.548 4.585-2.72 9.17-8.124 11.309-13.357 1.154-2.788 2.31-7.883 2.31-10.328 0-1.583.101-1.79 2.003-3.683 1.12-1.102 2.173-2.307 2.377-2.65.34-.655.306-.655-1.426-.07-2.887 1.033-3.294.895-1.868-.654 1.053-1.101 2.31-3.098 2.31-3.683 0-.104-.51.069-1.088.378-.61.345-1.97.861-2.988 1.17l-1.834.586-1.664-1.136c-.917-.62-2.207-1.308-2.887-1.515-1.732-.482-4.38-.413-5.943.138-4.245 1.55-6.928 5.542-6.622 9.915z"></path></svg>

export const IconLocationMap = ({ style = {}, size, color }) => <svg width={size} height={size} style={style} viewBox="0 0 49 48" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-287 -1776)" fill={color} fillRule="nonzero"><g id="Prato" transform="translate(48 1708)"><g id="Alerta-endereço" transform="translate(239 68)"><path d="M25 45C13 36.96 7 28.96 7 21c0-9.941 8.059-18 18-18s18 8.059 18 18c0 7.96-6 15.96-18 24zm0-16a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" id="Combined-Shape"></path></g></g></g></svg>

// Iconos
export const IconBuy = ({ style = {}, size, color }) => <svg width={size} height={size} style={style} fill={color} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"><path fillOpacity=".8" d="M7 0c2.062 0 3.733 1.678 3.733 3.748v.537h2.079L14 15H0L1.187 4.286l2.079-.001v-.537c0-2.003 1.566-3.64 3.536-3.743zm4.857 5.357H2.142l-.95 8.572h11.615l-.95-8.572zM7 1.071c-1.472 0-2.666 1.199-2.666 2.677l-.001.537h5.333v-.537c0-1.421-1.104-2.584-2.497-2.671z"></path>
</svg>
export const IconAccount = ({ style = {}, size, color }) => <svg width={size} height={size} style={style} fill={color} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
    <path fillOpacity=".8" d="M14.178 14.08c2 0 3.622 1.621 3.622 3.622v.6h-1.2v-.6c0-1.338-1.084-2.423-2.422-2.423H5.793c-1.327 0-2.403 1.076-2.403 2.403v.6h-1.2v-.6c0-1.99 1.613-3.603 3.603-3.603zM10 2.696c2.652 0 4.803 2.15 4.803 4.803 0 2.652-2.15 4.802-4.803 4.802-2.652 0-4.803-2.15-4.803-4.802 0-2.653 2.15-4.803 4.803-4.803zm0 1.2c-1.99 0-3.603 1.613-3.603 3.603 0 1.99 1.613 3.602 3.603 3.602 1.99 0 3.602-1.613 3.602-3.602 0-1.99-1.612-3.603-3.602-3.603z"></path>
</svg>
export const IconMessage = ({ style = {}, size, color }) =><svg width={size} height={size} style={style} fill={color} viewBox="-21 -86 682.66669 682" xmlns="http://www.w3.org/2000/svg"><path d="m627.5 199.402344c-6.90625 0-12.5 5.601562-12.5 12.5v44.546875c0 25.5625-20.800781 46.363281-46.363281 46.363281h-71.25c-3.316407 0-6.492188 1.3125-8.839844 3.65625l-86.378906 86.382812v-77.539062c0-6.90625-5.597657-12.5-12.5-12.5h-178.96875c-25.5625 0-46.363281-20.796875-46.363281-46.363281v-189.089844c0-25.5625 20.800781-46.359375 46.363281-46.359375h357.9375c25.5625 0 46.363281 20.796875 46.363281 46.359375v44.542969c0 6.90625 5.59375 12.5 12.5 12.5 6.898438 0 12.5-5.59375 12.5-12.5v-44.542969c0-39.347656-32.011719-71.359375-71.363281-71.359375h-357.9375c-39.351563 0-71.363281 32.011719-71.363281 71.359375v160.589844h-90.980469c-26.660157 0-48.355469 21.6875-48.355469 48.355469v115.1875c0 26.667968 21.695312 48.355468 48.355469 48.355468h38.230469l61.953124 61.957032c2.394532 2.394531 5.59375 3.664062 8.84375 3.664062 1.609376 0 3.238282-.3125 4.78125-.953125 4.671876-1.933594 7.71875-6.488281 7.71875-11.546875v-53.121094h96.523438c26.664062 0 48.355469-21.6875 48.355469-48.355468v-63.679688h62.40625v95.214844c0 5.058594 3.046875 9.613281 7.71875 11.546875 1.542969.640625 3.167969.953125 4.78125.953125 3.253906 0 6.449219-1.269532 8.839843-3.664063l104.054688-104.050781h66.074219c39.351562 0 71.363281-32.011719 71.363281-71.363281v-44.546875c0-6.898438-5.601562-12.5-12.5-12.5zm-337.734375 192.089844c0 12.882812-10.476563 23.355468-23.359375 23.355468h-109.023438c-6.90625 0-12.5 5.601563-12.5 12.5v35.445313l-44.28125-44.28125c-2.34375-2.34375-5.523437-3.664063-8.839843-3.664063h-43.40625c-12.878907 0-23.355469-10.472656-23.355469-23.355468v-115.1875c0-12.878907 10.476562-23.355469 23.355469-23.355469h90.980469v3.5c0 39.351562 32.011718 71.363281 71.363281 71.363281h79.066406zm0 0"/><path d="m511.542969 77.914062h-243.75c-6.902344 0-12.5 5.597657-12.5 12.5 0 6.90625 5.597656 12.5 12.5 12.5h243.75c6.902343 0 12.5-5.59375 12.5-12.5 0-6.902343-5.597657-12.5-12.5-12.5zm0 0"/><path d="m524.042969 157.917969c0-6.902344-5.597657-12.5-12.5-12.5h-243.75c-6.902344 0-12.5 5.597656-12.5 12.5 0 6.90625 5.597656 12.5 12.5 12.5h243.75c6.902343 0 12.5-5.59375 12.5-12.5zm0 0"/><path d="m267.792969 212.917969c-6.902344 0-12.5 5.597656-12.5 12.5 0 6.90625 5.597656 12.5 12.5 12.5h140.625c6.902343 0 12.5-5.59375 12.5-12.5 0-6.902344-5.597657-12.5-12.5-12.5zm0 0"/><path d="m627.5 149.402344c-6.882812 0-12.5 5.617187-12.5 12.5 0 6.886718 5.617188 12.5 12.5 12.5s12.5-5.613282 12.5-12.5c0-6.882813-5.617188-12.5-12.5-12.5zm0 0"/></svg>