import { Outlet, useParams } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { data } = useParams()
    
    try {
        const isBase64 = atob(data);
        console.log("The link has base64 data! -> " + isBase64)
        return <Outlet />

    } catch(e) {
        console.log("No base64 data provided.")
        if (e.code === 5) {
            return (
            <div>
                <p>Errore. Pagina non trovata.</p>
                <a href="/">Ritorna alla home.</a>
            </div>)
        }
    }

}