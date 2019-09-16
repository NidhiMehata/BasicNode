import { User } from '../../models/user.model';

export const saveUser = async(req, res) => {
    try{
        console.log("ok");
        var user = new User(req.body);
        console.log(user);
        user.save((err, doc) => {
            if (!err) {
                res.send(doc);
            } else {
                console.log('Error in Save');
            }
        });
    }catch(error){
        return res.status(500).send({ error });
    }
}

export const getUsers = async(req, res) => {
    console.log("IIN");
    try{
        var user = await User.find({});
        res.send(user);
    }catch(error){
        console.log(error);
        return res.status(500).send({ error });
    }
}