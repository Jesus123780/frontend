import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import { RippleButton } from '../../Ripple'
import mapStyle from './mapStyles'
import { IconArrowLeft } from '../../../assets/icons/icons'
import { PColor } from '../../../assets/colors'
import { useGoogleAddress } from '../../../components/hooks/useGoogleAddress'

// import { Card, Div, Span, Text, IMG } from './styled'

export const Map = () => {
    // const [showInfo, setShowInfo] = useState(false)
    // const [dataMap, setDataMap] = useState({})
    // const handleClick = x => {
    //     setShowInfo(true)
    //     setDataMap(x)
    // }
    const mapContainerStyle = {
        height: '40vh',
        width: '100%',
    }
    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: false
    }
    const defaultCenter = {
        lat: 10.993983961451658,
        lng: -74.81786794905953,
    }
    // eslint-disable-next-line
    const [map, setMap] = useState(null)
    const [handleDrag, setHandelDrag] = React.useState(0)
    // eslint-disable-next-line
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    const [markers, setMarkers] = React.useState([]);

    return (<Container >
        <useGoogleAddress />
        <MapHeader><IconArrowLeft size={20} color={PColor} /><div>Et que pasa</div><div>Null</div></MapHeader>
        <LoadScript googleMapsApiKey='AIzaSyCih9A0MFzGaM6EynW_5gQnTNiS0UWlR0E'>
            <GoogleMap ondragstart={() => setHandelDrag(1)} ondragend={() => setHandelDrag(0)}
                draggable
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={defaultCenter}
                onLoad={onLoad}
                options={options}
                onMouseOut={e =>{
                    setMarkers(current => [...current, {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        time: new Date(),
                    }])
                }}
            >
                {handleDrag === 0 &&
                    <Marker ondragstart={() => setHandelDrag(1)} ondragend={() => setHandelDrag(0)}
                        position={defaultCenter}
                    />
                }
                <h1>{markers[0]?.lat}</h1>
            </GoogleMap>
            {handleDrag === 0 && <ContentButton>
                <RippleButton style={{ width: '40%' }} onClick={() => setMap(0)}>Confirmar</RippleButton>
            </ContentButton>}
        </LoadScript>
    </Container>
    )
}

Map.propTypes = {
    google: PropTypes.func
}
const Container= styled.div`
    position: relative;
`
const MapHeader= styled.div`
    padding: 30px;
    width: 100%;
    display: grid;
    top: 0;
    left: 0;
    grid-template-columns: 50px 1fr 50px;
    padding: 27px 20px;
    background: linear-gradient(
    0deg
    , rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.8) 25%, white 100%);
`
const ContentButton= styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
`