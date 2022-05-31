import MongoDBManager from "../../Container/mongoDBManager.js";
import config from "../../../config.js";

//MongoDB:
const schema = { 
    email: {type: String},
    name: {type: String},
    lastname: {type: String},
    nickname: {type: String},
    age: {type: String},
    avatar: {type: String},
    password: {type: String},
};

const urlConnection = config.MongoDB.URL + '/Clase26';

const collection = 'users';

export default class usersMongoDbDAO extends MongoDBManager{
    constructor(){
        super(urlConnection, collection, schema)
    }

    getUserByEmail = async (email) => {
        const userFound = await this.getDocuments('email', email);

        if( userFound[0] != null ){
            return userFound[0];
        }else{
            return false;
        }
    }
}
