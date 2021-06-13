import React, { useReducer } from 'react'
import { HeaderC } from '../HeaderStore'
import { Footer } from '../Footer'
import { CustomSlider } from './CustomSlider'
// import { PaymentData } from '../paymentData'
import { PaymentData } from '../BannerPayMethods'
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
        case 'Final':
            return {
                ...state,
                currentIndex: 3, currentPosition: 3,
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
            { id: 1, name: 'Slide 1', image: 'https://http2.mlstatic.com/D_NQ_966486-MLA46295117288_062021-OO.webp' },
            { id: 4, name: 'Slide 4', image: 'https://http2.mlstatic.com/D_NQ_922391-MLA46294809949_062021-OO.webp' },
            { id: 5, name: 'Slide 5', image: 'https://http2.mlstatic.com/D_NQ_790427-MLA46295213143_062021-OO.webp' },
        ]
    }
    );
    // const price = 120000645645
    return (
        <>
            <HeaderC />
            <main style={{ backgroundColor: '#e9e9e9e3' }}>
                <CustomSlider state={state} dispatch={dispatch}>
                </CustomSlider>
                <Container>
                    {/* <PaymentData /> */}
                    <PaymentData />
                    {/* <span bold>{price && `$ ${ numberFormat(price) }` } </span> */}
                </Container>
            </main>
            <Footer />
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