import { prisma } from "../../../../generated/prisma-client"

export default{
     Mutation:{
          createAcount : async(_, args,) => {
               console.log(prisma)
               const { username, email, firstName="", lastName="", bio="" } = args;
               const user = await prisma.createUser({
                    username,
                    email, 
                    firstName, 
                    lastName, 
                    bio
               })
               return user;
               //return null
          }
     }
}