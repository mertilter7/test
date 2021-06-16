const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()

const getNews = async ( req , res ) => {
    try {
        let News = await prisma.news.findMany()
        res.json(News)                         
    } catch (error) {
        console.log(News)
    }
}
const getNewsById = async ( req , res) => {
    try {
        let { id } = req.params
        let NewsId = await prisma.news.findFirst({               
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
        let sampleFile = req.files.sampleFile;
        let uploadPath = __dirname + '/upload' + sampleFile.name;
        let news = await prisma.news.create({
            data : {
                title,
                subtitle,
                description,
                sampleFile,
                uploadPath
            }
        })
        res.json(news)
    } catch (error) {
        console.log(news)
    }
}

// const addPhotos = async ( req , res) => {
//     try {
//         let { sampleFile , uploadPath } = req.body
//         let photos = await prisma.news.create({
//             data: {}
//         })

//         if (!req.files || Object.keys(req.files).length === 0) {
//             return res.status(400).send('No files were uploaded')
//         }
//         sampleFile = req.files.sampleFile;
//         uploadPath = __dirname + '/upload/' + sampleFile.name;
//         sampleFile.mv(uploadPath, function (err) {
//             if (err) return res.status(500).send(err);
//             res.send('file uploaded!')
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

const deleteNews = async (req, res) => {
    try {
      let { id } = req.params;
      let checkNews = await prisma.news.findFirst({
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

