import { query } from "../config/db.js"
import { hash_password } from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        const email = req.body.email;
        const password = hash_password(req.body.password);
        const result = await query('INSERT INTO users(email, password_hash) VALUES($1, $2) RETURNING id', [email, password]);
        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({ error: "Email already exists" });
        }
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req, res) => {
    try {
        res.json(req.body);
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}
