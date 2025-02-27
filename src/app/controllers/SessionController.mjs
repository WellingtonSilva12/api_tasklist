import jwt from "jsonwebtoken";
import User from "../models/User.mjs";

import authConfig from "../../config/auth.js";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({
      error: "Usuário não encontrado."
    });



    if (!(await user.checkPassword(password))) return res.status(401).json({
      error: "Senha incorreta."
    });

    const { id, name } = user;
    // const token = await user.generateToken();
    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRE_IN
      })
    });
  }

}

export default new SessionController()