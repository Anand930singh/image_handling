const express= require('express');
const app = express();
const {cloudinary} =require('./util/cloudinary');
const cors = require('cors');

app.use(cors());

// app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/api/images', async (req, res) => {
    try
    {
            const { resources } = await cloudinary.search
            .expression('folder:social_media')
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute();

            const publicIds = resources.map((file) => file.public_id);
        res.send(publicIds);
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving images.' });
      }
});

app.post('/api/upload',cors(), async (req,res)=>{
        try {
            const fileStr=req.body.data;
            const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
                upload_preset:'cd3v2h0k',
                folder: 'social_media'
            });
            console.log(uploadedResponse);
            res.json({msg:'yayayayay'});
        } catch (error) {
            console.log(error);
            res.status(500).json({err:'something went galat'} );
        }
})


const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});