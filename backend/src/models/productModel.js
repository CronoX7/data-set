const{Schema, model} = require ("mongoose");

const productsSchema = new Schema(
    {
        name: { type: String, require: true},
        prize: { type: Number, require: true},
        stock: { type: Number, require: true},
        urlImage: { type: String, require: true},  
               
    }
);

module.exports= model("ProductModel", productsSchema);

