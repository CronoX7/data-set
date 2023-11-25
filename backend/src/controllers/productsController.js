const ProductModel = require("../models/productModel");

const ProductsController = {
  readAll: async(request,response) => {
try{
    const allProducts= await ProductModel.find();
    const copyProducts = allProducts.map(
      ({_id, name, prize, stock, urlImage}) => {
        return{_id, name, prize, stock, urlImage}
      }
    )
    response.json(copyProducts);
}catch(error){
    response.send("was ocurred an error");
}

  },

  create: async (request, response) => {
    try {
      const { name, prize, stock, urlImage } = request.body;
      const newProduct = new ProductModel({
        name,
        prize,
        stock,
        urlImage,
      });

      const createProduct = await newProduct.save();
      if (createProduct) {
        response.json(createProduct);
      } else {
        response.json("Something was wrong");
      }
    } catch (error) {}
  },

  update: async (request, response) => {
    try {
        const updateProduct= await ProductModel.findByIdAndUpdate(
            request.params.id,
            request.body
        );

        if (updateProduct){
            response.json({ data: request.body, msg: "product was updated"})
        }else{
            response.json({msj: "product wasn't updated"}).status(500);
        }

    } catch (error) {
        
    }

  },
  remove: async(request, response) => {
    try {
        const removeProduct = await ProductModel.findByIdAndDelete(
            request.params.id            
        )
        if (removeProduct){
            response.json({msg: "product was deleted"})
        }else{
            response.json({msg: "product wasn't deleted"})            
        }

    } catch (error) {
        
    }
  },
};

module.exports = ProductsController;
