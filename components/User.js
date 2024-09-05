import React from 'react'

const User = ({ user }) => {
    return (
        <tr key={user.id} className="bg-white border-b ">
            <td scope="row" className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                {user.firstName}
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                {user.lastName}
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                {user.email}
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                <div className='flex justify-around'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Edit
                    </button>
                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Delete
                    </button>
                </div>
            </td>
        </tr>

    )
}

export default User