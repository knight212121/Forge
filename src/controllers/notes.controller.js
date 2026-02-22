const db = require("../config/db");

exports.getData = async (req, res) => {
    try {
        const result = await db.query("SELECT * from users");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}
