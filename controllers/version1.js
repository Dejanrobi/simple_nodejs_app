const getChats = (req, res) => {
    res.status(200).json({success: true, chats: "All Chats"})
}


module.exports = {
    getChats
}