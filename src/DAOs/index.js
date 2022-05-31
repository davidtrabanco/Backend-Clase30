import chatMongoDbDAO from "./chat/MongoDb.js";
import NormalizerDAO from "./chat/Normalizer.js";
import usersMongoDbDAO from "./users/usersMongoDB.js";

export const chatDbDAO = new chatMongoDbDAO ();
export const chatNormalizerDAO = new NormalizerDAO();
export const usersDbDAO = new usersMongoDbDAO();