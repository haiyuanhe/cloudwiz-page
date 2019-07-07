const mysql = require('mysql')
const formidable = require('formidable')
const fs = require('fs')
const path = require('path')
const db = require('../db/db')
const $newsSql = require('../db/newsSql')

let pool = mysql.createPool(db.mysql)

let NEWS_IMAGES_PATH = 'news-images'

let queryAll = (req, res, next) => {
  pool.getConnection((error, connect) => {
    if (error) {
      throw error
    } else {
      connect.query($newsSql.queryAll, (error, data) => {
        if (error) {
          throw error
        }
        res.json({
          code: '200',
          msg: 'success',
          data
        })
        connect.release()
      })
    }
  })
}

let queryById = (req, res, next) => {
  let id = +req.query.id
  pool.getConnection((error, connect) => {
    if (error) {
      throw error
    } else {
      connect.query($newsSql.queryById, id, (error, data) => {
        if (error) {
          throw error
        }
        res.json({
          code: '200',
          msg: 'success',
          data
        })
        connect.release()
      })
    }
  })
}

let add = (req, res, next) => {
  let rb = req.body
  let params = [rb.type, rb.title, rb.description, rb.occur_time, rb.url, rb.newsImg]
  pool.getConnection((error, connect) => {
    if (error) {
      throw error
    } else {
      connect.query($newsSql.add, params, (error, data) => {
        if (error) {
          throw error
        }
        res.json({
          code: '200',
          msg: 'success'
        })
        connect.release()
      })
    }
  })
}

let update = (req, res, next) => {
  let rb = req.body
  let params = [rb.type, rb.title, rb.description, rb.occur_time, rb.url, rb.newsImg, rb.id]
  pool.getConnection((error, connect) => {
    if (error) {
      throw error
    } else {
      connect.query($newsSql.update, [...params], (error, data) => {
        if (error) {
          throw error
        }
        res.json({
          code: '200',
          msg: 'success'
        })
        connect.release()
      })
    }
  })
}

let deleteNews = (req, res, next) => {
  let id = +req.query.id
  pool.getConnection((error, connect) => {
    if (error) {
      throw error
    } else {
      connect.query($newsSql.delete, id, (error, data) => {
        if (error) {
          throw error
        }
        res.json({
          code: '200',
          msg: 'success'
        })
        connect.release()
      })
    }
  })
}

let mkdirSync = dirname => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
  return false
}

let uploadImg = (req, res, next) => {
  const form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.keepExtensions = true
  form.parse(req, (err, fileds, files) => {
    if (err) {
      console.log(err)
    }
    let imgPath = fs.readFileSync(files.file.path)
    let filename = path.resolve(__dirname, `../${NEWS_IMAGES_PATH}/${files.file.name}`)
    if (mkdirSync(NEWS_IMAGES_PATH)) {
      fs.writeFile(filename, imgPath, (err) => {
        if (err) {
          console.log(err)
        }
        res.json({
          code: '200',
          msg: 'success',
          files: files.file
        })
      })
    }
  })
}

module.exports = {
  queryAll,
  queryById,
  add,
  update,
  deleteNews,
  uploadImg
}
