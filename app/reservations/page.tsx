import EmptyState from "../components/EmptyState";
import getReservations from "../actions/getReservations";
import getCurrentUser from "../actions/getCurrentUser";
import ReservationClient from "./ReservationClient";

const ReservationPage = async()=>{
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return(
            <EmptyState
                title="Unauthorized"
                subtitle="Please Login"
            />
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id,
    });

    if (reservations.length === 0) {
        return(
            <EmptyState
                title="No Reservations"
                subtitle="Looks like you have no reservations on your properties"
            />
        )
    }

    return(
        <ReservationClient
            reservations={reservations}
            currentUser={currentUser}
        />
    )

}
export default ReservationPage;