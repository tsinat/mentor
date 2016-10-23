import User from '../models/user';

export function signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, user) => {
        if(err) {
            
        }
    });
    res.send(email);
}
