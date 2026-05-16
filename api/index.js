import { toNodeHandler } from 'srvx/adapters/node';
import server from '../dist/server/server.js';

export default toNodeHandler(server.fetch);
