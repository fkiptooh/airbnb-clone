import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoutiteListings from "../actions/getFavouriteListings";
import FavouriteClient from "./FavouriteClient";

const ListingPage = async()=>{
    
    const listing = await getFavoutiteListings();
    const user = await getCurrentUser();

    if (listing.length === 0) {
        return (
            <EmptyState
                title="No Favourites"
                subtitle="Seems like you have not favourite trips"
            />
        )
    }


    return (
        <FavouriteClient
            listing={listing}
            currentUser={user}
        />
    )
}

export default ListingPage;