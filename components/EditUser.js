import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState, useCallback, useEffect } from 'react';
import UserList from './UserList';

const EditUser = ({ userId, setResponseUser, setUserId }) => {
    const USER_API_BASE_URL = "http://192.168.0.180:8080/api/v1/users";
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
        "id": "",
        "firstName": "",
        "lastName": "",
        "email": ""
    });


    useEffect(() => {
        const fetchUser = async () => {
            try {

                const response = await fetch(`${USER_API_BASE_URL}/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setUser(data);
                openModal();
            } catch (error) {
                console.error(error);
            }
        };
        if (userId) {
            fetchUser();
        }

    }, [userId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${USER_API_BASE_URL}/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error("Something went wrong.");
            }
            const updatedUser = await response.json();
            setUser(updatedUser);
            closeModal(e);
            setResponseUser(updatedUser);
        } catch (error) {
            console.error(error);
        }

    };
    const openModal = () => {
        console.log('openModal called');
        setOpen(true);
    };
    const closeModal = (e) => {

        setOpen(false);
        setUserId(null);
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
                    <div className='min-h-screen flex items-start sm:items-center justify-center px-4 text-center backdrop-blur-sm'>
                        <Transition.Child as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className='inline-block w-full max-w-3xl pb-4 my-0 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg'>
                                <Dialog.Title as='h3' className='text-lg font-semibold p-2 bg-gray-800 text-gray-100 uppercase'>Edit User</Dialog.Title>
                                <hr />
                                <div className='max-w-full mx-auto'>
                                    <div className='grid grid-cols-2 gap-4 py-1'>
                                        <div className="h-10 my-4 mx-2">
                                            <label htmlFor="firstName" className='block text-gray-600 text-sm font-semibold'>First Name</label>
                                            <input onChange={handleChange} autoComplete='off' value={user.firstName} type='text' id='firstName' name='firstName' className='h-10 w-full border border-gray-800 mt-2 px-2 py-2' />
                                        </div>
                                        <div className="h-10 my-4 mx-2">
                                            <label htmlFor="lastName" className='block text-gray-600 text-sm font-semibold'>Last Name</label>
                                            <input onChange={handleChange} autoComplete='off' value={user.lastName} type='text' id='lastName' name='lastName' className='h-10 w-full border border-gray-800 mt-2 px-2 py-2' />
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <div className="h-10 my-4 mx-2">
                                            <label htmlFor="email" className='block text-gray-600 text-sm font-semibold'>Email Id</label>
                                            <input onChange={handleChange} autoComplete='off' value={user.email} type='email' id='email' name='email' className='h-10 w-full border border-gray-800 mt-2 px-2 py-2' />
                                        </div>
                                    </div>
                                    <div className='flex justify-end gap-4 mt-6 mr-4'>
                                        <button onClick={(e) => updateUser(e)}
                                            className='h-10 px-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition'>Save</button>
                                        <button onClick={(e) => closeModal(e)}
                                            className='h-10 px-6 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition'>Close</button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default EditUser;