const user = require('../models/user');

const Ajouter = async (req, res) => {
    const { email, password } = req.body;

    const NewUser = new user({
        email,
        password
    });

    try {
        await NewUser.save();
    } catch (error) {
        res.status(500).json({message: "something went wrong with DB", error: error})
    }
    
    res.status(201).json({message: "success", data: NewUser});
}


const GetAll = async (req, res) => {

    let existinguser;
    try {
        existinguser = await user.find();
    } catch (error) {
        res.status(500).json({message: "something went wrong with DB", error: error})
    }

    res.status(200).json({message: "success", data: existinguser});

}

const FindById = async(req, res) => {

    const { id } = req.params;

    let existinguser;
    try {
        existinguser = await user.findById(id);
    } catch (error) {
        return res.status(500).json({message: "something went wrong with DB", error: error})
    }
    
    if (!existinguser) {
        return res.status(405).json({message: "User Doesn't Exist!!"})
    }
    
    return res.status(200).json({message: "success", data: existinguser});

}

const Delete = async(req, res) => {

    const { id } = req.params;

    let existinguser;
    try {
        existinguser = await user.findById(id);
    } catch (error) {
        return res.status(500).json({message: "something went wrong with DB", error: error})
    }
    
    if (!existinguser) {
        return res.status(405).json({message: "User Doesn't Exist!!"})
    }
    
    try {
        await existinguser.remove();
    } catch (error) {
        return res.status(500).json({message: "something went wrong with DB", error: error})
    }
    
    return res.status(200).json({message: "deleted succesfully"});

}

exports.Ajouter = Ajouter 
exports.GetAll = GetAll 
exports.FindById = FindById 
exports.Delete = Delete 