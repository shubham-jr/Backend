const Prisma = require("../../../../config/helper");
async function item_create(req, res) {
  const { body } = req;
  try {
    const data = await Prisma.Item.create({
      data: {          
        user  : req.user.id,          
        ItemName  : body.ItemName,      
        Supplier  : body.Supplier,       
        Branches  : body.Branches,       
        InventoryCategory: body.InventoryCategory,
        Brand   : body.Brand,         
        productImage  : body.productImage,   
        PackageType  : body.PackageType,    
        QtyPerPackage  : body.QtyPerPackage,  
        PurchaseWith    : body.PurchaseWith, 
        PricePerPackage : body.PricePerPackage, 
        InStock     : body.InStock,     
        valueInStock  : body.valueInStock,   
      },
    });
    return res.status(200).json({
      message: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      json: error,
    });
  }
}
module.exports = { item_create };
