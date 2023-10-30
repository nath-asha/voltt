import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'PG15IN5I4KMLV3PDJ1EV',
  secretAccessKey: 'CWFjTVAz0H1VERDsjCuwpRydF5BFuHLn4NXW5GWH6',
  endpoint: 'https://s3.ap-northeast-1.wasabisys.com',
});

export const s3 = new AWS.S3();
