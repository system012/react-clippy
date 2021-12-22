import { Outlet, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

const isUrl = (value) => {

    try {
        const url = new URL(value)
        return {isValidUrl: true, url: url}

    } catch (e) {
        return {isValidUrl: false, url: undefined}
    }
}

export const ProtectedRoutes = () => {
    const { data } = useParams()
    
    try {
        const decodedData = atob(data);
        const { time, value } = JSON.parse(decodedData)
        const {isValidUrl, url} = isUrl(value)
        if (isValidUrl) return window.location.replace(url)

        return <Outlet context={[time, value]} />

    } catch(e) {
        return (
            <NotFound />
        )
        }
    }