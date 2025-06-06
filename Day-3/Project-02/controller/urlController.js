const Url = require('../model/Url');
const { nanoid } = require('nanoid');

// Short The Url
exports.shortenUrl = async (req, res) => {
    const { redirectUrl } = req.body;
    if(!redirectUrl) return res.status(400).json({ message : "Url is required!" });

    const shortId = nanoid(6); // In will convert the original url and store it in shortId

    try {
        await Url.create({ shortId, redirectUrl});
        res.json({ shortId });
    } catch (error) {
        res.status(500).json({ message : "Internal Server Error"});
    }
}

// Redirect The Url
exports.getOriginalUrl = async (req, res) => {
    const { shortId } = req.params;
    try {
        const url = await Url.findOne({ shortId });
        if(url){
            return res.status(200).json({ message : "The Original url :" + url.redirectUrl });
        }else{
            res.status(404).json({ message : "Url not found!" });
        }
    } catch (error) {
        res.status(500).json({ message : "Internal Server Error!" });
    }
}

