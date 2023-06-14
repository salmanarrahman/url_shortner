/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = createTRPCRouter({
 

    getById: publicProcedure.input(z.string()).query(({ input }) => {
        return prisma.urls.findMany({
          where: {
            shrinked: input,
          },select:{
            address:true
        }
        });
      }),

  
 
    shortenUrl : publicProcedure.input(
      z.object({
          address: z.string(),
          shrinked: z.string()
      })
  )
  .mutation(
      async ({input })=>{
          const {address,shrinked} = input

          const newUrl = await prisma.urls.create({
              data:{
                  address,
                  shrinked
              },
          });

          return newUrl;

      }
  ),
  
})
