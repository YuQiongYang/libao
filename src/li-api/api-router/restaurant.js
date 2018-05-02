const db = require('../api-db/dbhelper')

module.exports = {
    //获取前端资料，引用db方法操作数据库
    getCt(app){
        app.get('/restaurant',async (req,res)=>{
            let type = req.query.type;
            if(type=='synthesize'){
                let result = await db.select('restaurant',{},"id");
                res.send(result);
            };
            if(type=='highest_sales'){
                let result = await db.select('restaurant',{},"recent_order_num");
                res.send(result);
            };
            if(type=='lowest_price'){
                let result = await db.select('restaurant',{},"extra_fee");
                res.send(result);
            }
            if(type=='fastest_delivery'){
                let result = await db.select('restaurant',{},"recent_order_num");
                res.send(result);
            }
            if(type=='lowest_delivery'){
                let result = await db.select('restaurant',{},"recent_order_num");
                res.send(result);
            }
            if(type=='from_low'){
                let result = await db.select('restaurant',{},"recent_order_num");
                res.send(result);
            }
            if(type=='from_high'){
                let result = await db.select('restaurant',{},"recent_order_num");
                res.send(result);
            }
        })
    }
}

