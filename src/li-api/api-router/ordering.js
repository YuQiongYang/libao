const db = require('../api-db/dbhelper.js');
const jwt = require('jsonwebtoken');
const apiResult = require('../api-utils/apiResult');

module.exports = {
  register(app) {
    app.get('/ordering', async (req, res) => {
      let result = await db.select('foods');
      res.send(result)
//    if (result.status) {
//      // req.session.user = result.data[0];
//      let token = jwt.sign({
//        menus
//      }, '123456', {
//        expiresIn: 60 * 60
//      });
//      let ar = apiResult(result.status, token);
//      // console.log(ar)
//      res.send(ar);
//    } else {
//      res.send(result);
//    }
    })
  }
}