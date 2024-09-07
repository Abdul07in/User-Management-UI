import React from 'react'

const User = ({ user, deletUser, editUser }) => {
    return (
        <tr key={user.id} className="bg-white border-b ">
            <td scope="row" className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                {user.firstName}
            </td>
            <td scope="row" className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                {user.lastName}
            </td>
            <td scope="row" className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                {user.email}
            </td>
            <td scope="row" className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                <div className='flex justify-center gap-4 py-0 mx-0'>
                    <button onClick={(e, id) => editUser(e, user.id)}
                        type="button" className="h-6 px-8 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                        Edit
                    </button>
                    <button onClick={(e, id) => deletUser(e, user.id)}
                        type="button" className="h-6 px-8 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
                        Delete
                    </button>
                </div>
            </td>
        </tr>

    )
}

export default User