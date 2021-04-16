import styled, { css } from 'styled-components'

// Contenedores
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 10px 0;
    @media (max-width:  991.98px) {
        padding: 7px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`
export const BreadcrumbBar = styled.div`
    background-color: #15558d;
    padding: 15px 0;
`
export const ContentBar = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
`
export const ColContain = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: 20px;
    @media only screen and (max-width: 991.98px) {
        width: 100%;
        margin: 0;
        margin-left: 0px;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    border: 1px solid #f0f0f0;
    margin-bottom: 1.875rem;
    background-color: ${ ({ theme }) => theme.BGAColor };
    justify-content: space-between;
    @media only screen and (max-width: 993px) {
        flex-direction: column;
        text-align: center;
    }
`
export const TableResponsive = styled.div`
    display: block;
    flex-direction: column;
    border: 1px solid ${ ({ theme }) => theme.PLColor };
    background-color: ${ ({ theme }) => theme.BGAColor };
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
`
export const TabsTable = styled.div`
    background-color: ${ ({ theme }) => theme.BGAColor };
    padding: 1.5rem;
`
export const DashWidget = styled.div`
    align-items: center;
    display: flex;
    width: 33.33%;
    justify-content: center;
    border-right: 1px solid ${ ({ theme })=> `${ theme.SFColor }88` };
    &:last-child {
        border-right: none;
    }
    @media only screen and (max-width: 1199px) {
        flex-direction: column;
        text-align: center;
    }
    @media only screen and (max-width: 991.98px) {
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 20px;
        padding: 10px 0px;
        border-right: none;
        flex-direction: unset;
        text-align: left;
        &:last-child {
            border-bottom: none;
        }
    }
`
export const CircleGraph = styled.div`
    width: 90px;
    height: 90px;
    min-width: 90px;
    border-radius: 50%;
    background-color: gray;
`
export const DashWidgetInfo = styled.div`
    margin-left: 10px;
`
// Textos
export const ParagraphInfo = styled.p`
    color: ${ ({ theme }) => theme.SFSColor };
    font-size: 13px;
    margin: 0;
`
export const Text = styled.h3`
    color: ${ ({ color, theme }) => color === '1' ? theme.SFColor : theme.SFColor };
    font-size: ${ ({ size }) => (size ? size : '16px') };
    margin: ${ ({ margin }) => (margin ? margin : '0px') };
    ${ ({ weight }) => weight &&
        css`
            font-weight: ${ weight };
        ` };
    line-height: 1.5;
`
export const BreadcrumbTitle = styled.h2`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    margin: 5px 0 0;
    @media only screen and (max-width: 767.98px) {
        font-size: 18px;
        color: #fff;
    }
`

// Listas
export const Breadcrumb = styled.ol`
    background-color: transparent;
    font-size: 12px;
    margin-bottom: 0;
    padding: 0 15px;
`
export const Li = styled.li`
    display: flex;
    text-decoration: none;
`
export const Anchor = styled.a`
    color: #fff;
    text-decoration: none;
`
export const BtnTabs = styled.button`
    border: none;
    border-radius: 20px;
    background-color: ${ props => (!props.bgColor ? 'transparent' : '#20c0f3') };
    color: ${ props => (props.bgColor ? '#FFF' : '#272b41') };
    padding: 0.5rem 1rem;
    outline: none;
    ${ ({ bgColor }) => !bgColor &&
        css`
            &:hover {
                background-color: #f5f5f5;
            }
        ` }
`
// tabla
export const Table = styled.table`
    color: #272b41;
    max-width: 100%;
    margin-bottom: 0;
    width: 100%;
    border-collapse: collapse;
`
export const Thead = styled.thead`
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    text-align: center;
`
export const Tbody = styled.tbody`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #e2e5e8;
`
export const Tr = styled.tr`
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
    &:hover {
        background-color:  ${ ({ theme }) => theme.BGColor };
    }
`
export const Th = styled.th`
    padding: 1rem 1.6rem;
    white-space: nowrap;
    text-align: center;
    color: ${ ({ theme }) => theme.SFColor };
    font-size: 14px;
    width: 20%;
    display: flex;
    justify-content: center;
    &:last-child{
        width: 30%;
    }
}


`
export const Td = styled.td`
    padding: 1rem 0.75rem;
    white-space: nowrap;
    text-align: start;
    color: ${ ({ color, theme }) => color === '1' ? theme.SFColor : theme.SFColor };
    font-size: ${ ({ size }) => (size ? size : '14px') };
`
export const ContainerBtn = styled.div`
    display: flex;
`
export const ButtonOption = styled.button`
    outline: none;
    color: ${ ({ color }) => color === '1' ? ' #1db9aa ' : color === '2' ? '#26af48' : '#e63c3c' };
    background-color: ${ ({ bgColor }) => bgColor === '1'
        ? ' rgba(2, 182, 179,0.12)'
        : bgColor === '2'
            ? 'rgba(15, 183, 107,0.12)'
            : 'rgba(242, 17, 54,0.12)' };
    border: none;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    margin: 0px 4px;
`
export const TdCenter = styled.td`
    text-align: center;
    color: ${ ({ theme })=> theme.SFColor };
    font-size: 14px;;
`
// Avatar TD
export const Avatar = styled.li`
    align-items: center;
    display: inline-flex;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    white-space: nowrap;
`

export const AvatarContentImg = styled.a`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 10px;
`
export const ImgAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`
export const TextInfo = styled.span`
    color: ${ ({ color, theme }) => color === '1' ? theme.SFColor : theme.SFColor };
    font-size: ${ ({ size }) => (size ? size : '14px') };
    display: block;
    margin-top: 3px;
    &:hover {
        color: ${ ({ theme }) => theme.SFAColor };
        transition: 0.5s;
        cursor: pointer;
    }
`
export const HourText = styled.span`
    color: ${ ({ theme }) => theme.PColor };
`
export const ContainerInfo = styled.a`
    display: flex;
    flex-direction: column;
`
