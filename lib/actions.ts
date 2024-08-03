"use server"

import prisma from "./db"

export const addProject = async (title: string) => {
    let err, res;
    try{
        const data = await prisma.project.create({
            data:{
                title
            }
        })
       res = data
    } catch(error){
        err = err
    }

    return { err, res}
}