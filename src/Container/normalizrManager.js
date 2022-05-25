import {denormalize, normalize, schema} from "normalizr";
import util from "util";

const print = (objecto)=>{
    console.log( util.inspect(objecto,true, 12, true) );
}

export default class NormalizerManager{

    constructor( schema ){
        this.schema= schema;
    }

    normalize = ( data )=>{
        const dataNormalized = normalize( data, this.schema );

        const compressionRate = ( (JSON.stringify(dataNormalized).length * 100) / JSON.stringify( data ).length )
        
        return {
            dataNormalized: dataNormalized,
            compressionRate : compressionRate.toFixed(2),
        }
    }

    denormalize = (dataNormalized)=>{
        return denormalize( dataNormalized.result, this.schema, dataNormalized.entities)
    }

}



