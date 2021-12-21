import { Outlet, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export const ProtectedRoutes = () => {
    const { data } = useParams()
    
    try {
        const decodedData = atob(data);
        const { time, value } = JSON.parse(decodedData)
        return <Outlet context={[time, value]} />

    } catch(e) {
        return (
            <NotFound />
        )
        }
    }