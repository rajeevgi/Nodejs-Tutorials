exports.uploadFile = (req, res) => {
    if(!req.file){
        return res.status(400).send('No File Uploaded!');
    }

    res.send(
        `
        <h2>File Uploaded Successfully...</h2>
        <p>Filename: ${req.file.filename}</p>
        <img src="/${req.file.filename}" width="200"/>
        <br><br>
        <a href="/">Upload Another</a>
        `
    );
};