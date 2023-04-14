import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler"

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export const googleAuthUser = asyncHandler(async (req, res) => {
  console.log(req.body)
  const profile = req.body;
  if (profile.email) {
    const user = await User.findOne({ email: profile.email });
    if (!user) {
      const newUser = new User({
        name: profile.name,
        email: profile.email,
        password: bcrypt.hashSync(profile.email, 10),
      });
      const createdUser = await newUser.save();
      if (!createdUser) {
        res.status(401);
        throw new Error("Failed to create user");
      } else {
        res.json({
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          
          token: generateToken(createdUser._id),
        });
      }
    } else {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      
        token: generateToken(user._id),
      });
    }
  }
  else {
    res.status(400);
    throw new Error("Failed to authenticate with Google");
  }
})
export const registerUser = asyncHandler(async (req, res) => {
 
  
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(404);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,

        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  
});
