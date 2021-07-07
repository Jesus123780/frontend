import { HeaderC as Header } from '../HeaderStore'
import { Footer } from '../Footer'
import { AlertBox } from '../AlertBox'

export const Layout = ({ children, error }) => {
    return (<>
        <AlertBox err={error} />
        <Header />
        <main style={{ backgroundColor: '#ffffff', height: '100%' }}>
            {children}
        </main>
        <Footer />

    </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción