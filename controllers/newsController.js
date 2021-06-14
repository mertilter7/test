const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()


const getNews = async ( req , res ) => {
    try {
        let News = await prisma.News.findMany()
        res.json(News)
    } catch (error) {
        console.log(News)
    }
}

const getNewsById = async ( req , res) => {
    try {
        let { id } = req.params
        let NewsId = await prisma.NewsId.findFirst({
            where : { id : parseInt(id)}
        })
        res.json(NewsId)
    } catch (error) {
        console.log(NewsId)
    }
}

const createNews = async ( req , res ) => {
    try {
        let { title , subtitle , description } = req.body
        let news = await prisma.news.create({
            data : {
                title,
                subtitle,
                description,
            }
        })
        res.json(news)
    } catch (error) {
        console.log(news)
    }
}

const deleteNews = async (req, res) => {
    try {
      let { id } = req.params;
      let checkNews = await prisma.News.findFirst({
        where : { id : parseInt(id) }
      })
     if (checkNews) {
        await prisma.news.delete({
        where : { id: parseInt(id)}
      })
      res.json({msg: 'Haber Silindi'})
    } else {
      res.json({msg: 'Haber Bulunamadi'})
    }
      
    } catch (error) {
      console.log(error)
    }
  }

  module.exports = {
      deleteNews,
      createNews,
      getNewsById,
      getNews,
  };