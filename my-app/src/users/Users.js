import {useEffect, useState} from 'react';
import { User } from './User';

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                setUsers(data)
            })
    }, []);

    return <>
        <h3>Users</h3>
        <ul>
        {
            users.map(user => {
                return <User key={user.id} user={user} />
            })
        }
        </ul>
    </>
}