const { videoUploads } = require("../middlewares/videoUploads");
const { addVideo, getAllVideos } = require("../controllers/video");

const router = require('express').Router();

router.post('/upload', videoUploads.single('video'), addVideo)
.get('/videos', getAllVideos)


module.exports = router