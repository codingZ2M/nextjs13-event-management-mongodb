// contains the logic for handling authentication-related API requests.

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { dbConnection } from "@/utility/mongodb";
import User from "@/models/user";

const authenticationHandler = NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })  
    ],
    
    callbacks: {    
        async session({session}) {
            const userSession = await User.findOne({
                email: session.user.email
            })
             session.user.id = userSession._id.toString();
             return session;
        },
    
        async signIn({profile}) {
            try{
                await dbConnection();
                // if the user already exists...
                const userExists = await User.findOne({
                    email: profile.email
                })
                // if user is not existed...
                if(!userExists){
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
            }
            catch(error){
                console.log(error);
                return false;
            }
        }
    }
   
})

export {authenticationHandler as GET, authenticationHandler as POST};

/* The authenticationHandler function is exported as GET and POST, which suggests that
 this API route supports both GET and POST HTTP methods.
 */