const Count = require('../models/count')

exports.getCount =  (req, res) => {
    
    Count.findOne()
    .then((count) => {
        res.json(count);
        if(!count){
            console.log('creating count');
            return Count.create({});
        }})
        
    .catch((error) => {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to retrieve count" });
    })


    }

exports.decrementCount = (req, res) => {
    Count.findOne()
    .then((count) => {
        if(!count){
            count.log('creating count');
            return Count.create({});
        }
        count.hoursremaining-=1;
        count.save();
        res.json(count);
    })
    .catch((error) => {
        console.error(erro);
        res.status(500).json({success: false, message: "failed to decrement count"});
    })

}


exports.incrementCount = (req, res) => {
    Count.findOne()
    .then((count) => {
        if(!count){
            count.log('creating count');
            return Count.create({});
        }
        count.hoursremaining+=1;
        count.save();
        res.json(count);
    })
    .catch((error) => {
        console.error(erro);
        res.status(500).json({success: false, message: "failed to increment count"});
    })

}

exports.reset = (req, res) => {
    Count.findOne()
    .then((count) => {
        if(!count){
            count.log('creating count');
            return Count.create({});
        }
        count.hoursremaining=1000;
        count.save();
        res.json(count);
    })
    .catch((error) => {
        console.error(erro);
        res.status(500).json({success: false, message: "failed to reset"});
    })

}
