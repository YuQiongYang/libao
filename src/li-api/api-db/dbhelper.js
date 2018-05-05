const mc = require('mongodb').MongoClient;
const ar = require('../api-utils/apiResult');

var db;
var result;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('libao');
})

module.exports = {
    async select(_collection, _condition = {},type="id"){
        //综合排序
        if(type=='id'){
            result = await db.collection(_collection).find(_condition).sort({"id":1}).toArray();
            return ar(result.length > 0, result);
        }
        //销量最高
        if(type=='recent_order_num'){
            result = await db.collection(_collection).find(_condition).sort({"recent_order_num":-1}).toArray();
             return ar(result.length > 0, result);
        }
        //起送价最低
        if(type=='extra_fee'){
            result = await db.collection(_collection).find(_condition).sort({"piecewise_agent_fee.extra_fee":1}).toArray();
             return ar(result.length > 0, result);
        }
        //配送最快
        if(type=='order_lead_time'){
            result = await db.collection(_collection).find(_condition).sort({"order_lead_time":1}).toArray();
        }
        //配送费最低
        if(type=='description'){
            result = await db.collection(_collection).find(_condition).sort({"piecewise_agent_fee.description":1}).toArray();
        }
        //好评优先
        if(type=='rating'){
            result = await db.collection(_collection).find(_condition).sort({"rating":-1}).toArray();
        }
        //距离最近
        if(type=='distance'){
            result = await db.collection(_collection).find(_condition).sort({"distance":1}).toArray();
        }
        return ar(result.length > 0, result);


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


