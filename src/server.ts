import app from './app';

/**
 * Start Express server.
 */
let port = app.get('port') || 3000;
let env = app.get('env') || 'development';

const server = app.listen(port, () => {
  console.log('App is running at http://localhost:%d in %s mode', port, env);
  console.log('  Press CTRL-C to stop\n');
});

export default server;
