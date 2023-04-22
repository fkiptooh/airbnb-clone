'use client';

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeResevation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface TripsClientProps {
    reservations: SafeResevation[];
    currentUser: SafeUser | null
}
const TripsClient: React.FC<TripsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('')
    const onCancel = useCallback((id: string)=>{
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
        .then(()=>{
            toast.success('Reservation Cancelled succefully')
            router.refresh()
        })
        .catch((error)=>{
            toast.error(error?.response?.data?.error);
        })
        .finally(()=>{
            setDeletingId('');
        })
    },[router])
    return(
        <Container>
            <Heading
                title="Trips"
                subtitle="Where you've been and where you are going"
            />
            <div
                className="
                    mt-10
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-8
                "
            >
                {reservations.map((resevation)=>(
                    <ListingCard
                        key={resevation.id}
                        data={resevation.listing}
                        reservation={resevation}
                        actionId={resevation.id}
                        onAction={onCancel}
                        disabled={deletingId===resevation.id}
                        actionLabel="Cancel Reservation"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default TripsClient;