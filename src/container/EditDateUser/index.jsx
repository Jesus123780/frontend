// import { useQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { EditDatesUser } from '../../components/EditDateUser'
import useAuth from '../../components/hooks/useAuth';
// import { GET_USER } from '../../gql/LoginAut'
// import { UPDATE_AVATAR } from '../../gql/LoginAut'

export const EditDatesUserC = () => {
    // // Parametros para obetener el nombre del usuario
    // const params = useParams()
    // const { uUsername } = useParams()
    // // Query para buscar a los usuarios por usuario
    // const { data, loading, error } = useQuery(GET_USER, {
    //     variables: {
    //         username: uUsername
    //     }
    // })
    // const [updateAvatar] = useMutation(UPDATE_AVATAR)
    // const handleFileChange = async e => {
    //     const file = e.target.files[0]?.name
    //     // eslint-disable-next-line
    //     console.log(file)
    //     try {
    //         const Response = await updateAvatar({ variables: { file } })
    //         // eslint-disable-next-line
    //         console.log(Response)
    //     } catch (err) {
    //         // eslint-disable-next-line
    //         console.log(err)

    //     }
    // }
    const { auth } = useAuth()
    const [input, setInput] = useState(auth?.Uname ? auth?.Uname : '');
    const [inputNum, setInputNum] = useState(auth?.uPhoNum ? auth?.uPhoNum : '');
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleChangeNum = e => {
        setInputNum(e.target.value);
    };
    return (
        <EditDatesUser
            handleChange={handleChange}
            auth={auth}
            input={input}
            inputNum={inputNum}
            handleChangeNum={handleChangeNum}
        />
    )
}