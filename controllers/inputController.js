const InputText = require("../models/inputText");

exports.insertText = async (req, res) => {
  const { text } = req.body;

  if (!text.trim())
    return res
      .status(501)
      .json({ error: "Please provide some input to process!" });

  const inputText = new InputText({
    content: text,
  });

  await inputText.save();

  res.status(200).json({ message: "Text saved successfully!" });
};
