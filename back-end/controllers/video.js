const videoSchema = require(`../models/videoModel`);

exports.addVideo = async (req, res) => {
    const {title, description} = req.body;
    const videoPath = req.file.path;

    console.log(req.file);

    const video = new videoSchema({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath
    })

    try {
    await video.save();
    res.status(200).json({
        message: `video sucessfully uploaded`, video
    })
    
} catch (error) {
    res.status(400).json({
        message: `video upload failed`, error
    })
    
}
}

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await videoSchema.find({})
    } catch (error) {
        res.status(200).json({
            message: `videos fetch failed`,error
        })
    }
}