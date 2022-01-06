import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "./AxiosConfig"

export function useHasUser() {
    const [hasUser, setHasUser] = useState(false);
    const router = useRouter();
    useEffect(
        () => {
            if (router.pathname.includes("users")) {
                setHasUser(true)
            } else {
                setHasUser(false)
            }
        }, [router.pathname]
    );
    return hasUser
}

export function useGigId() {
    const [gigId, setGigId] = useState('');
    const router = useRouter();

    useEffect(() => {
        console.log(router.query);
        setGigId(router.query.id)
    }, [router.query])
    return gigId
}

export function useFetchCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        let isApiSubscribed = true;
        fetchCategories().then((res) => {
            if (isApiSubscribed) {
                console.log(res)
                setCategories(res.data);
            }
        }).catch(err => console.log(err));
        return () => {
            isApiSubscribed = false;
        }
    }, [])
    return categories;
}

export function useDropControl() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeGig, setActiveGig] = useState(0)

    const handleDropControl = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true)
    }

    useEffect(() => {
        const handleDropDown = () => {
            if (isOpen) {
                console.log('ji')
                setIsOpen(false)
            }
        }
        window.addEventListener('click', handleDropDown)
        return () => {
            window.removeEventListener('click', handleDropDown)
        }
    }, [isOpen])
    return [isOpen, handleDropControl, activeGig, setActiveGig]
}

export function useDeleteGig(initialState) {
    const [shouldDelete, setShouldDelete] = useState(initialState);
    const router = useRouter()

    const deleteGig = () => {
        // console.log(shouldDelete)
        axios.delete(`/delete_gig/${shouldDelete[1]}`).then(
            (res) => {
                console.log(res)
                router.reload();
            }
        )
    }
    return [shouldDelete, setShouldDelete, deleteGig]
}

export function fetchCategories() {
    return axios.get('/categories')
}