import MongoDbDAO from "./chat/MongoDb.js";
import NormalizerDAO from "./chat/Normalizer.js";


export const chatDbDAO = new MongoDbDAO ();
export const chatNormalizerDAO = new NormalizerDAO();
