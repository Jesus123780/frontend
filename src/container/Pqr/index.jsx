import { useQuery } from '@apollo/client'
import React from 'react'
import { Pqr } from '../../components/PQR'
import { GET_ALL_PQR } from '../../gql/Pqr'
export const PQRC = () => {
    const { data } = useQuery(GET_ALL_PQR)
    return (
        <>
            <Pqr
                pqr={data?.pqr}
            />
        </>
    )
}