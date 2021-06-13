import styled, { css } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  background: #fafafa;
  overflow: hidden;
  width: 100%;
  height: ${ props => props.height || 'auto' };

`;

export const SliderWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${ props => `${ props.width }px` || '100%' };

`;

export const SliderItem = styled.div`
  position: relative;
  width: ${ props => `${ props.width }px` || '100%' };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const Navigation = styled.ul`
  position: absolute;
  bottom: 10px;
  margin: 0;
  padding: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const NavigationItem = styled.li`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    transition: .5s ease;
    margin-left: 20px;
    background-color: #c0c0c0f6;
  ${ props => props.active &&
    css`
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #ffffff;
    ` };
`;

export const Control = styled.button`
    position: absolute;
    top: 50%;
    align-items:center;
    width: 40px;
    height: 40px;
    padding: 0;
    transform: translate(0, -50%);
    box-shadow: 1px 6px 14px rgb(0 0 0 / 20%);
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
    justify-content: center;
    display: flex;
    border-radius: 4px;
    height: 80px;
    &:disabled{
        opacity: 59%;
        background-color:#b4b4b4;
    }
`;

export const ControlLeft = styled(Control)`
  left: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

`;
export const ControlRight = styled(Control)`
  right: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

export const BigElement = styled.div`
  min-height: 1000px;
  background: #61dafb;
  width: 30px;
`;
export const Image = styled.img`
  height: auto;
  min-height: auto;
  max-width: 1600px !important;
  flex: 0 0 auto;
  object-fit: cover;
  
`;