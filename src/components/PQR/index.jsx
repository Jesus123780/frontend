import React, { useContext, useEffect, useState } from 'react'
import { DropdownMenu } from '../dropdown-menu';
import { Container/* , Card  */, Title, Paragraph, ContentPqr, ListItem, CatPqrName, Icon } from './styled';
import useFullscreenMode from '../hooks/useFullScreenMode';
import { Rate } from '../Rate';
import { Context } from '../../Context'
import { IconArrowRight } from '../../assets/icons/icons';
import { PLColor } from '../../assets/colors';
import { icons } from '../../container/Pqr/codeIcon';
import { Link } from 'react-router-dom';

export const Pqr = ({ pqr, loading }) => {
    const [visibleMenu, setVisibleMenu] = useState(false) // Visibilidad del menú
    const [positionMenu, setPositionMenu] = useState({})
    const handleMenu = (e, param) => {
        setPositionMenu({ x: e.pageX - (param || 0), y: e.pageY })
        setVisibleMenu(true)
    }
    const [elementRef, FullscreenIcon] = useFullscreenMode();
    const [rating, setRating] = useState(0);
    const { setAlertBox } = useContext(Context)
    useEffect(() => {
        setAlertBox({ message: '', duration: 20000, color: 'red' })
    }, [])
    return (
        <Container ref={elementRef}>
            {loading && 'cargando' }
            <DropdownMenu show={visibleMenu} position={positionMenu} onClickOutside={() => setVisibleMenu(false)} options={[
                { optionName: 'Trasladar' },
                { optionName: 'cortar' },
            ]} />
            <button onClick={() => handleMenu(!positionMenu)}>
                onClick</button>
            <div ref={elementRef} >
                <div>
                    {FullscreenIcon}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Rate rating={rating} onRating={rate => setRating(rate)} />
            </div>
            <Container>
                <Title>Preguntas Frecuentes </Title>
                <Paragraph>Preguntas Frecuentes</Paragraph>
                { pqr && pqr?.map(x => <ContentPqr key={x?.hpqrId}>
                    {/* eslint-disable-next-line */}
                    <Link to={`/ayuda/item/${x.typepqr.thpName}/${x.typepqr.thpId} `}>
                        <ListItem>
                            <div style={{ display: 'flex' }}>
                                {/* eslint-disable-next-line */}
                                <Icon><Options icon={icons.find(j => j.typepqr == x.typepqr?.thpIcon)?.icon} /></Icon>
                                <CatPqrName>{x.typepqr?.thpName}</CatPqrName>
                            </div>
                            <Icon left><IconArrowRight size="14px" color={PLColor} /></Icon>
                        </ListItem>
                    </Link>
                </ContentPqr>)}
            </Container>
        </Container>
    )
}

const Options = ({ icon }) => {

    return (
        <React.Fragment>
            <div>
                {icon}
            </div>
        </React.Fragment>
    )
}