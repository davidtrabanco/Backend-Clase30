import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
export const _dirname = path.dirname(__filename);

export default {
    login :{
        user : null,
    },
    dirname : _dirname,
}