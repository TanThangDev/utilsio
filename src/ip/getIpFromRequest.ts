import { Request } from 'express';

type IRequestExtend = Request & { client: any; socket: any };

export const getIpFromRequest = (req: IRequestExtend): string => {
  let ip;
  try {
    ip = req.headers['X-Forwarded-For'] || req.headers['x-forwarded-for'];
    if (typeof ip === 'object') ip = ip.split(',')[0];
    if (!ip) ip = req.client.remoteAddress || req.socket.remoteAddress;
    ip = typeof ip === 'string' ? ip.replace('::ffff:', '') : ip;
    return ip;
  } catch (_) {
    return '';
  }
};
