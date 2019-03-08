const swig = require('swig-templates');

// eslint-disable-next-line camelcase
function scriptTag(args) {
  const payload = {
    layout: args[0],
    app_id: args[1],
    app_key: args[2],
    security: args[3],
    betterPerformance: args[4],
  };
  return new Promise((resolve, reject) => {
    swig.renderFile('./tag-template/script.swig', payload, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = {
  scriptTag,
};
