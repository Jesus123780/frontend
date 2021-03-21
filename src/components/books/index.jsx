import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { GET_COURSES } from '../../gql/cursos';
import { GET_BOOKS } from '../../gql/libros';
import { AwesomeModal } from '../awesome-modal';
import { ShadowCard } from '../ShadowCard'
import { Container, Card } from './styled';
export const Books = () => {
    const [modal, setModal] = useState(false)

    const { data, loading, error } = useQuery(GET_COURSES);
    const [getBooks, { data: dataBooks, loading: loadBooks, error: errBooks }] = useLazyQuery(GET_BOOKS)
    return (
        <Container>
            <Card>
                <ShadowCard>
                    {!!((loading && !error) || (loading && !error)) && <span>Cargando datos...</span>}
                    {data?.courses?.map(courses => <span key={courses.id}>{courses.title}<br />{courses.description}<br />{courses.description}<br />{courses.topic}</span>)}
                    <h1>lista de libros</h1>

                    <button onClick={() => getBooks()}>obtener libros</button>

                    {!!((loading && !error) || (loadBooks && !errBooks)) && <span>Cargando Libros...</span>}
                    {dataBooks?.books?.map(books => <span key={books.id}>{books.description}, {books.title}<br /></span>)}
                    <AwesomeModal title='NUEVO REGISTRO' show={modal} onHidde={() => setModal(false)} height='auto' hiddeOnConfirm={false} timeOut={280} footer={false} header={true}>
                        <h1>Hola</h1>
                    </AwesomeModal>
                    <button onClick={setModal}>Modal</button>
                </ShadowCard>
            </Card>
            <Card>
                <ShadowCard>
                </ShadowCard>
            </Card>
            <Card>
                <ShadowCard>
                </ShadowCard>
            </Card>
        </Container>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción