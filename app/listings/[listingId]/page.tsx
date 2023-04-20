import getListingsById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    listingId?: string
}
const ListingPage= async({params}: {params: IParams})=> {

    const listing = await getListingsById(params)
    const currentUser = await getCurrentUser()

    if (!listing) {
        return <EmptyState/>
    }
    return(
        <ListingClient
            listing={listing}
            currentUser={currentUser}
        />
    )
}
export default ListingPage;