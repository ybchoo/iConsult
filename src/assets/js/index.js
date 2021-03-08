
import {a} from ".js/qrcode.js";

const data = require('../data');


function getUserImage(str, results) {
  console.log(str);
  return new Promise(function(resolve, reject) {
    qrcode.toDataURL(str, function(err, url) {
      if (err) {
        logError("2q3ur8fhudshfs", err, str);
        reject(err);
        return;
      }
      console.dir(url);
      results[str] = url;
      
      resolve();
    });
  });
}