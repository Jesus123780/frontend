import React, { useState } from 'react';
import styled from 'styled-components';
import NewSelect from '../NewSelectHooks/NewSelect'
import { useQuery } from '@apollo/client'
import { Map } from './Map'
import { RippleButton } from '../Ripple'
import { GET_COUNTRY, GET_DEPARTMENT, GET_MUNICIPALITIES } from './queries';

export const LocationForm = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [Maps, setMap] = useState(0)
    const handleChange = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
    }
    const { data } = useQuery(GET_COUNTRY)
    const { data: dataD } = useQuery(GET_DEPARTMENT)
    const { data: dataMunicipalities } = useQuery(GET_MUNICIPALITIES)
    return (<>
        <ContentForm>
            {Maps === 0 ? <Map />
                :<>
                    <NewSelect disabled={!data?.countries[0]?.c_id} options={data?.countries.filter(x => x?.c_name === x?.c_name) || []} id='c_id' name='c_id' value={values?.c_id || ''} optionName='c_name' title='País' onChange={handleChange} margin='10px' />
                    <NewSelect search disabled={!dataD?.departments[0]?.c_id} options={dataD?.departments.filter(x => x?.d_name === x?.d_name) || []} id='d_id' name='d_id' value={values?.d_id || ''} optionName='d_name' title='Departamento' onChange={handleChange} margin='10px' />
                    <NewSelect search disabled={!dataMunicipalities?.getMunicipalities[0]?.d_id} options={dataMunicipalities?.getMunicipalities.filter(x => x?.m_name === x?.m_name) || []} id='m_id' name='m_id' value={values?.m_id || ''} optionName='m_name' title='Cuidad' onChange={handleChange} margin='10px' />
                    <ContentButton>
                        <RippleButton onClick={() => setMap(0)}>Regresar</RippleButton>
                        <RippleButton onClick={() => setMap(1)} >Buscar</RippleButton>
                    </ContentButton>
                </>
            }
        </ContentForm>
    </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción
const ContentForm = styled.div`
    background-color: transparent;
    width: 100%;
    display: grid;
`
const ContentButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`