import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
console.log(process.env.TOKEN)
export async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
