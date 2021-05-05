import {useRouter} from 'next/router'

const RSVPUnique = () => {
    const router = useRouter();
    const { id } = router.query

    return (
        <p>Post: {id}</p>
    )
}

export default RSVPUnique