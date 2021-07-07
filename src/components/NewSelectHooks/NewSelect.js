import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IconArrowBottom } from '../../assets/icons/icons'
import { PColor, SFColor } from '../../assets/colors'
import { BoxOptions, BoxSelect, CustomButtonS, FixedBox, Icon, InputText, LabelInput, Options, SpanText, TextNotResult, Tooltip } from './styled'
export default function NewSelect({ options, disabled, id, idD, name, onChange, optionName, value, width, search, title, margin, minWidth, error, required, accessor }) {
    /** Hooks */
    const [select, setSelect] = useState(false)
    const [selectRef, setSelectRef] = useState(0)
    const [valueInput, setValueInput] = useState()
    const [selectBody, setSelectBody] = useState(0)
    const [newOption, setNewOption] = useState(false)
    const bodyHeight = window.screen.height
    const inputSearch = useRef(null)
    const [refSelect, setRefSelect] = useState(false)

    // Rendering el valor
    const renderVal = data => {
        if (!data) return ''
        if (Array.isArray(optionName)) {
            let valueRender = ''
            //eslint-disable-next-line
            optionName.forEach(x => valueRender = `${valueRender} ${(accessor && data[accessor]) ? data[accessor][x] : data[x]}`)
            return valueRender
        } else return data[optionName]
    }

    /** Use Effect */
    useEffect(() => {
        setNewOption(options)
    }, [options])

    /** Use Effect */
    useEffect(() => {
        if (search) { select && inputSearch.current.focus() }
    }, [select, search])

    // guarda la referencia de la caja */
    const changeRef = v => {
        setSelectRef(v.offsetTop + selectBody)
        setRefSelect(v)
    }

    // Valor selecionado
    const changeValue = v => {
        setSelect(false)
        onChange({ target: { name, value: v[id] } }, !v[id], refSelect)
    }

    // Busqueda
    const changeSearch = v => {
        setValueInput(v.target.value)
        const fil = options.filter(x => renderVal(x)?.toUpperCase()?.indexOf(v.target?.value?.toUpperCase()) > -1)
        setNewOption(fil)
    }

    // Función al hacer click sobre el select
    const handleClick = e => {
        e.preventDefault()
        setSelect(!select)
        setTimeout(() => setNewOption(options), 500)
    }

    const handleBlur = () => {
        setTimeout(() => setSelect(false), 400)
        setTimeout(() => setNewOption(options), 300)
    }

    const val = options.find(x => x[id] === value)

    return (
        <BoxSelect width={width} margin={margin} ref={v => !!v && changeRef(v)} id={idD}>
            <FixedBox onClick={() => setSelect(false)} active={select} />
            <CustomButtonS error={error} type='button' height={!val ? '37px' : ''} color={val ? SFColor : '#757575'} onClick={handleClick} minWidth={minWidth} disabled={disabled}>
                <SpanText>{renderVal(val)}</SpanText>
            </CustomButtonS>
            <LabelInput error={error} value={value}>{title}</LabelInput>
            {error && <Tooltip>Este campo no debe estar vacío</Tooltip>}
            <Icon>
                <IconArrowBottom size={15} color={PColor} style={{ position: 'absolute', right: 5, bottom: 18, pointerEvents: 'none' }} />
            </Icon>
            {/** Caja de items */}
            <div>
                {select &&
                    <BoxOptions
                        onBlur={handleBlur}
                        bottom={selectRef > bodyHeight}
                        ref={v => setSelectBody(!!v && v.offsetHeight)}
                        top={selectRef < bodyHeight}>
                        {search && <InputText placeholder='Buscar aquí...' value={valueInput || ''} ref={inputSearch} onChange={changeSearch} />}
                        <div>
                            {newOption.length ?
                                newOption.map(x => <Options hover option key={x[id]} title={renderVal(x)} type='button' onClick={() => changeValue(x)}>{renderVal(x)}</Options>)
                                : <TextNotResult>No hay resultados...</TextNotResult>
                            }
                        </div>
                    </BoxOptions>}
            </div>
            <input type='hidden' name={name} value={value || ''} id={id} data-required={required} />

        </BoxSelect>
    )
}

NewSelect.propTypes = {
    options: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    id: (PropTypes.string || PropTypes.number).isRequired,
    idD: (PropTypes.string || PropTypes.number),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string || PropTypes.number,
    width: PropTypes.string,
    search: PropTypes.bool,
    title: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    minWidth: PropTypes.string,
    error: PropTypes.bool,
    required: PropTypes.bool,
    accessor: PropTypes.string,
    fullName: PropTypes.bool
}