// import conf from "../conf/conf.js"  -> import the .env data throught the config file
import {Client, Account,ID} from "appwrite";

export class AuthService {
    client =new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);

    }

    async createAccount({email,password,name}) {
        try {
          const userAccount =   await this.account.create(ID.unique(),email,password,name)

            if(userAccount){
                // call another method
                    return this.login({email,password})
            }else{
                return userAccount;

            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async login({email,password}){
        try {
            await this.account.createEmailSession(email,password);
        }catch (error) {
            console.log(error);
        }
    }


    async getCurrentUser(){
        try {
            await this.account.get();
        }catch (error) {
            console.log(error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        }catch (error) {
            console.log(error);
        }
    }

}


const authService = new AuthService();

export default authService;

