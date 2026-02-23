import { query } from "../config/db.js";

export async function getData(req, res) {
    try {
        const result = await query("SELECT * from notes");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}
