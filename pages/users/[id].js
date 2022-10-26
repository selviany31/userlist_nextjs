import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../comps/Loader";
import { getDetailUser } from "../../store/actions/user";

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data = await res.json()


//     const paths = data?.map(ninja => {
//         return {
//             params: { id: ninja?.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     const data = await res.json()

//     return {
//         props: { ninja: data }
//     }
// }

const Details = () => {
    const dispatch = useDispatch()
    const { query } = useRouter()

    const { detailUser, loading } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getDetailUser(query.id))
    },[dispatch, query.id])

    return loading ? <Loader /> : ( 
        <div>
            <h1>{detailUser?.name}</h1>
            <p>{detailUser?.email}</p>
            <p>{detailUser?.website}</p>
            <p>{detailUser?.address?.city}</p>
        </div>
    );
}
 
export default Details;