import { useMutation } from '@apollo/client'
import React, { useContext, useState }/* , { useState } */ from 'react'
import { Context } from '../../Context'

import { EditData } from '../../components/EditDataUser'
import useAuth from '../../components/hooks/useAuth'
import { CHANGE_DATA_USER } from '../../gql/EditDataUser'
import { validationSubmitHooks } from '../../utils'

export const EditDataC = () => {
    const [errors, setErrors] = useState({})
    const [errorSub, setErrSubmit] = useState(false)
    const { auth } = useAuth()
    const [modal, setModal] = useState(false)
    const [input, setInput] = useState(auth?.Uname ? auth?.Uname : '');
    const [inputNum, setInputNum] = useState(auth?.uPhoNum ? auth?.uPhoNum : '');
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleChangeNum = e => {
        setInputNum(e.target.value);
    };
    const uPhoNum = inputNum
    const { setAlertBox } = useContext(Context)
    const [UpdateUser, { loading, data }] = useMutation(CHANGE_DATA_USER)
    const handleSave = async e => {
        e.preventDefault()
        // Declarando variables
        let errorSubmit = false
        for (const x in errors) {
            if (errors[x]) errorSubmit = true
        }
        // Validando todos los campos que no sean nulos
        const errorForm = validationSubmitHooks(e.target.elements)
        for (const x in errorForm) {
            if (errorForm[x]) errorSubmit = true
        }
        setErrors({ ...errorForm })
        try {
            if (!errorSubmit) {
                const response = await UpdateUser({
                    variables: {
                        input: {
                            uPhoNum,
                        }
                    }
                })
                setAlertBox({ message: `${ response?.data?.UpdateUser }`, duration: 20000, color: 'red' })

            }
        } catch (error) {
            setErrSubmit(true)
        }
    }
    return (
        <EditData
            handleChange={handleChange}
            auth={auth}
            input={input}
            inputNum={inputNum}
            loading={loading}
            handleChangeNum={handleChangeNum}
            handleSave={handleSave}
            setModal={setModal}
            modal={modal}
            data={data}
            onChange={({ target }) => setInput(target?.value)}
            errorSub={errorSub}
        />
    )
}