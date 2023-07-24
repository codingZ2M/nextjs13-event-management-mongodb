"use client"

import {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' 
import UserProfile from '../components/UserProfile'

const User = () => {

const {data: session} = useSession();
const [events, setEvents] = useState([]);
const router =  useRouter();

  useEffect(()=>{
    const fetchEvents = async ()=> {
      const response = await fetch(`/api/users/${session?.user.id}/events`);
      const data = await response.json();
      setEvents(data);
    }
    if(session?.user.id) fetchEvents();
  }, [])

  const handleEdit =(event)=> {
    router.push(`/update-event?id=${event._id}`)
  }
  
  const handleDelete = async(event)=> {
      const deleteConfirm = confirm("Are you want to delete an event? ")
      if(deleteConfirm) {
        try{
          await fetch(`/api/event/${event._id.toString()}`, {
            method: 'DELETE'
          })
          const filteredEvents = events.filter((et)=>
            et._id !== event._id)

            setEvents(filteredEvents);
        } catch(error){

        }
      }
  }
  
  return (
  <>
    <section className='bg-cover bg-center py-28 sm:py-32'    
        style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1642784353725-5a79aaaaecab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          }} >
  
     <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-4 px-4 text-white text-center">
            Manage Your Memorable Events
        </h1>
        <p className="text-lg md:text-xl mb-8 px-4 text-white text-center">
            We specialize in delivering exceptional event management solutions
        </p>
    </div>
    </section>
    <UserProfile
          name="User"
          data ={events}
          handleEdit={handleEdit}
          handleDelete={handleDelete }
      />
  </>
  )
}

export default User