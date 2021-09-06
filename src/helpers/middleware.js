import { validIps } from '../config/validIp';

export const validateIp = (req, res, next) => {
  if (validIps.includes(req.connection.remoteAddress)) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: 'IP not allowed',
    });
  }
};
