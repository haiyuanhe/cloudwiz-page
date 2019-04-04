# cloudwiz-website

> cloudwiz website

## **Jenkins Build please modify the version in [package.json](package.json)**

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# node server + vue
npm run start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Mysql
  * 配置见 [db.js](server/db/db.js)
  * 详见 [news.sql](server/db/newsSql.js)


## [Node Server](server/app.js)

#### 启动 
```javascript
  node server/app.js
  or
  nohup node server/app.js &
```

#### [Router](server/routers/router.js)
