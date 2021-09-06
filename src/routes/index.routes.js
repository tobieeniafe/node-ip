import express from 'express';
import IndexController from '../controllers/index.controllers';
import { validateIp } from '../helpers/middleware';

const router = express.Router();

router.get('/', validateIp, IndexController.get);

module.exports = router;
