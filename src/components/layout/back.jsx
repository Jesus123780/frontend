import React from 'react'
import PropTypes from 'prop-types'
import { Container, Footer } from './Styled'
import styled from 'styled-components'
const Back = ({ children }) => {
    return (<>
        <MainNav>
            <ContainerNav>
                <ContainerLogo>
                    <Logo>
                        <ImgLogo src='https://doccure-html.dreamguystech.com/template/assets/img/logo.png' />
                    </Logo>
                </ContainerLogo>
                <HasSubMenu>
                    <a href="#">Home</a>
                    <SubMenu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home slider 2</a></li>
                    </SubMenu>
                </HasSubMenu>
                <HasSubMenu>
                    <a href="#">Home</a>
                    <SubMenu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home slider 2</a></li>
                    </SubMenu>
                </HasSubMenu>
                <HasSubMenu>
                    <a href="#">Home</a>
                    <SubMenu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home slider 2</a></li>
                    </SubMenu>
                </HasSubMenu>
                <HasSubMenu>
                    <a href="#">Home</a>
                    <SubMenu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home slider 2</a></li>
                    </SubMenu>
                </HasSubMenu>
                <HasSubMenu>
                    <a href="#">Home</a>
                    <SubMenu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home slider 2</a></li>
                    </SubMenu>
                </HasSubMenu>
                <HasSubMenu>
                    <a href="#">Home</a>
                    <SubMenu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home slider 2</a></li>
                    </SubMenu>
                </HasSubMenu>
                <HasSubMenu>
                    <a href="#">Doctors</a>
                    <SubMenu>
                        <li><a href="#">Doctor Register</a></li>
                        <HasSubMenu>
                            <a href="#">Blog</a>
                            <SubMenu>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Blog view</a></li>
                                <li><a href="#">Blog view</a></li>
                                <li><a href="#">Blog view</a></li>
                                <li><a href="#">Blog view</a></li>
                                <li><a href="#">Blog view</a></li>
                                <li><a href="l">Add Blog</a></li>
                            </SubMenu>
                        </HasSubMenu>
                    </SubMenu>
                </HasSubMenu>
            </ContainerNav>
            <ContainerBtn>
                <Logo>
                    <NavLink href="#">login / Signup </NavLink>
                </Logo>
                <Logo>
                    <NavLink href="#">login / Signup </NavLink>
                </Logo>
            </ContainerBtn>
        </MainNav>
        <Container>
            <body>
                {children}
                <Footer>
                </Footer>
            </body>
        </Container></>
    )
}
const SubMenu = styled.ul`
& > li > a:hover{
    color: #09dca4;
    letter-spacing: 0.5px;
    margin-left: 10px;
}
`
const HasSubMenu = styled.li``
const NavLink = styled.a`
    border: 2px solid #09e5ab;
    border-radius: 4px;
    padding: 10px 15px !important;
    text-align: center;
    font-size: 15px;
    color: #09e5ab;
    text-transform: uppercase;
    font-weight: 500;
    &:hover{
        background-color: #09e5ab;
        border-color: #09e5ab;
        color: #fff;
    }
`
const ContainerNav = styled.div`
    padding: 0 30px;
    display: flex;
    width: 100%;
    align-self: center;
    & > li ${ SubMenu } li a{
        display: block;
    padding: 10px 15px;
    clear: both;
    white-space: nowrap;
    font-size: 14px;
    color: #2d3b48;
    transition: all .35s ease;
	width: 100%;
	border-top: 1px solid #f0f0f0;
 
    }
    @media (min-width: 900px) {
        & > li {
		margin-right: 30px;
	}
    &> li:last-child {
		margin-right: 0;
	}
    &  li {
		display: block;
		position: relative;
	}
    &  > li > a {
		line-height: 85px;
		padding: 0 !important;
	}
    & > li > a > i {
		font-size: 12px;
		margin-left: 3px;
	}
    & li > ul {
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 3px  rgba(0, 0, 0, 0.1);
		display: block;
		font-size: 14px;
		left: 0;
		margin: 0;
		min-width: 200px;
		opacity: 0;
		padding: 0;
		position: absolute;
		transition: all .2s ease;
		transform: translateY(20px);
		top: 100%;
		visibility: hidden;
		z-index: 1000;
	}
    &  ${ SubMenu }::before {
		border: 7px solid #fff;
		border-color: transparent transparent #fff #fff;
		box-shadow: -2px 2px 2px -1px rgba(0, 0, 0, 0.1);
		content: "";
		left: 45px;
		position: absolute;
		top: 2px;
		transform-origin: 0 0;
		transform: rotate(135deg);
	}
     && ${ HasSubMenu }:hover > ${ SubMenu } {
		visibility: visible;
		opacity: 1;
		margin-top: 0;
		transform: translateY(0);
	}
    &  > li ${ SubMenu } > li ${ SubMenu } {
		left: 100%;
		top: 0;
		margin-top: 10px;
	}
    & >  ${ HasSubMenu } > ${ SubMenu } > ${ HasSubMenu } > ${ SubMenu }::before {
        top: 20px;
        margin-left: -35px;
        box-shadow: 1px 1px 0 0 rgb(0 0 0 / 15%);
        border-color: transparent #fff #fff transparent;
    }
    }

`
const ImgLogo = styled.img`
    max-width: 100%;
    height: auto;
`
const MainNav = styled.nav`
    background-color: #fff;
    padding: 0 30px;
	border-bottom: 1px solid #f0f0f0;
    display: flex;
    height: 85px;
    list-style: none;
    margin: 0;
    padding: 0;
    
    
`
const Logo = styled.a`
    display: inline-block;
    margin-right: 30px;
    width: 160px;
`
const ContainerLogo = styled.a`
    margin:auto;
`
const ContainerBtn = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
// const HeaderNavbarRht = styled.ul`
//     margin: 0;
//     margin-left: auto;
//     padding: 0;
// `
Back.propTypes = {
    onClick: PropTypes.func
}

export default Back