import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.mjs";
import { StatusCodes } from "http-status-codes";
import * as EmailValidator from "email-validator";

const app = express();

const createAccessToken = (username, role) => {
  return jwt.sign(
    { username: username, role: role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "60m",
    }
  );
};

const createRefreshToken = (username, role) => {
  return jwt.sign(
    { username: username, role: role },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide valid email !" });
  }

  if (!EmailValidator.validate(email)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide valid email !" });
  }

  const userAlreadyExists = await User.findOne({
    where: { username: username },
  });
  if (userAlreadyExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "username is already in use !" });
  }
  const emailAlreadyExists = await User.findOne({ where: { email: email } });
  if (emailAlreadyExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "email is already in use !" });
  }
  const user = await User.create({
    username,
    email,
    password: await bcrypt.hash(password, 10),
    role: "user",
  });
  const accessToken = createAccessToken(username, user.role);
  const refreshToken = createRefreshToken(username, user.role);
  res.status(StatusCodes.OK).json({
    user: user,
    accessToken,
    refreshToken,
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all value !" });
  }
  var user = await User.findOne({ where: { username: username } });
  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "username is not exists !" });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "password is not correct !" });
  }
  const accessToken = await createAccessToken(username, user.role);
  const refreshToken = await createRefreshToken(username, user.role);
  res.status(StatusCodes.OK).json({
    user,
    accessToken,
    refreshToken,
  });
};

const refreshTokenValidate = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({
      where: { username: payload.username, role: payload.role },
    });
    console.log("Token valid : " + tokenValid);
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send("Payload in token not valid !");
    }
    const { username, role } = payload;
    const accessToken = await createAccessToken(username, role);
    const refreshToken = await createRefreshToken(username, role);
    res.status(StatusCodes.OK).json({ user, accessToken, refreshToken });
  } catch (error) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ msg: "Refresh Token was expired!" });
  }
};

export { register, login, refreshTokenValidate };
