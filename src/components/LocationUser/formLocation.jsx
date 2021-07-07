import React, { useState } from 'react';
import styled from 'styled-components';
import NewSelect from '../NewSelectHooks/NewSelect'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY, GET_DEPARTMENT, GET_MUNICIPALITIES } from './queries';

export const LocationForm = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    // const handleChange = (e, error) => {
    //     setValues({ ...values, [e.target.name]: e.target.value })
    //     setErrors({ ...errors, [e.target.name]: error })
    // }
    const { data } = useQuery(GET_COUNTRY)
    const { data: dataD } = useQuery(GET_DEPARTMENT)
    const { data: dataMunicipalities } = useQuery(GET_MUNICIPALITIES)
    const country = data?.countries?.find(x => x.c_id === values.c_id)
    const deparment = dataD?.departments.find(x => x.d_id === values.d_id)
    const municipality = dataMunicipalities?.getMunicipalities.find(x => x.m_id === values.m_id)
    console.log('Pais', country)
    console.log('departamentos', deparment)
    console.log('Municipio', municipality)
    const handleChange = async (v, id, e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
        this.setState({ values: { ...this.state.values, [id]: v[id] } })
        if (id === 'c_id') {
            /** peticion */
            this.setState({ loading: true })
            await this.props.getAllDepartments({ id: v[id], state: 1 })
            this.setState({ loading: false })
            /** resultado */
            const res = this.props.departments
            if (res.success) this.setState({ departments: res.data, c_name: v.c_name, d_name: undefined, m_name: undefined, values: { ...this.state.values, [id]: v[id], d_id: undefined, m_id: undefined } })
        } else if (id === 'd_id') {
            /** peticion */
            this.setState({ loading: true })
            await this.props.getAllMunicipality({ id: v[id], state: 1 })
            this.setState({ loading: false })
            /** resultado */
            const res = this.props.municipality
            if (res.success) this.setState({ municipalities: res.data, d_name: v.d_name, m_name: undefined, values: { ...this.state.values, [id]: v[id], m_id: undefined } })
        } else if (id === 'm_id') this.setState({ m_name: v.m_name })
    }
    return (<>
        <ContentForm>
            <NewSelect disabled={!data?.countries[0].c_id} options={data?.countries.filter(x => x?.c_name === x?.c_name) || []} id='c_id' name='c_id' value={values?.c_id || ''} optionName='c_name' title='País' onChange={handleChange} margin='10px' />
            <NewSelect search disabled={!dataD?.departments[0]?.c_id} options={dataD?.departments.filter(x => x?.d_name === x?.d_name) || []} id='d_id' name='d_id' value={values?.d_id || ''} optionName='d_name' title='Departamento' onChange={handleChange} margin='10px' />
            <NewSelect search disabled={!dataMunicipalities?.getMunicipalities[0]?.d_id} options={dataMunicipalities?.getMunicipalities.filter(x => x?.m_name === x?.m_name) || []} id='m_id' name='m_id' value={values?.m_id || ''} optionName='m_name' title='Cuidad' onChange={handleChange} margin='10px' />
        </ContentForm>
    </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción
const ContentForm = styled.div`
    background-color: transparent;
    width: 100%;
    display: grid;
    grid-gap: 20px;
`