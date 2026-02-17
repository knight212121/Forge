exports.getData = async (req, res) => {
    try {
        const temp_data = {
            id: "1",
            title: "Theory of Computation",
            content: "I hated this subject at first but after I have completed my engineering, I realise how beautiful this subject is",
            createdAt: "17-02-26",
            tags: ["hei", "hello"]
        };
        res.status(200).json({ success: true, data: temp_data });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
}
