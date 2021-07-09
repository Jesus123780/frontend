import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import NewSelect from '../NewSelectHooks/NewSelect'
import { useQuery } from '@apollo/client'
import { Map } from './Map'
import { RippleButton } from '../Ripple'
import { Title } from './styled'
import InputHooks from '../InputHooks/InputHooks'
import { GET_COUNTRY, GET_DEPARTMENT, GET_MUNICIPALITIES } from './queries';

export const LocationForm = props => {
    const { setShowCard, showCard, handleClick } = props
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const handleChange = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
    }
    const { data } = useQuery(GET_COUNTRY)
    const { data: dataD } = useQuery(GET_DEPARTMENT)
    const { data: dataMunicipalities } = useQuery(GET_MUNICIPALITIES)
    return (<>
        <ContentForm actionPadding={showCard === 1 ? '30px' : '0' }>
            {showCard !== 1 &&
                <ContentMap>
                    <Map setShowCard={setShowCard} showCard={showCard} />
                </ContentMap>
            }
            <Form>
                <Title>¿Donde quieres recibir tu pedido?</Title>
                <NewSelect disabled={!data?.countries[0]?.c_id} options={data?.countries.filter(x => x?.c_name === x?.c_name) || []} id='c_id' name='c_id' value={values?.c_id || ''} optionName='c_name' title='País' onChange={handleChange} margin='10px' />
                <NewSelect search disabled={!dataD?.departments[0]?.c_id} options={dataD?.departments.filter(x => x?.d_name === x?.d_name) || []} id='d_id' name='d_id' value={values?.d_id || ''} optionName='d_name' title='Departamento' onChange={handleChange} margin='10px' />
                <NewSelect search disabled={!dataMunicipalities?.getMunicipalities[0]?.d_id} options={dataMunicipalities?.getMunicipalities.filter(x => x?.m_name === x?.m_name) || []} id='m_id' name='m_id' value={values?.m_id || ''} optionName='m_name' title='Cuidad' onChange={handleChange} margin='10px' />
                <InputHooks name="actualPassword"
                    value={values?.actualPassword}
                    errors={values?.actualPassword}
                    onChange={handleChange}
                    title="Tu ubicación como la conoces"
                    required
                />
                <ContentButton>
                    <RippleButton onClick={() => handleClick(1)}>Regresar</RippleButton>
                    <RippleButton onClick={() => handleClick(3)} >Buscar</RippleButton>
                </ContentButton>

            </Form>
        </ContentForm>
    </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción
const ContentForm = styled.div`
    background-color: transparent;
    width: 100%;
    display: grid;
    ${ ({ actionPadding })=> actionPadding && css`padding: ${ actionPadding };` }
`
const ContentButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    
`
const ContentMap = styled.div`
    position: absolute;
    top: 80px;
    transform: translateY(500px);
`
const Form = styled.form`
    height: 60vh;
`