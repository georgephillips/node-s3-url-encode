/*!
 * node-s3-url-encode - Because s3 urls are annoying
 */

var encodings = {
  '\+': "%2B",
  '\!': "%21",
  '\"': "%22",
  '\#': "%23",
  '\$': "%24",
  '\&': "%26",
  '\'': "%27",
  '\(': "%28",
  '\)': "%29",
  '\*': "%2A",
  '\,': "%2C",
  '\:': "%3A",
  '\;': "%3B",
  '\=': "%3D",
  '\?': "%3F",
  '\@': "%40",
};

function encodeS3URI(filename) {
  return encodeURI(filename) // Do the standard url encoding
              .replace(
                  /(\+|!|"|#|\$|&|'|\(|\)|\*|\+|,|:|;|=|\?|@)/img,
                  function(match) { return encodings[match]; }
              );

}

if (module) {
  module.exports = encodeS3URI;
}