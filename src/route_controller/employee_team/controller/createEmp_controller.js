const Prisma = require("../../../../config/helper");
const createEmp = async function (req, res) {
    try {
        const { body, files, params } = req;
        const { userId } = params;
        const { empName, empEmail, empPhone, empAddress, empdatebirth, empEduDegree, empDegreeDate, title, Department, Branch, PayrollGroup, jobType, Visa, VisaExpiry, AvailWorkingDays, emergencyName, relationship, emergencyMobile, positionTitle, companyName, workFrom, workTo } = body;
        console.log(req.user.id)
        console.log(body)

        if (!empName) return res.status(400).send({ status: false, message: "empName is Mandatory!!" });
        if (!empEmail) return res.status(400).send({ status: false, message: "email is required" });
        // if (!isEmail(empEmail)) return res.status(400).send({ status: false, message: "email is not valid" });
        if (!empPhone) return res.status(400).send({ status: false, message: "phone number is required" });
        if (!empAddress) return res.status(400).send({ status: false, message: "empAddress is not present" });
        if (!empEduDegree) return res.status(400).send({ status: false, message: "Education Degree is not Present" });
        if (!/^(Vocational School|Undergrad|Associate|Bachelors|Masters|Doctorate|Professional)$/.test(empEduDegree)) return res.status(400).send({ status: false, message: "Invalid Education Degree" });
        if (!empDegreeDate) return res.status(400).send({ status: false, message: "Degree Date is not present" });
        if (!title) return res.status(400).send({ status: false, message: "Title is required" });
        if (!Department) return res.status(400).send({ status: false, message: "Department is required" });
        if (!/^(Accounts|Baking Room|Cleaning|Waiters)$/.test(Department)) return res.status(400).send({ status: false, message: "Invalid Department" });
        if (!Branch) return res.status(400).send({ status: false, message: "Branch is required" });
        if (!/^(Sydney|Melbourne|Brisbane)$/.test(Branch)) return res.status(400).send({ status: false, message: "Invalid Branch" });
        if (!PayrollGroup) return res.status(400).send({ status: false, message: "Payroll is required" });
        if (!/^(Group P1|Group P2|Group P3|Group P4|Group P5)$/.test(PayrollGroup)) return res.status(400).send({ status: false, message: "Invalid Payroll Group" });
        
        // create employee
        const data = await Prisma.employee.create({
            data:{
                user:req.user.id,
                ...body
            }
        })
        res.status(200).send({data:data})
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error})
    }
}
module.exports = {createEmp}