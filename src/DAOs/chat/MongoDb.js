import MongoDBManager from "../../Container/mongoDBManager.js";

//MongoDB:
const schema = { 
    author: {
        email: {type: String},
        name: {type: String},
        lastname: {type: String},
        age: {type: String},
        nickname: {type: String },
        avatar: {type: String}
    },
    text : {type: String},
};

const urlConnection = `mongodb+srv://${'davidtrabanco'}:${'74108520'}@cluster0.zbawm.mongodb.net/${'chat'}`;

const collection = 'messages';

export default class MongoDbDAO extends MongoDBManager{
    constructor(){
        super(urlConnection, collection, schema)
    }
}

