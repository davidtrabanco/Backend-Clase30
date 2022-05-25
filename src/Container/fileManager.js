import fs from "fs";

export default class FileManager{
    constructor(fileName){
        this.path=fileName;
    }
    
    async readFile(){
        try {
            let content = await fs.promises.readFile(this.path,'utf-8');
            const data = JSON.parse(content);
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    async save(data){
        try {
            const content = JSON.stringify(data);
            await fs.promises.writeFile(this.path , content)
        } catch (error) {
            console.error(error);
        } 
    }

    async addData(data){
        try {
            let arrayTemp = await this.readFile();
            arrayTemp.push(data);
            this.save(arrayTemp);
        } catch (error) {
            console.error(error);
        } 
    }
};