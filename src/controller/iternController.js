const collageModel = require("../models/collageModel")
const internModel = require("../models/internModel")



// validation........................................................

const isValid = function (value) {
    if (typeof value == undefined || value == null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}


// create intern....................................................



const createIntern = async function (req, res) {

    try {
        let data = req.body;
        if (Object.keys(data) == 0) return res.status(400).send({ status: false, msg: 'BAD REQUEST' });
        if (!isValid(data.name)) return res.status(400).send({ status: false, msg: "First name is required" });
        if (!isValid(data.collegeName)) return res.status(400).send({ status: false, msg: "College name is required" });
        if (!isValid(data.mobile)) return res.status(400).send({ status: false, msg: "mobile is required" });
        if (!isValid(data.email)) return res.status(400).send({ status: false, msg: "email is required" });
        if (!/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(data.email)) return res.status(400).send({ status: false, msg: "Please provide a valid email" });
        if (!/^([+]\d{2})?\d{10}$/.test(data.mobile)) return res.status(400).send({ status: false, msg: "please provide a valid moblie Number" });

        let duplicateEmail = await internModel.findOne({ email: data.email })
        if (duplicateEmail) return res.status(400).send({ status: false, msg: "email already exists" })

        let duplicateNumber = await internModel.findOne({ mobile: data.mobile })
        if (duplicateNumber) return res.status(400).send({ status: false, msg: "mobile number already exists" })

        let collageDetail = await collageModel.findOne({ name: data.collegeName });
        if (!collageDetail) return res.status(404).send({ status: true, msg: 'collage name not found' });


        let deletedCheck = await collageModel.findOne({ name: data.collegeName, isDeleted: true });
        console.log(deletedCheck)
        if (deletedCheck) return res.status(404).send({ status: false, msg: 'Opening is been closed' })
      

        let finalData = ({ name: data.name, email: data.email, mobile: data.mobile, collegeId: collageDetail._id, isDeleted:collageDetail.isDeleted });

        let createData = await internModel.create(finalData)
        return res.status(201).send({status:true, data: createData })
    } catch (err) {
        return res.statu(500).send({ Error: err.message });
    }
    
};

// const createIntern = async function (req, res) {


//     try {

//         let data = req.body;

//         if (Object.keys(data).length > 0) {

//             if (!isValid(data.name)) { return res.status(400).send({ status: false, msg: "First name is required" }) }
//             if (!isValid(data.collegeId)) { return res.status(400).send({ status: false, msg: "College Id is required" }) }

//             if (!(/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(data.email))) {
//                 return res.status(400).send({ status: false, msg: "Please provide a valid email" })
//             }
//             if (!(/^([+]\d{2})?\d{10}$/.test(data.mobile))) {
//                 return res.status(400).send({ status: false, msg: "please provide a valid moblie Number" })
//             }

//             let dupli = await internModel.findOne({ email: data.email })

//             if (dupli) { return res.status(400).send({ status: false, msg: "Email already exists" }) }

//             let savedData = await internModel.create(data);
//             return res.status(201).send({ internDetails: savedData });

//         } else {
//             return res.status(400).send({ ERROR: "BAD REQUEST" })
//         }

//     } catch (err) {

//         return res.status(500).send({ ERROR: err.message })

//     }
// }




module.exports.createIntern = createIntern;