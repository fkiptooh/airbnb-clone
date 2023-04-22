import { Listing, Reservation, User } from "@prisma/client";

export type  SafeListing = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string
}

export type SafeResevation = Omit<
Reservation,
"createdAt" | 'startDate' | 'endDate' | 'lising'
> & {
    createdAt: string,
    startDate: string,
    endDate: string,
    listing: SafeListing
}

export type SafeUser = Omit<
    User,
    "createAt" | "updatedAt" | "emailVerified"
> & {
    createdAt : string;
    updatedAt: string;
    emailVerified: string;
};