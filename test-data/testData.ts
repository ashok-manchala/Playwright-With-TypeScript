import dotenv from "dotenv";
dotenv.config();

export default{
appUrl: process.env.appURL,
userName: process.env.userName,
password: process.env.password,

}