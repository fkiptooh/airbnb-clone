import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async()=> {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return(
            <EmptyState
                title="Unauthorized Resource"
                subtitle="Please Login"
            />
        );
    }

    const reservations = await getReservations({
        userId: currentUser.id
    })

    if(reservations.length === 0){
        return(
            <EmptyState
                title="No Trips Found"
                subtitle="Looks like you havent reserved any trips yet!"
            />
        )
    }

    return(
        <TripsClient
            currentUser={currentUser}
            reservations={reservations}
        />
    )
}

export default TripsPage;