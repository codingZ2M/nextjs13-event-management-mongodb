import { dbConnection } from "@/utility/mongodb";
import Event from "@/models/event";

export const GET = async (req, {params}) =>{
    try {
        await dbConnection();
        params.id
        const events = await Event.find({
            eventCreator: params.id
        }).populate('eventCreator');
        console.log(events)
        return new Response(JSON.stringify(events), { status:200  })  
    }
    
    catch(error){
        return new Response("Not able to fetch events", { status:500  })
    }
}
