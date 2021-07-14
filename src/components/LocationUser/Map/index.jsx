import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import { RippleButton } from '../../Ripple'
import mapStyle from './mapStyles'
import { IconArrowLeft } from '../../../assets/icons/icons'
import { PColor } from '../../../assets/colors'
import { useGoogleAddress } from '../../hooks/useGoogleAddress'
import { Span } from './styled'

export const Map = props => {
    const { setShowCard, showCard, setAnimationTrans, animationTrans } = props
    const mapContainerStyle = {
        height: '60vh',
        width: '100%',
        position: 'absolute'
    }
    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: false,

    }
    const defaultCenter = {
        lat: 10.999881951815418,
        lng: -74.80783927407826,
    }
    // eslint-disable-next-line
    const [map, setMap] = useState(null)
    // const [handleDrag, setHandelDrag] = React.useState(0)
    // eslint-disable-next-line
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    const [markers, setMarkers] = React.useState([]);
    const onMapClick = React.useCallback(e => {
        setMarkers(() => [{
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
        },
        ]);
    });
    const handleSave =() =>{
        setAnimationTrans(!animationTrans)
    }
    return (<Container >
        <useGoogleAddress />
        <MapHeader>
            <button style={{ backgroundColor: 'transparent' }} onClick={() => setShowCard(!showCard)} >
                <IconArrowLeft size={20} color={PColor} />
            </button>
            <Span>{markers[0]?.lat}</Span><div></div>
        </MapHeader>
        <LoadScript googleMapsApiKey='AIzaSyDoZxcY8aH7fBFEa-O51yJj_GpJ35r1pf4'>
            <GoogleMap /* onDragStart={() => setHandelDrag(0)} onDragEnd={() => setHandelDrag(1)} */
                mapContainerStyle={mapContainerStyle}
                zoom={19}
                onLoad={onLoad}
                options={options}
                onClick={onMapClick}
                center={defaultCenter}
            >
                <Marker
                    position={!defaultCenter ? defaultCenter : { lat: markers[0]?.lat, lng: markers[0]?.lng }}
                />
            </GoogleMap>
            {1 === 1 && <ContentButton>
                <RippleButton style={{ width: '40%' }} onClick={handleSave}>Confirmar</RippleButton>
            </ContentButton>}
        </LoadScript>
    </Container>
    )
}

Map.propTypes = {
    google: PropTypes.func
}
const Container = styled.div`
    position: relative;
`
const MapHeader = styled.div`
    padding: 30px;
    width: 100%;
    display: grid;
    top: 0;
    left: 0;
    position: absolute;
    grid-template-columns: 50px 1fr 50px;
    padding: 27px 20px;
    z-index: 9999;
    background: linear-gradient(
    0deg
    , rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.8) 25%, white 100%);
`
const ContentButton = styled.div`
    width: 100%;
    position: absolute;
    margin: auto;
    display: flex;
    justify-content: center;
    z-index: 99999;
    bottom: -550px;
`