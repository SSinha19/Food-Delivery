const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://soumya:EmeXHm1eQDUXq1Bm@cluster0.ycau4g2.mongodb.net/Bingefood?retryWrites=true&w=majority";
const mongoURI ='mongodb+srv://soumya:EmeXHm1eQDUXq1Bm@cluster0.ycau4g2.mongodb.net/Bingefood?retryWrites=true&w=majority'
const mongoDB = async () => {
  await mongoose.connect(mongoURI, {useNewUrlParser: true}).then(async ()=>{
        
            
            const fetchedData = await mongoose.connection.db.collection("Food_items").find({}).toArray();
            const foodCategory= await mongoose.connection.db.collection("foodCategory").find({}).toArray();
            console.log('connected');
            // fetchedData.find(function (err, fetchedDatas) {
            //   if (err) return console.error(err);
            //   console.log(fetchedDatas);
            // });

            // fetchedData.find(function (fetchedDatas, err) {
            //   foodCategory.find(function(foodCategories, err) {
            //       global.food_items=fetchedDatas;
            //       global.foodCategory=foodCategories;
            //   })
            // });
            let arr1 = [];
            let arr2 = [];
            fetchedData.forEach((item)=>{
              arr1.push(item);
            });
            global.food_items = arr1;
            foodCategory.forEach((item)=>{
              arr2.push(item);
            }); 
            global.foodCategory=arr2;        
        //     fetched_data.find({}).toArray(function(err, data){
        //       console.log("hi")
        //         foodCategory.find({}).toArray(function(err,catData){
        //         if(err) console.log("-->", err);
        //         else {
        //           console.log(data);
        //            global.food_items=data;
        //            global.foodCategory=catData}
        //       })
        // });
      });
}

module.exports = mongoDB;
