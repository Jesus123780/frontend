import { useState, useEffect } from 'react'

export const useGoogleAddress = () => {
    const [map, SetMap] = useState({})
    const API = 'https://maps.googleapis.com/maps/api/geocode/json?address=barranquilla&key=AIzaSyCih9A0MFzGaM6EynW_5gQnTNiS0UWlR0E'
    // useEffect(async () => {
    //     const response = await API.
    // })
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(meta => {
                SetMap(meta)
            })
            .catch(() => {
                // eslint-disable-next-line
                console.log('Err')
            })
    }, [])
    alert(map)

}