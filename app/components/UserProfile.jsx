import React from 'react'
import EventCard from './events/EventCard'

const UserProfile = ({name, data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 sm:px-12 mt-6 sm:mt-20 mb-12'>
        { data.map( (event)=>(
            <EventCard key={event._id} 
              event={event} 
              handleEdit={()=> handleEdit && handleEdit(event)}
              handleDelete ={()=> handleDelete && handleDelete(event)}/>
        ))}
      </div>
    </section>
  )
}

export default UserProfile