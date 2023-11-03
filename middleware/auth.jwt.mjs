import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.mjs";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(payload);
    const tokenValid = await User.findOne({
      where: { username: payload.username, role: payload.role },
    });
    // console.log("Token valid : " + tokenValid);
    if (!tokenValid) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send("Payload in token not valid !");
    }
    req.user = { username: payload.username, role: payload.role };
    // console.log(req.user);
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Authentication Invalid");
  }
};

export default auth;
