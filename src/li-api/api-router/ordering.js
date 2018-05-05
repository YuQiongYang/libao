const db = require('../api-db/dbhelper.js');
const jwt = require('jsonwebtoken');
const apiResult = require('../api-utils/apiResult');
const request = require('request');

module.exports = {
  register(app) {
    app.get('/ordering',  (req, res) => {
        let id = req.query.id;
//      console.log(id)
          request.get('https://h5.ele.me/restapi/shopping/v2/menu?restaurant_id='+id, (error, response, body) => {
            body = JSON.parse(body);
//          console.log(body[0].foods)
            let details =[];
            for(let items of body){
                details.push({
                    menus:items['name'],
                    foods:items['foods']
                })
                                        
            }
                        res.send(apiResult(true,details));
          })
          
//        console.log(req.query)
    })
  }
}