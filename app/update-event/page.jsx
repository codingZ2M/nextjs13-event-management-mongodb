'use client';
import {useEffect, useState} from 'react'
import { useRouter, useSearchParams} from 'next/navigation';
import EventForm from '../components/events/EventForm';
import Image from 'next/image';

const UpdateEvent = () => {
    const router = useRouter();
const searchParams = useSearchParams();
const eventId = searchParams.get('id');

    const [formSubmit, setFormSubmit ] = useState(false);
    const [event, setEvent] = useState({
        eventType: "",
        eventDesc: "",
        eventDate: "",
        venue: "",
        numberOfGuests: "",
        budget: "",
        serviceRequired: "",
        contact: "",
        image: "",
    })

useEffect(()=>{
    const getEventDetails = async ()=> {
        const response = await fetch(`/api/event/${eventId}`)
        const data = await response.json();
        setEvent({
            eventType: data.eventType,
            eventDesc: data.eventDesc,
            eventDate: data.eventDate,
            venue: data.venue,
            numberOfGuests: data.numberOfGuests,
            budget: data.budget,
            serviceRequired: data.serviceRequired,
            contact: data.contact,
            image: data.image,
        })
    }
    if(eventId) getEventDetails();
}, [eventId])



    const updateEvent = async (e)=> {
        e.preventDefault();
        setFormSubmit(true);

        if(!eventId) return alert("Event Id is missing")

        try {
            const response = await fetch(`/api/event/${eventId}`, 
            {
                method: 'PATCH',
                body: JSON.stringify({
                    eventType: event.eventType,
                    eventDesc: event.eventDesc,
                    eventDate: event.eventDate,
                    venue: event.venue,
                    numberOfGuests: event.numberOfGuests,
                    budget: event.budget,
                    serviceRequired: event.serviceRequired,
                    contact: event.contact,
                    image: event.image,
                })
            })
            if (response.ok) {
                router.push("/");
            }
        }
        catch (error) {
            console.log(error);
        }
        finally{
            setFormSubmit(false);
        }
    }

  return (
    <div className='flex items-center justify-center'>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
         <div className="flex items-center justify-center brightness-100">
            <Image src={event.image}
             width={1920} height={300} className='px-4' alt="Event Image"/>
        </div>
        <div className="w-full flex justify-center">
            <EventForm type="Edit Event" event={event} setEvent={setEvent} formSubmit={formSubmit}
                    handleSubmit={updateEvent}/>
        </div>
        </div>
    </div>
  )
}

export default UpdateEvent