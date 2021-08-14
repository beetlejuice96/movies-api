const { MongoClient,ObjectId } = require("mongodb")
const { config } = require("../config")

const USER=encodeURIComponent(config.dbUser);
const PASSWORD= encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib{
    constructor(){
        this.client = new MongoClient(MONGO_URI,{userNewUrlParser:true});
        this.dbName=DB_NAME
    }

    connect (){
        if(!MongoLib.connetion){
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err=>{
                    if(err){
                        reject(err)
                    }
                    console.log("Connected successfully to mongo")
                    resolve(this.client.dbName)
                })
            })
            
        }
        return MongoLib.connection;
    }
}

module.exports = MongoLib;