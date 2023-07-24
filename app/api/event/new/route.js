import { dbConnection } from "@/utility/mongodb";
import Event from "@/models/event";

export const POST = async (req)=> {
    const {userId, eventType,
                   eventDesc,
                   eventDate,
                   venue,
                   numberOfGuests,
                   budget,
                   serviceRequired,
                   contact, image} = await req.json();

    try{
        await dbConnection();
        const event  = new Event({
            eventCreator: userId,
            eventType,
            eventDesc,
            eventDate,
            venue,
            numberOfGuests,
            budget,
            serviceRequired,
            contact,
            image,
        })
        await event.save();
        return new Response (JSON.stringify(event), {status: 201})
    } catch(error){
        new Response("Coudn't create an event!", {status:500})
    }
}