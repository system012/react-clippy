import { Outlet, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

const isUrl = (value) => {// se viene fornito un link valido verrà restituito un oggetto contenente isValidUrl (uguale a true) e l'url stesso

    try {
        const url = new URL(value)
        return {isValidUrl: true, url: url}

    } catch (e) {// se l'url non è valido il costruttore URL triggera un errore che viene gestito, e si ritornerà un oggetto contentente isValidUrl = false
        return {isValidUrl: false, url: undefined}
    }
}

export const ProtectedRoutes = () => {
    const { data } = useParams()
    
    try {
        const decodedData = atob(data);
        const { time, value } = JSON.parse(decodedData)
        const {isValidUrl, url} = isUrl(value)
        if (isValidUrl) return window.location.replace(url) // se il link fornito è valido la pagina reindirizza automaticamente l'utente al link stesso

        return <Outlet context={[time, value]} />

    } catch(e) {
        return (
            <NotFound />
        )
        }
    }