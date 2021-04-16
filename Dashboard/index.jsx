import Head from 'next/head'
import { useState, useEffect } from 'react'
import { RouterCrumbs } from '../Breadcrumb'
import { useQuery } from '@apollo/client'
import { GET_APPOIMENTS } from '../../graphql/appoiments'

import {
    Container,
    ColContain,
    Card,
    DashWidget,
    CircleGraph,
    ParagraphInfo,
    DashWidgetInfo,
    Text,
    TableResponsive,
    TabsTable,
    BtnTabs,
    Table,
    Tbody,
    Th,
    Td,
    Tr,
    TdCenter,
    // Botones de tablas
    ContainerBtn,
    ButtonOption,
    // Avatar TD
    Avatar,
    ContainerInfo,
    AvatarContentImg,
    ImgAvatar,
    TextInfo,
    HourText
    // SideBar
} from './styled'
import { AsideV } from '../../containers/Aside'
export const Dashboard = () => {
    const { data, loading, error } = useQuery(GET_APPOIMENTS)
    console.log(data);
    const [menuActive, setMenuActive] = useState(1)
    function getCurrentTime() {
        return new Date().toLocaleTimeString("it-IT");
      }
    
    const [time, timeFunction] = useState(getCurrentTime);

    function timeNow() {
      timeFunction(getCurrentTime);
    }
    useEffect(() => {
        setInterval(timeNow, 1000);
      }, []);
    return (

        <div>
 <h1>{time}</h1>
            <Head>
                <title>Doccure - dashboard</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Container>
                <AsideV />
                <ColContain>
                    <Card>
                        <DashWidget>
                            <CircleGraph />
                            <DashWidgetInfo>
                                <Text weight="500">Pacientes en total</Text>
                                <Text weight="900" size="24px">
                                    1500
                                </Text>
                                <ParagraphInfo>06, Apr 2019</ParagraphInfo>
                            </DashWidgetInfo>
                        </DashWidget>
                        <DashWidget>
                            <CircleGraph />
                            <DashWidgetInfo>
                                <Text weight="500">Pacientes en total</Text>
                                <Text weight="600" size="24px">
                                    1500
                                </Text>
                                <ParagraphInfo>06, Apr 2019</ParagraphInfo>
                            </DashWidgetInfo>
                        </DashWidget>
                        <DashWidget>
                            <CircleGraph />
                            <DashWidgetInfo>
                                <Text weight="500">Pacientes en total</Text>
                                <Text size="24px" weight="600">
                                    1500
                                </Text>
                                <ParagraphInfo>06, Apr 2019</ParagraphInfo>
                            </DashWidgetInfo>
                        </DashWidget>
                    </Card>
                    <Text margin="0px 0px 25px 0px" weight="700"> Cita del paciente</Text>
                    <TabsTable>
                        <BtnTabs
                            bgColor={menuActive === 1}
                            onClick={() => setMenuActive(1)}
                        >
                            Próximamente
                        </BtnTabs>
                        <BtnTabs
                            bgColor={menuActive === 2}
                            onClick={() => setMenuActive(2)}
                        >
                            Hoy
                        </BtnTabs>
                    </TabsTable>
                    <TableResponsive>
                        <thead>
                            <Tr>
                                <Th>Nombre del paciente</Th>
                                <Th>Fecha de cita</Th>
                                <Th>Objetivo</Th>
                                <Th>Tipo</Th>
                                <Th>Monto de pago</Th>
                                <Th></Th>
                            </Tr>
                        </thead>
                        {menuActive === 1
                            ? [1, 2, 3, 4, 5, 6].map(x => (
                                <Table key={x.id}>
                                    <Tbody>
                                    {data?.getAppoiments?.map(x => <Tr key={x.Uid}>
                                        

                                            <Td>
                                                <Avatar>
                                                    <AvatarContentImg>
                                                        <ImgAvatar
                                                            src="https://doccure-html.dreamguystech.com/template/assets/img/patients/patient.jpg"
                                                            alt="Avatar"
                                                        />
                                                    </AvatarContentImg>
                                                    <ContainerInfo>
                                                        <TextInfo size="14px">
                                                        {x.userProfile?.user.uName} {x.userProfile?.user.uLast} 
                                                        </TextInfo>
                                                        <TextInfo
                                                            size="12px"
                                                            color={`${ ({
                                                                theme
                                                            }) => theme.SFSColor }`}
                                                        >
                                                            # PT0016
                                                        </TextInfo>
                                                    </ContainerInfo>
                                                </Avatar>
                                            </Td>
                                            <Td>
                                                <ContainerInfo>
                                                    <TextInfo>
                                                        {x.aDate}
                                                    </TextInfo>
                                                    <HourText>
                                                        11:00 AM
                                                    </HourText>
                                                </ContainerInfo>
                                            </Td>
                                            <Td>General</Td>
                                            <Td>Paciente nuevo</Td>
                                            <TdCenter>{x.aMount}</TdCenter>
                                            <Td>
                                                <ContainerBtn>
                                                    <ButtonOption
                                                        bgColor="1"
                                                        color="1"
                                                    >
                                                        Vista
                                                    </ButtonOption>
                                                    <ButtonOption
                                                        bgColor="2"
                                                        color="2"
                                                    >
                                                        aceptar
                                                    </ButtonOption>
                                                    <ButtonOption>
                                                        Cancelar
                                                    </ButtonOption>
                                                </ContainerBtn>
                                            </Td>
                                        </Tr>
                                         )}
                                    </Tbody>
                                </Table>
                            ))
                            : [1, 2, 3, 4].map(x => (
                                <Table key={x.id}>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <Avatar>
                                                    <AvatarContentImg>
                                                        <ImgAvatar
                                                            src="https://doccure-html.dreamguystech.com/template/assets/img/patients/patient.jpg"
                                                            alt="Avatar"
                                                        />
                                                    </AvatarContentImg>
                                                    <ContainerInfo>
                                                        <TextInfo size="14px">
                                                            Richard Wilson
                                                        </TextInfo>
                                                        <TextInfo
                                                            size="12px"
                                                            color={`${ ({
                                                                theme
                                                            }) => theme.SFSColor }`}
                                                        >
                                                            # PT0016
                                                        </TextInfo>
                                                    </ContainerInfo>
                                                </Avatar>
                                            </Td>
                                            <Td>
                                                <ContainerInfo>
                                                    <TextInfo>
                                                        11 de noviembre de
                                                        2019
                                                    </TextInfo>
                                                    <HourText>
                                                        11:00 AM
                                                    </HourText>
                                                </ContainerInfo>
                                            </Td>
                                            <Td>General</Td>
                                            <Td>Paciente nuevo</Td>
                                            <TdCenter>$ 150</TdCenter>
                                            <Td>
                                                <ContainerBtn>
                                                    <ButtonOption
                                                        bgColor="1"
                                                        color="1"
                                                    >
                                                        Vista
                                                    </ButtonOption>
                                                    <ButtonOption
                                                        bgColor="2"
                                                        color="2"
                                                    >
                                                        aceptar
                                                    </ButtonOption>
                                                    <ButtonOption>
                                                        Cancelar
                                                    </ButtonOption>
                                                </ContainerBtn>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            ))}
                    </TableResponsive>
                </ColContain>
            </Container>
        </div>
    )
}
