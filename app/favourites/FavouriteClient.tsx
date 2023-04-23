'use client';

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavouriteClientProps{
    listing: SafeListing[];
    currentUser?: SafeUser | null
}

const FavouriteClient: React.FC<FavouriteClientProps> = ({
    listing,
    currentUser
})=> {
    return (
        <Container>
            <Heading
                title="Favourites"
                subtitle="Places you have favourited"
            />
            <div className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-c0ls-5
                2xl:grid-cols-6
                gap-8
            ">
                {listing.map((listing)=>(
                    <ListingCard
                        currentUser={currentUser}
                        key={listing.id}
                        data={listing}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavouriteClient;