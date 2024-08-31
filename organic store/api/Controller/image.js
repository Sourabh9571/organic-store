import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Construct the absolute path to the upload directory
        const uploadDir = join(__dirname, '../../client/public/upload');
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Corrected function definition
export const uploadimage = (req, res) => {
    // Assuming you are using 'file' as the field name in your form
    upload.single('file')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(400).json('Multer Error: ' + err.message);
        } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(500).json('Unknown Error: ' + err.message);
        }

        // Everything went fine.
        if (!req.file) {
            return res.status(400).json('No file uploaded');
        }
        const fileName = req.file.filename;
        return res.status(200).json(fileName);
    });
};
export const deleteimage = (req, res) => {
    const  filename  = req.params.filename;  

    if (!filename) {
        return res.status(400).json('Filename is required');
    }

    const filePath = join(__dirname, '../../client/public/upload', filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File doesn't exist
                return res.status(404).json('File not found');
            }
            // Other errors
            return res.status(500).json('Error deleting file: ' + err.message);
        }

        return res.status(200).json('File deleted successfully');
    });
};

