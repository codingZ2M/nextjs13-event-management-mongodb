import React from 'react'
import Link from 'next/link'

const EventForm = ({type, event, setEvent, formSubmit, handleSubmit}) => {

  return (
    <section className='w-full px-6 sm:px-8  flex flex-col my-6 sm:my-12 pb-10'>
        <p className='text-lg sm:text-3xl font-normal text-[#14213D] w-full'>
          {type}
        </p>
        <form onSubmit={handleSubmit} className='mt-6 sm:mt-10 w-full flex flex-col gap-6 text-base'>
            <textarea value={event.eventDesc} onChange={(e)=> setEvent({...event, eventDesc: e.target.value})}
                     placeholder='Write about your event..' required className='w-full border border-gray-300 py-6 rounded-md p-2'/>
            
            <input value={event.eventType} onChange={(e)=> setEvent({...event, eventType: e.target.value})}
                    placeholder='Event Type' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <input value={event.eventDate} onChange={(e)=> setEvent({...event, eventDate: e.target.value})}
                    placeholder='Event Date' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <input value={event.venue} onChange={(e)=> setEvent({...event, venue: e.target.value})}
                    placeholder='Venue' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <input value={event.numberOfGuests} onChange={(e)=> setEvent({...event, numberOfGuests: e.target.value})}
                    placeholder='Number Of Guests' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <input value={event.budget} onChange={(e)=> setEvent({...event, budget: e.target.value})}
                    placeholder='Budget' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <input value={event.serviceRequired} onChange={(e)=> setEvent({...event, serviceRequired: e.target.value})}
                    placeholder='Service Required' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <input value={event.contact} onChange={(e)=> setEvent({...event,  contact: e.target.value})}
                    placeholder='Contact' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>
            
            <input value={event.image} onChange={(e)=> setEvent({...event,  image: e.target.value})}
                    placeholder='Enter image URL' required className='w-full border border-gray-300 py-4 rounded-md p-2'/>

            <div className='flex gap-4 justify-end items-center'>
              <Link href="/" className='text-sm font-semibold text-[#14213D]'>
                  Cancel
              </Link>
              <button type='submit' disabled={formSubmit}
                      className="bg-blue-500 text-white py-3 px-12 rounded-lg shadow-lg font-medium hover:bg-[#14213D] hover:text-white transition duration-300">
                  {formSubmit ? `${type}...`: type}
              </button>
            </div>
        </form>
     
    </section>
  )
}

export default EventForm