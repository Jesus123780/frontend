import React, { useRef, useState } from 'react';
import { SliderItem, SliderContainer, SliderWrapper, Navigation, NavigationItem, ControlLeft, ControlRight, Image, Ruta } from './styled';
import { IconArrowLeft, IconArrowRight } from '../../../assets/icons/icons'
import { PColor } from '../../../assets/colors';
export const CustomSlider = props => {

    const { state, dispatch, duration, to } = props

    // useEffect(() => {
    //     window.setInterval(() => {
    //         if (!state?.currentIndex < state?.data?.length - 1) {
    //             dispatch({ type: 'NEXT' });
    //         }
    //         dispatch({ type: 'RESET' })
    //     }, 1000)
    // }, [])
    const div = useRef();
    const [activeArrow, setActiveArrow] = useState('none')
    return (
        <div>
            <SliderContainer onMouseOut={() => setActiveArrow(true)} onMouseOver={() => setActiveArrow(false)}>
                <SliderWrapper
                // 500ms
                    style={{
                        transform: `translateX(${ -(state?.currentIndex * div.current?.clientWidth) }px)`,
                        transition: `transform ${ duration } ease 0s`,
                    }}
                >
                    { state?.data && state?.data?.map((i, index) => {
                        return (
                            <Slide
                                div={div}
                                to={to}
                                key={i.id}
                                last={index === state?.data?.length - 1}
                                index={index}
                                item={i}
                                dispatch={dispatch}
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
                    <ControlLeft display={activeArrow} onClick={() => state?.currentIndex > 1 && dispatch({ type: 'PREV' })}><IconArrowLeft color={PColor} size={'20px'} /></ControlLeft>
                    <ControlRight display={activeArrow} onClick={() => state?.currentIndex < state?.data?.length - 1 ? dispatch({ type: 'NEXT' }) : dispatch({ type: 'RESET' })}><IconArrowRight color={PColor} size={'20px'} /></ControlRight>
                </div>
            </SliderContainer>
        </div>
    );
};

const Slide = ({ item, div, to }) => {
    return (
        <Ruta to={to} >
            <SliderItem ref={div} >
                <Image src={item?.image} alt={item?.image} />
            </SliderItem>
        </Ruta>
    );
};