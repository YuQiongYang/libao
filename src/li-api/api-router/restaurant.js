const db = require('../api-db/dbhelper')


let result;
module.exports = {
    //获取前端资料，引用db方法操作数据库
    getCt(app){
        app.get('/restaurant',async (req,res)=>{
            let type = req.query.type;
            //综合排序
            if(type=='synthesize'){
                result = await db.select('restaurant',{},"id");
            };
            //销量最高
            if(type=='highest_sales'){
                result = await db.select('restaurant',{},"recent_order_num");
            };
            //起送价最低
            if(type=='lowest_price'){
                result = await db.select('restaurant',{},"extra_fee");
            }
            //配送最快
            if(type=='fastest_delivery'){
                result = await db.select('restaurant',{},"order_lead_time");
            }
            //配送费最低
            if(type=='lowest_delivery'){
                result = await db.select('restaurant',{},"description");
            }
            //人均从低到高
            if(type=='from_low'){
                result = await db.select('restaurant',{},"recent_order_num");
            }
            //人均从高到低
            if(type=='from_high'){
                result = await db.select('restaurant',{},"recent_order_num");
            }
            //好评优先
            if(type=='comment'){
                result = await db.select('restaurant',{},"rating");
            }
            //距离最近
            if(type=='shortest'){
                result = await db.select('restaurant',{},"distance");
            }
            res.send(result);
        })
    }
}

