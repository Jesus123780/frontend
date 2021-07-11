import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { IconSearch, IconCancel } from '../../assets/icons/icons'
import { BoxInput, InputV, ButtonFocus } from './styled'

const InputHooksSearcher = ({
    disabled,
    onBlur,
    fontSize,
    width,
    minWidth,
    padding,
    radius,
    type,
    name,
    required,
}) => {
    const reference = useRef();
    const [input, setInput] = useState('');
    return (
        <BoxInput width={width} padding={padding} minWidth={minWidth}>
            <ButtonFocus
                onClick={() => {
                    reference.current.focus();
                }}
            >
                <IconSearch />
            </ButtonFocus >
            <InputV
                type={type}
                ref={reference}
                value={input}
                onChange={e => setInput(e.target.value)}
                data-required={required}
                name={name}
                disabled={disabled}
                onBlur={onBlur}
                size={fontSize}
                radius={radius}
                autoComplete={type === 'password' ? 'current-password' : 'true'}
            />
            {input.length >= 1 &&
                <ButtonFocus input={input}
                    onClick={() => {
                        reference.current.focus();
                        reference.current.value = '';
                    }}
                >
                    <IconCancel />
                </ButtonFocus >
            }

        </BoxInput>
    )
}

InputHooksSearcher.propTypes = {
    onBlur: PropTypes.func,
    error: PropTypes.func,
    onChange: PropTypes.func,
    minLenght: PropTypes.number,
    maxLenght: PropTypes.number,
    email: PropTypes.bool,
    numeric: PropTypes.bool,
    letters: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    pass: PropTypes.bool,
    passConfirm: PropTypes.object,
    dataIgnore: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
    margin: PropTypes.string,
    radius: PropTypes.string,
    range: PropTypes.object,
    fontSize: PropTypes.string,
    reference: PropTypes.object,
    minWidth: PropTypes.string || PropTypes.number,
    padding: PropTypes.string || PropTypes.number,
    labelColor: PropTypes.string || PropTypes.number,
    bgColor: PropTypes.string || PropTypes.number,
    value: PropTypes.string || PropTypes.number,
    paddingInput: PropTypes.string || PropTypes.number
}

export default InputHooksSearcher