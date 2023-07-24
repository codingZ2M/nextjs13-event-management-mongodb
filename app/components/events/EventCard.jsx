"use client";

import Image from 'next/image';
import {useSession} from 'next-auth/react';
import {usePathname} from 'next/navigation';
import { useRouter } from 'next/navigation' 

const EventCard = ({event, handleEdit, handleDelete}) => {
const router =  useRouter();
const pathname = usePathname();
const {data: session} = useSession();

const singleEventView =()=> {
  router.push(`/event-view?id=${event._id}`)
}

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <Image className="rounded-full object-cover" src={event.eventCreator.image} width={40} height={40} alt="User Image" />
        <div className="ml-4">
          <h2 className=" text-sm font-normal text-[#14213D]">{event.eventCreator.username}</h2>
          <p className="text-gray-500 text-sm font-normal">{event.eventCreator.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-blue-500">{event.eventType}</h3>
        <p className="text-sm font-normal truncate ...">{event.eventDesc}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-semibold">Date:</p>
          <p className="text-sm font-normal">{event.eventDate}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Venue:</p>
          <p className="text-sm font-normal">{event.venue}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-4">
        <div>
          <p className="text-sm font-semibold">Guests:</p>
          <p className="text-sm font-normal">{event.numberOfGuests}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Budget:</p>
          <p className="text-sm font-normal">{event.budget}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold">Service Required:</p>
        <p className="text-sm font-normal">{event.serviceRequired}</p>
      </div>

      <div className='flex items-center justify-between'>
        <div className="mt-4">
          <p className="text-sm font-semibold">Contact:</p>
          <p className="text-sm font-normal">{event.contact}</p>
        </div>
        {session?.user.id === event.eventCreator._id && pathname === '/user' && (
          <div className='flex gap-3'>
            <p className='cursor-pointer text-sm font-normal bg-[#14213D] text-[#ffffff] py-1 px-3 rounded-md shadow-lg  hover:bg-[#ffffff] hover:text-[#14213D] transition duration-300 border border-[#14213D]'
            onClick={handleEdit } >Edit</p>
             <p className='cursor-pointer text-sm font-normal bg-[#14213D] text-[#ffffff] py-1 px-3 rounded-md shadow-lg  hover:bg-[#ffffff] hover:text-[#14213D] transition duration-300 border border-[#14213D]'
            onClick={handleDelete } >Delete</p>
          </div>
        )}
         <p className='cursor-pointer text-sm font-normal bg-[#14213D] text-[#ffffff] py-1 px-3 rounded-md shadow-lg  hover:bg-[#ffffff] hover:text-[#14213D] transition duration-300 border border-[#14213D]'
            onClick={singleEventView } >View</p>
      </div>

      <Image src={event.image} width={400} height={350} className='pt-4' alt="Event Image"/>
    </div>
  )
}

export default EventCard