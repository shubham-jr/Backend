const uploadfile= async function (req,res){
    console.log(req.files)
    res.status(200).json({
      msg: req.files
    })
  }

module.exports = {uploadfile}