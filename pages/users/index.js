import Link from 'next/link'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../comps/Loader';
import { getDataUsers } from '../../store/actions/user';
import styles from '../../styles/Ninjas.module.css'

// export const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()

//     return {
//         props: { ninjas: data }
//     }
// }

const Users = () => {
    const dispatch = useDispatch()

    const { dataUsers, loading } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getDataUsers())
    }, [dispatch])
    
    return loading ? <Loader /> : ( 
        <div>
            <h1>All Users</h1>
            {dataUsers?.map(user => (
                <Link href={`/users/${user?.id}`} key={user?.id}>
                    <div className={styles.single}>
                        <h3>{user?.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Users;