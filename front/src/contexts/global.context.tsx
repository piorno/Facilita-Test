import { createContext, useState } from "react";
import Loader from "../components/loader";
import Toast from "../components/toast";

type GlobalAlertContextType ={
    handleToast: (open: true, type: string, message: string) => void,
    handleLoading: (loading: boolean) => void
}

export const GlobalAlertContext = createContext<GlobalAlertContextType>(null!)

export function GlobalAlertProvider({ children }: {children: React.ReactNode}) {
    const [toast, setToast] = useState({ open: false, type: 'success', message: '' })
    const [loading, setLoading] = useState(false)

    const handleToast = (open: true, type: string, message: string) => {
        setToast({ open, type, message })
    }

    const handleLoading = (loading: boolean) => {
        setLoading(loading)
    }

    return (
        <GlobalAlertContext.Provider value={{ handleToast, handleLoading }}>
            {children}
            <Toast {...toast} handleClose={() => setToast({ open: false, type: toast.type, message: '' })} />
            <Loader open={loading} />
        </GlobalAlertContext.Provider>
    )
}