import multer from 'multer';
import  path from 'node:path';
import fs from 'node:fs';
export const multerConfig = multer.diskStorage({
    destination:async(req, file, cb) =>{
        if(!fs.existsSync(path.resolve(__dirname, '..', '..', 'uploads'))){
            fs.mkdirSync(path.resolve(__dirname, '..', '..', 'uploads'));
        }

        if((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file.originalname)){
            cb(null,path.resolve(__dirname, '..', '..', 'uploads'));
        }


    },
    filename:(req, file, cb) =>{
        cb(null, file.fieldname  + '-' + Date.now() +  '-' + file.originalname);
    }
});
