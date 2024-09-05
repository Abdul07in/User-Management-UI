import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

const AddUser = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true)
  }
  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <div className='container mx-auto my-2'>
        <div className='h-12'>
          <button onClick={openModal} className='rounded-md bg-gray-800 text-white px-10 py-2 font-semibold'>Add User</button>
        </div>
      </div>
      <Transition appear show={open} as={Fragment} >
        <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal} >
          <div className='min-h-screen px-4 text-center '>
            <Transition.Child as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md'>
                <Dialog.Title as='h3' className='text-lg font-semibold leading-6 text-gray-900' >Add New User</Dialog.Title>
                <hr />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddUser