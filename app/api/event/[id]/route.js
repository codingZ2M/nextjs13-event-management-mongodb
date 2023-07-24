import { dbConnection } from "@/utility/mongodb";
import Event from "@/models/event";

export const GET = async (req, {params}) =>{
    try {
        await dbConnection();
        const event = await Event.findById(params.id).populate('eventCreator');
        if(!event)
            return new Response("Event not found!", {status: 404});

        return new Response(JSON.stringify(event), { status:200  })  
    }
    
    catch(error){
        return new Response("Not able to fetch events", { status:500  })
    }
}

export const PATCH = async (req, {params})=> {
    const { eventType,
            eventDesc,
            eventDate,
            venue,
            numberOfGuests,
            budget,
            serviceRequired,
            contact,
            image} = await req.json();

    try {
        await dbConnection();
        const existingEvent = await Event.findById(params.id);
        if(!existingEvent)
            return new Response("Event is not found", {status:404})

            existingEvent.eventType = eventType,
            existingEvent.eventDesc = eventDesc,
            existingEvent.eventDate = eventDate,
            existingEvent.venue = venue,
            existingEvent.numberOfGuests = numberOfGuests,
            existingEvent.budget = budget,
            existingEvent.serviceRequired = serviceRequired,
            existingEvent.contact = contact,
            existingEvent.image = image,

            await existingEvent.save();
            return new Response(JSON.stringify(existingEvent), {status:200})
    } catch(error){
        return new Response("Falild to update", {status:404})
    }
}

export const DELETE = async(req, {params})=> {
    try{
        await dbConnection();
        await Event.findByIdAndRemove(params.id);
        return new Response("Event Deleted", {status:200})
    }catch(error){
        return new Response("Falild to delete", {status:404})
    }
}