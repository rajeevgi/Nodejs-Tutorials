const cryptoJS = require("crypto-js");
const messageModel = require("../model/messageModel");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

exports.saveMessages = (req, res) => {
  const { content } = req.body;
  // Validate message content
  if (!content || typeof content !== "string") {
    return res
      .status(400)
      .json({ error: "Content is required and must be a string." });
  }
  try {
    const encrypted = cryptoJS.AES.encrypt(content, SECRET_KEY).toString();
    messageModel.saveMessage(encrypted, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res
        .status(201)
        .json({ message: "Message Saved...", result });
    });
  } catch (error) {
    console.error("Encryption error:", error);
    res.status(500).json({ error: "Encryption failed." });
  }
};

exports.getMessageById = (req, res) => {
  const { id } = req.params;

  messageModel.getMessageById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: "Message not found!" });
    }

    const encrypted = results[0].content;
    try {
      const bytes = cryptoJS.AES.decrypt(encrypted, SECRET_KEY);
      const decrypted = bytes.toString(cryptoJS.enc.Utf8);

      if (!decrypted) {
        return res.status(500).json({
          error:
            "Decryption failed. Possibly wrong SECRET_KEY or corrupted data.",
        });
      }

      res.status(200).json({ message: "Decrypted...", id, decrypted });
    } catch (error) {
      console.error("Decryption error:", error);
      res.status(500).json({ error: "Decryption failed." });
    }
  });
};
