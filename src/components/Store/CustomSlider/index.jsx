import React, { useState, useEffect } from 'react';
import { SliderItem, SliderContainer, SliderWrapper, Navigation, NavigationItem, ControlLeft, ControlRight, Image } from './styled';
import { IconArrowLeft, IconArrowRight } from '../../../assets/icons/icons'
import { PColor } from '../../../assets/colors';
export const CustomSlider = props => {
    const { state, dispatch } = props
    console.log(props)
    function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        });
        return width;
    }
    const width = useWindowWidth();
    // useEffect(() => {
    //     window.setInterval(() => {
    //         if (state?.currentIndex <= state?.data?.length - 1) {
    //             dispatch({ type: 'NEXT' });
    //         } else dispatch({ type: 'RESET' });
    //     }, 1000)
    // }, [])
    return (
        <div>
            <SliderContainer>
                <SliderWrapper width={width * state?.data}
                    style={{
                        transform: `translateX(${ -(state?.currentIndex * width) }px)`,
                        transition: 'transform 500ms ease 0s',
                        width: `${ width * state?.data?.length }px`
                    }}
                >
                    { state?.data && state?.data?.map((i, index) => {
                        return (
                            <Slide
                                key={i.id}
                                last={index === state?.data?.length - 1}
                                index={index}
                                item={i}
                                dispatch={dispatch}
                                snap={state.snap}
                                width={width}
                            />
                        );
                    })}
                </SliderWrapper>
                <Navigation>
                    {state.data && state.data.map((i, index) => {
                        return (
                            <NavigationItem
                                active={index === state?.currentIndex}
                                onClick={() => dispatch({ type: 'GOTO', index })} key={`nav${ i.id }`}>
                            </NavigationItem>
                        );
                    })}
                </Navigation>
                <div>
                    <ControlLeft onClick={() => state?.currentIndex > 1 ? dispatch({ type: 'PREV' }) : dispatch({ type: 'Final' })}><IconArrowLeft color={PColor} size={'20px'} /></ControlLeft>
                    <ControlRight onClick={() => state?.currentIndex < state?.data?.length - 1 ? dispatch({ type: 'NEXT' }) : dispatch({ type: 'RESET' })}><IconArrowRight color={PColor} size={'20px'} /></ControlRight>
                </div>
            </SliderContainer>
        </div>
    );
};

const Slide = ({ item, width }) => {
    return (
        <SliderItem width={width}>
            <Image src={item?.image} alt={item?.image} />
        </SliderItem>
    );
};