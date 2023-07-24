import {Schema, model, models} from "mongoose";


const EventSchema = new Schema({
    eventCreator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    eventType: {
        type: String,
        required: [true, "Event Type is required!"],
    },
    eventDesc: {
        type: String,
        required: [true, "Event Description is required!"],
    },
    eventDate: {
        type: String,
        required: [true, "Event Date is required!"],
    },
    venue: {
        type: String,
        required: [true, "Venue is required!"],
    },
    numberOfGuests: {
        type: Number,
        required: [true, "Number Of Guests is required!"],
    },
    budget: {
        type: Number,
        required: [true, "Budget is required!"],
    },
    serviceRequired: {
        type: String,
        required: [true, "Service Required is required!"],
    },
    contact: {
        type: String,
        required: [true, "Contact is required!"],
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
    },
})

const Event = models.Event || model("Event", EventSchema);

export default Event;
