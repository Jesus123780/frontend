// import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState }/* , { useState } */ from 'react'
import { DropdownMenu } from '../../dropdown-menu';
import useFullscreenMode from '../../hooks/useFullScreenMode';
// import { InputTags } from '../InputTagsOne';
import { Rate } from '../../Rate';
import { numberFormatM } from '../../../utils';
import { Context } from '../../../Context'

export const TermsAndConditions = () => {
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
        setAlertBox({ message: 'Temrmns', duration: 20000, color: 'red' })
    }, [])
    return (
        <div ref={elementRef}>
            <DropdownMenu show={visibleMenu} position={positionMenu} onClickOutside={() => setVisibleMenu(false)} options={[
                { optionName: 'Trasladar' },
                { optionName: 'cortar' },
            ]} />
            <button onClick={() => handleMenu(!positionMenu)}>
                onClick</button>
            {/* <InputTags onChange={() => setVisibleMenu(false)} /> */}
            <div ref={elementRef} >
                <div>
                    {FullscreenIcon}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Rate rating={rating} onRating={rate => setRating(rate)} />
            </div>
            <p>{numberFormatM(11000000)}</p>
            <div>
                <h1>Contact</h1>
                <h1>Contact</h1>
            </div>
        </div>
    )
}