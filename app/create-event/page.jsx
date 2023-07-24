'use client';
import {useState} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter} from 'next/navigation';
import EventForm from '../components/events/EventForm';
import Image from 'next/image';

const CreateEvent = () => {
    const {data: session} = useSession();
    const router = useRouter();

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

    const createEvent = async (e)=> {
        e.preventDefault();
        setFormSubmit(true);
        try {
            const response = await fetch('/api/event/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
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
         <div className="flex items-center justify-center">
            <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
             width={1920} height={300} className='px-4' alt="Event Image"/>
        </div>
        <div className="w-full flex justify-center">
        <EventForm type="Create Event" event={event} setEvent={setEvent} formSubmit={formSubmit}
          handleSubmit={createEvent}/>
        </div>
      </div>
    </div>
  )
}

export default CreateEvent