import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/user';

import CardComponent from './cardComponent';

const UserComponent = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.UsersReducer.users);
    const loading = useSelector(state => state.UsersReducer.loading);
    const error = useSelector(state => state.UsersReducer.error);

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <div>
            {loading && <p>Loading............</p>}
            {users.map((item, index) => {
                return (
                    <div>
                        <CardComponent item={item} />
                    </div>
                )
            })}
            {error && !loading && <p>{error}</p>}
        </div>
    )
}

export default UserComponent
