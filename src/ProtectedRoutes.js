import { Outlet, useParams } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { data } = useParams()
    
    try {
        const decodedData = atob(data);
        return <Outlet context={decodedData} />

    } catch(e) {
        if (e.code === 5) {
            return (
            <div>
                <p>Errore. Pagina non trovata.</p>
                <a href="/">Ritorna alla home.</a>
            </div>)
        }
    }

}