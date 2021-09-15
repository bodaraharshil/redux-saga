import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/user';

import CardComponent from './cardComponent';

const UserComponent = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers([
            {
                id: 1,
                name: "abc"
            }
        ]))
    }, [])

    console.log("[][][][]", users)

    return (
        <div>
            {users.map((item, index) => {
                return (
                    <div>
                        <CardComponent item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default UserComponent
