import React, { useReducer } from 'react'
import { CustomSlider } from './CustomSlider'
import { PaymentData } from '../paymentData'
import styled from 'styled-components'

export const Index = () => {
    function reducer(state, action) {
        switch (action?.type) {
        case 'NEXT':
            return {
                ...state,
                currentIndex: state?.currentIndex + (1 % state?.data?.length),

            };
        case 'PREV':
            return {
                ...state,
                currentIndex: state?.currentIndex - (1 % state?.data?.length)
            };
        case 'GOTO':
            return {
                ...state,
                currentIndex: action?.index
            };
        case 'RESET':
            return { ...state, currentIndex: 0, currentPosition: 0, };

        default:
            return { state };
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        currentIndex: 0,
        data: [
            { id: 1, name: 'Slide 5', image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1624553812377-home-sliderdesktop2x.jpg' },
            { id: 2, name: 'Slide 5', image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1624555002140-home-sliderdesktop2x.jpg' },
            { id: 3, name: 'Slide 5', image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1624555002140-home-sliderdesktop2x.jpg' },
            { id: 4, name: 'Slide 5', image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1624555002140-home-sliderdesktop2x.jpg' },

        ]
    }
    );
    return (
        <>
            <CustomSlider autoPlayTime={4000} state={state} dispatch={dispatch} duration={'500ms'} to={{ pathname: `/${ state.data.id || state.cs_id || state.scs_id ? 'servicios' : 'productos' }/categorias/${ state?.categoryproduct?.cp_id || state?.categoryservice?.cs_id || state.uscs_id || state.uscp_id || state?.cp_id || state?.cs_id }`
            }} >
            </CustomSlider>
            <Container>
                <PaymentData />
            </Container>
        </>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    margin: auto auto 40px;
    max-width: 1200px;
`