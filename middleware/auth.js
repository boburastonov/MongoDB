import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.json({ error: "Token mavjud emas" });

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    res.json({ error: "Token noto'g'ri yoki muddati o'tgan" });
  }
}
