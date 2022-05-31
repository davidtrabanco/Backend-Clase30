import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
export const _dirname = path.dirname(__filename);

export default {
    login :{
        user : null,
    },
    MongoDB:{
        URL: "mongodb+srv://davidtrabanco:74108520@cluster0.zbawm.mongodb.net",
    },
    dirname : _dirname,
}