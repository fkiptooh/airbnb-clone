import axios from "axios";
import { useRouter } from "next/navigation";
import { useMemo, useCallback } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";

interface IuseFavorites {
    listingId?: string,
    currentUser?: SafeUser | null
}

const useFavorites =({
    listingId="",
    currentUser
}: IuseFavorites)=> {
    const router = useRouter()
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(()=> {
        const list = currentUser?.favouriteIds || [];

        return list.includes(listingId)
    },[currentUser, listingId]);

    const toggleFavorite = useCallback(async(
        e: React.MouseEvent<HTMLDivElement>
    )=>{
        e.stopPropagation();

        if(!currentUser){
            return loginModal.onOpen()
        }
       try{
        let request;

        if (hasFavorited) {
            request = ()=> axios.delete(`/api/favorites/${listingId}`);
        } else{
            request = () => axios.post(`/api/favorites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success('Success')
       } catch (error){
        toast.error('Something went wrong')
       }
    },[
        currentUser,
        loginModal,
        router,
        listingId,
        hasFavorited
    ]);

    return {
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorites;