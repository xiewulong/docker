/*!
 * Config
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/06
 */
'use strict';

const fs = require('fs');
const path = require('path');

const config_more = fs.existsSync(`${__dirname}/cnpmjs.conf.js`) && require('./cnpmjs.conf.js') || {};

delete config_more.bindingHost;
delete config_more.dataDir;
delete config_more.database;
delete config_more.logdir;
delete config_more.registryPort;
delete config_more.uploadDir;
delete config_more.version;
delete config_more.webPort;

const data_dir = path.join(`${path.dirname(__dirname)}/data`);

module.exports = Object.assign({
  dataDir: data_dir,

  /*
   * server configure
   */

  registryPort: 7001,
  webPort: 7002,
  bindingHost: '0.0.0.0', // binding on 0.0.0.0 for outside of container access

  // log dir name
  logdir: path.join(data_dir, 'logs'),
  // update file template dir
  uploadDir: path.join(data_dir, 'downloads'),

  /**
   * database config
   */

  database: {
    db: process.env.DATABASE_DB,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,

    // the sql dialect of the database
    // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
    dialect: process.env.DATABASE_DIALECT,

    // custom host; default: 127.0.0.1
    host: process.env.DATABASE_HOST,

    // custom port; default: 3306
    port: process.env.DATABASE_PORT,

    // use pooling in order to reduce db connection overload and to increase speed
    // currently only for mysql and postgresql (since v1.5.0)
    pool: {
      maxConnections: process.env.DATABASE_POOL_MAX_CONNECTIONS || 10,
      minConnections: process.env.DATABASE_POOL_MIN_CONNECTIONS || 0,
      maxIdleTime: process.env.DATABASE_POOL_MAX_IDLE_TIME || 30000,
    },

    // the storage engine for 'sqlite'
    // default store into ~/.cnpmjs.org/data.sqlite
    storage: path.join(data_dir, 'data.sqlite'),

    logging: !!process.env.SQL_DEBUG,
  },

  // package tarball store in local filesystem by default
  nfs: require('fs-cnpm')({
    dir: path.join(data_dir, 'nfs'),
  }),
}, config_more);
