// import { useState } from 'react'

import { ClienteProvider } from "./contexts/clientes.context";
import { GlobalAlertProvider } from "./contexts/global.context";
import Clientes from "./pages/clientes";

// import './App.css'

const App = () => {
    return (
        <GlobalAlertProvider>
            <ClienteProvider>
                <Clientes/>
            </ClienteProvider>
        </GlobalAlertProvider>
    );
};

export default App;
