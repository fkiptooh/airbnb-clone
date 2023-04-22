'use client';

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeResevation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { error } from "console";
import ListingCard from "../components/listings/ListingCard";

interface ReservationClientProps{
    reservations: SafeResevation[],
    currentUser?: SafeUser | null
}

const ReservationClient: React.FC<ReservationClientProps> = ({
    reservations,
    currentUser
})=>{
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('')

    const onCancel = useCallback((id: string)=>{
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
        .then(()=>{
            toast.success('Reservation cancelled');
            router.refresh()
        })
        .catch((error)=>{
            toast.error('Something went wrong');
        })
        .finally(()=>{
            setDeletingId('')
        })
    },[router])
    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings on your property"
            />
            <div className="
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
                {reservations.map((r)=>(
                    <ListingCard
                        key={r.id}
                        data={r.listing}
                        reservation={r}
                        actionId={r.id}
                        onAction={onCancel}
                        disabled={deletingId === r.id}
                        actionLabel="Cancel Guest Reservation"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default ReservationClient;