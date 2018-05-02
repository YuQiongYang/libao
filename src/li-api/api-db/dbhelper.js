const mc = require('mongodb').MongoClient;
const ar = require('../api-utils/apiResult');

var db;
var result;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('libao');
})

module.exports = {
    async select(_collection, _condition = {},type="id"){
        //商品排序判断
        if(type=='id'){
            result = await db.collection(_collection).find(_condition).sort({"id":1}).toArray();
            return ar(result.length > 0, result);
        }
        if(type=='recent_order_num'){
            result = await db.collection(_collection).find(_condition).sort({"recent_order_num":1}).toArray();
            return ar(result.length > 0, result);
        }
        if(type=='extra_fee'){
            result = await db.collection(_collection).find(_condition).sort({"piecewise_agent_fee.extra_fee":-1}).toArray();
            return ar(result.length > 0, result);
        }
        

        //根据id获取数据
        







    }
}


// const mongodb = require('mongodb');
// const apiResult = require('./apiResult')
// const mc = mongodb.MongoClient;

// var db = null;

// //mc.connect('mongodb://localhost:27017')是一个promise对象
// mc.connect('mongodb://localhost:27017', (error, client) => {
//   db = client.db('libao');
// })

// module.exports = {
//   async select(_collection, _condition = {},type="id") {
//     try {
//       let items = await db.collection(_collection).find(_condition).toArray();
//       let result = apiResult(items.length > 0, items);
//       // console.log(_condition)
//       return result;
//     } catch (error) {
//       return apiResult(false, error);
//     }
//   },
//   async insert(_collection, _data) {
//     try {
//       let result = await db.collection(_collection).insert(_data);
//       return apiResult(result.insertedCount > 0, result.result);
//     } catch (error) {
//       return apiResult(false, error);
//     }
//   },
//   async update(_collection) {
//     try {
//       let result = await db.collection(_collection).update();
//     } catch (e) {
//       return apiResult(false);
//     }
//   },
//   async delete() {
//     try {
//       let result = await db.collection(_collection).remove();
//       return apiResult(true);

//     } catch (e) {
//       return apiResult(false);
//     }
//   } 
// }


