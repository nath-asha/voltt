import { Request } from 'express';
import MulterS3 from 'multer-s3';
import multer, { StorageEngine } from 'multer';
import aws, { S3 } from 'aws-sdk';
import { RequestHandler } from 'express';

import dotenv from 'dotenv';
import { S3Client } from '@aws-sdk/client-s3';
dotenv.config();

interface CustomPresignOptions {
  Bucket: string;
  Key: string;
  Expires: number;
}

// Configure AWS S3 client
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY as string,
  secretAccessKey: process.env.AWS_SECRET_KEY as string,
  endpoint: 'https://s3.wasabisys.com',
});

// Function to generate a 12-hour pre-signed URL for public access
const generatePublicPresignedUrl = (key: string): string => {
  const params: CustomPresignOptions = {
    Bucket: process.env.WASABI_BUCKET as string,
    Key: key,
    Expires: 43200, // 12 hours (12 hours * 3600 seconds)
  };
  return s3.getSignedUrl('getObject', params);
};

const s3Config = new S3Client({
    region: 'ap-northeast-1',
    credentials:{
       accessKeyId:'7VWG9FXC9O5M5XMJMMZI',
       secretAccessKey:'zdgnnTZ4lHPlYWz3zd5wAc2XRO2G3HRJXIsrQ7qI'
   }
 })

// Configure Multer for file uploads to Wasabi
const storage: StorageEngine = MulterS3({
  s3:s3Config, // Pass the s3 object directly here
  bucket: process.env.WASABI_BUCKET as string,
  key: (req: Request, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void) => {
    cb(null, 'post/' + Date.now() + '_' + file.originalname);
  },
  acl: 'public-read', // Set the ACL to 'public-read' for public access
});



const upload: RequestHandler = multer({ storage }).single('file');

// const upload: RequestHandler = multer({ storage }) as unknown as RequestHandler;

export { upload, generatePublicPresignedUrl, s3 };
