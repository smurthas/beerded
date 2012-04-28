module.exports = {
  db: {
    host: get('DB_HOST','localhost'),
    port: get('DB_PORT', 27017),
    name: get('DB_NAME', 'test')
  }
};


function get(name, defawlt) {
  return process.env[name] || defawlt;
}