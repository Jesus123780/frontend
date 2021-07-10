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
    const [showPap, setMap] = useState(false)
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

        <ContentForm showPap={showPap} actionPadding={showCard === 1 ? '30px' : '0'}>
            <Form>
                <Title>¿Donde quieres recibir tu pedido?</Title>
                <NewSelect disabled={!data?.countries[0]?.c_id} options={data?.countries.filter(x => x?.c_name === x?.c_name) || []} id='c_id' name='c_id' value={values?.c_id || ''} optionName='c_name' title='País' onChange={handleChange} margin='10px' />
                <NewSelect search disabled={!dataD?.departments[0]?.c_id} options={dataD?.departments?.filter(x => x?.d_name === x?.d_name) || []} id='d_id' name='d_id' value={values?.d_id || ''} optionName='d_name' title='Departamento' onChange={handleChange} margin='10px' />
                <NewSelect search disabled={!dataMunicipalities?.getMunicipalities[0]?.d_id} options={dataMunicipalities?.getMunicipalities?.filter(x => x?.m_name === x?.m_name) || []} id='m_id' name='m_id' value={values?.m_id || ''} optionName='m_name' title='Cuidad' onChange={handleChange} margin='10px' />
                <InputHooks name="actualPassword"
                    value={values?.actualPassword}
                    errors={values?.actualPassword}
                    onChange={handleChange}
                    title="Tu ubicación como la conoces"
                    required
                />
            </Form>
            <ContentButton>
                <RippleButton onClick={() => handleClick(5)}>Regresar</RippleButton>
                <RippleButton onClick={() => setMap(!showPap)} >Buscar</RippleButton>
            </ContentButton>
        </ContentForm>
        <ContentMap setShowCard={setShowCard} showPap={showPap}>
            <Map setShowCard={setShowCard} showCard={showCard} />
        </ContentMap>
    </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción
const ContentForm = styled.div`
    background-color: transparent;
    width: 100%;
    display: grid;
    ${ ({ actionPadding }) => actionPadding && css`padding: ${ actionPadding };` }
    ${ ({ showPap }) => showPap
        ? css`  
          display: none;
              `
        : css`
        display: block;
              ` }
`
const ContentButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    
`
const ContentMap = styled.div`
${ ({ showPap })=> showPap ? css`
transform: translateX(0%);
    transition: opacity ease 300ms;
    opacity: 1;
` : css`
    transform: translateX(100%);
    opacity: 0;
    transition: opacity 1ms ease 300ms 300ms, transform 300ms ease 300ms;
` }
`
const Form = styled.form`
`