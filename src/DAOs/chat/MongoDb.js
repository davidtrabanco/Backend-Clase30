import MongoDBManager from "../../Container/mongoDBManager.js";
import config from "../../../config.js";

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

const urlConnection = config.MongoDB.URL + '/Clase26';

const collection = 'messages';

export default class chatMongoDbDAO extends MongoDBManager{
    constructor(){
        super(urlConnection, collection, schema)
    }
}

