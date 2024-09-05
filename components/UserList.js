import React, { useEffect, useState } from 'react';
import User from './User';

const UserList = () => {
    const USER_API_BASE_URL = "http://192.168.0.180:8080/api/v1/users";
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className='container mx-auto my-2 '>
            <div className='flex shadow-lg border rounded-lg'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-200'>
                    <thead className='bg-white dark:bg-gray-800 uppercase'>
                        <tr>
                            <th scope="col" className="px-6 py-3">First Name</th>
                            <th scope="col" className="px-6 py-3">Last Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="text-center px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map((user) => (
                                    <User user={user} key={user.id} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4">No users found</td>
                                </tr>
                            )}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default UserList;
