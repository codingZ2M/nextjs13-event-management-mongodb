'use client'

import React, {useState, useEffect} from 'react'
import {  useSearchParams} from 'next/navigation';
import Image from 'next/image';

const EventView = () => {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('id');
    const [event, setEvent] = useState({})

    useEffect(()=>{
        const getEventDetails = async ()=> {
            const response = await fetch(`/api/event/${eventId}`)
            const eventData = await response.json();
            setEvent(eventData)
        }
        if(eventId) getEventDetails();
    }, [eventId])


  return (
  <div className='px-4 sm:px-20 mt-6 sm:mt-20 mb-12 sm:mb-20'>
        <p className='text-xl sm:text-3xl font-normal text-[#14213D] w-full mb-6 sm:mb-12'>
          Event Details
        </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
      <div className="flex items-center justify-center">
        <Image src={event.image} width={700} height={467} className='rounded-lg' alt="Event Image"/>
      </div>
      <div className="rounded-lg shadow-lg p-8">
        <div className="mt-4">
          <h3 className="text-sm sm:text-xl mb-2 font-semibold text-blue-500">{event.eventType}</h3>
          <p className="text-sm font-normal">{event.eventDesc}</p>
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
      
      </div>
    </div>
 </div>
</div>
  )
}

export default EventView