import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async()=> {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return(
            <EmptyState
                title="Unauthorized Resource"
                subtitle="Please Login"
            />
        );
    }

    const listings = await getListings({
        userId: currentUser.id
    })

    if(listings.length === 0){
        return(
            <EmptyState
                title="No properties"
                subtitle="Looks like you have no properties!"
            />
        )
    }

    return(
        <PropertiesClient
            currentUser={currentUser}
            listings={listings}
        />
    )
}

export default PropertiesPage;