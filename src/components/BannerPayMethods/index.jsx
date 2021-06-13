import React, { useState } from 'react'
import { CardItem } from './CardItem'
import { ListCard } from './styles'
import { IconArrowRight } from '../../assets/icons/icons'
import { AwesomeModal } from '../AwesomeModal'
// import { InputFiles } from '../InputFilesPrev'
export const PaymentData = () => {
    const [colorIconTruck, setColorIconTruck] = useState('#2a2a2a')
    const [colorIconWalletFill, setColorIconWalletFill] = useState('#2a2a2a')
    const [colorIconEntity, setColorIconEntity] = useState('#2a2a2a')
    const [colorIconPlusBackground, setColorIconPlusBackground] = useState('#2a2a2a')
    const [modal, setModal] = useState(false)
    // const handleFileChange = e => {
    //     const file = e.target?.files[0]
    //     return file
    // }
    return (
        <>
            <AwesomeModal
                show={modal} height='auto' hiddenOnConfirm={false} timeOut={1080} footer={false} header={true}
                show={modal}
                backdrop
                onCancel={() => setModal(false)}
                onHide={() => setModal(false)}
                btnConfirm={false}
                header={false}
                footer={false}
                padding='0px'
                size='small'

            >
               hola
            </AwesomeModal>
            <ListCard>
                <CardItem onMouseOut={() => setColorIconTruck('#2a2a2a')} onMouseOver={() => setColorIconTruck('#04AA04')} onClick={() => setModal(!modal)} icon={<IconArrowRight size={window.screen.width < 768 ? '38px' : '50px'} color={colorIconTruck} />} color={colorIconTruck} title='Envío gratis' />
                <CardItem onMouseOut={() => setColorIconWalletFill('#2a2a2a')} onMouseOver={() => setColorIconWalletFill('#C20202')} onClick={() => setModal(!modal)} icon={<IconArrowRight size='50px' color={colorIconWalletFill} />} color={colorIconWalletFill} title='Transferencia desde tu banco' />
                <CardItem onMouseOut={() => setColorIconEntity('#2a2a2a')} onMouseOver={() => setColorIconEntity('#068CF3')} onClick={() => setModal(!modal)} icon={<IconArrowRight size='50px' color={colorIconEntity} bgColor='#e4e4e4' />} color={colorIconEntity} title='Paga en efectivo' />
                <CardItem onMouseOut={() => setColorIconPlusBackground('#2a2a2a')} onMouseOver={() => setColorIconPlusBackground('#068CF3')} onClick={() => setModal(!modal)} icon={<IconArrowRight size='50px' color={colorIconPlusBackground} bgColor='#e4e4e4' />} color={colorIconPlusBackground} title='Más medios de pago' />
                {/* <InputFiles onChange={handleFileChange} /> */}
            </ListCard>
        </>
    )
}