import express from 'express';
import compression from 'compression';
import prerenderMiddleware from 'prerender-node';
import { spawn } from 'child_process';

/**
 * Starts an prerender server and an expressjs server with prerender middleware
 * @param {object} options
 * Information about the server.
 * @param {string} options.path
 * The directory that the server will serve publicly.
 * @param {string} options.fallbackFile
 * The file that will be sent to the browser if the requested file can't be found.
 * @param {number} options.port
 * The port that the expressjs server will bind to.
 * @param {number} options.prerenderPort
 * The port the prerender server will bind to.
 * @param {function} options.callback
 * A function that will be called once the expressjs listens to the port
 */
export default ({ path = __dirname, fallbackFile = '/index.html', port = 3000, prerenderPort = 3002, callback = () => {} } = {}) => {
  /**
   * Start the prerender server
   */
  spawn('prerender', [], {
    stdio: 'inherit',
    env: Object.assign({}, process.env, {
      PORT: prerenderPort,
    }),
  });

  const app = express();

  // Remove annoying Express header addition.
  app.disable('x-powered-by');

  // Compress (gzip) assets in production.
  app.use(compression());

  // If the requester is a bot, prerender
  app.use(prerenderMiddleware.set('prerenderServiceUrl', `http://localhost:${prerenderPort}/`));

  // Setup the public directory so that we can server static assets.
  app.use(express.static(path));

  app.use((req, res) => res.sendFile(`${path}${fallbackFile}`));

  app.listen(port, callback);
};
