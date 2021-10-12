const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const connection = require("../settings/db");

exports.login = async (req, res) => {
    try {
        const user = req.body.user;
        const pass = req.body.pass;
        if(!user){
            res.json("Debe ingresar un usuario")
        }
        else if(!pass){
            res.json("Debe ingresar una contraseña")
        }else{
            connection.query('SELECT * FROM user WHERE user = ?', [user], async(error, results) => {
                if(results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass))){
                    res.json("Usuario o Contraseña incorrecta")
                }else{
                    const token = jwt.sign({
                        data: 'foobar'
                      }, 'secret', { expiresIn: '1h' });
                    res.json(token)
                }
            })
        }
    } catch (error) {
        
    }
}