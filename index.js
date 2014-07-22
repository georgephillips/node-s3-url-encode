/*!
 * node-s3-url-encode - Because s3 urls are annoying
 */

function encodeS3URI(filename) {
  return encodeURI(filename) // Do the standard url encoding
              .replace(/\+/img, "%2B")
              .replace(/\!/img, "%21")
              .replace(/\"/img, "%22")
              .replace(/\#/img, "%23")
              .replace(/\$/img, "%24")
              .replace(/\&/img, "%26")
              .replace(/\'/img, "%27")
              .replace(/\(/img, "%28")
              .replace(/\)/img, "%29")
              .replace(/\*/img, "%2A")
              .replace(/\+/img, "%2B")
              .replace(/\,/img, "%2C")
              .replace(/\:/img, "%3A")
              .replace(/\;/img, "%3B")
              .replace(/\=/img, "%3D")
              .replace(/\?/img, "%3F")
              .replace(/\@/img, "%40");

}

if (module) {
  module.exports = encodeS3URI;
}