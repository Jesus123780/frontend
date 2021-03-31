import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/search-bg.png'
export const SectionInfo = () => {
    return (
        <Container>
            <ContainerFluid>
                <BannerWrapper>
                    <Text>Search Doctor, Make an Appointment</Text>
                    <Paragraph>Discover the best doctors, clinic & hospital the city nearest to you.</Paragraph>
                </BannerWrapper>
                <SearchBox>
                    <input type='text' placeholder='SearchBox' />
                    <input type='text' placeholder='SearchBox' />
                    <button>Icon</button>
                </SearchBox>
            </ContainerFluid>
        </Container>
    )
}
const Container = styled.div`
    background-image: url(${ bg });
    background-repeat: no-repeat;
    background-position: bottom center;
    min-height: 450px;
    background-size: 100% auto;
    position: relative;
    background-blend-mode: Darken;
    padding: 80px 0;
`
const ContainerFluid = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`
const BannerWrapper = styled.div`
    margin: 0 auto;
    max-width: 850px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`
const SearchBox = styled.div`
    margin: 0 auto;
    max-width: 850px;
    display: flex;
     flex-direction: row;
    width: 100%;
    & > input {
        padding: 15px;
    }
`
const Text = styled.h1`
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 600;
`
const Paragraph = styled.p`
    color: #757575;
    font-size: 20px;
    margin-bottom: 0;
`