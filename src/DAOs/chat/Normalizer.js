import {schema} from "normalizr";
import NormalizerManager from "../../Container/normalizrManager.js";


//defino los esquemas:
const authorSchema = new schema.Entity("author",{}, {idAttribute: 'email'})

const messageSchema = new schema.Entity("message", {
    author: authorSchema
}, {idAttribute: '_id'})

const messagesSchema = new schema.Entity("messages", {
    messages: [messageSchema],
})

export default class NormalizerDAO extends NormalizerManager{
    constructor(){
        super(messagesSchema)
    }
}

