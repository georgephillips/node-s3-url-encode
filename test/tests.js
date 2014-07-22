describe('node-s3-url-encode', function () {
  var assert = require('assert');
  var encodeS3URI = require('../');

  describe('Encoding', function () {
    var tests = {
      "should handle char set 1": {
        input: "!\"#$%&'()*+,-.:0123456789:.txt",
        output: "%21%22%23%24%25%26%27%28%29%2A%2B%2C-.%3A0123456789%3A.txt"
      },
      "should handle char set 2": {
        input: "<=>?@[]^_`{|}~ `‚ƒ„…†‡ˆ‰š.txt",
        output: "%3C%3D%3E%3F%40%5B%5D%5E_%60%7B%7C%7D~%20%60%C2%81%E2%80%9A%C6%92%E2%80%9E%E2%80%A6%E2%80%A0%E2%80%A1%CB%86%E2%80%B0%C5%A1.txt"
      },
      "should handle char set 3": {
        input: "‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨.txt",
        output: "%E2%80%B9%C5%92%C2%8D%C5%BD%C2%8F%C2%90%E2%80%98%E2%80%99%E2%80%9C%E2%80%9D%E2%80%A2%E2%80%93%E2%80%94%CB%9C%E2%84%A2%C5%A1%E2%80%BA%C5%93%C2%9D%C5%BE%C5%B8%20%C2%A1%C2%A2%C2%A3%C2%A4%C2%A5%C2%A6%C2%A7%C2%A8.txt"
      },
      "should handle char set 4": {
        input: "©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃ.txt",
        output: "%C2%A9%C2%AA%C2%AB%C2%AC%C2%AE%C2%AF%C2%B0%C2%B1%C2%B2%C2%B3%C2%B4%C2%B5%C2%B6%C2%B7%C2%B8%C2%B9%C2%BA%C2%BB%C2%BC%C2%BD%C2%BE%C2%BF%C3%80%C3%81%C3%82%C3%83.txt"
      },
      "should handle char set 5": {
        input: "ÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝ.txt",
        output: "%C3%84%C3%85%C3%86%C3%87%C3%88%C3%89%C3%8A%C3%8B%C3%8C%C3%8D%C3%8E%C3%8F%C3%90%C3%91%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%9B%C3%9C%C3%9D.txt"
      },
      "should handle char set 6": {
        input: "Þßàáâãäåæçèéêëìíîïðñòóôõö÷.txt",
        output: "%C3%9E%C3%9F%C3%A0%C3%A1%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%A8%C3%A9%C3%AA%C3%AB%C3%AC%C3%AD%C3%AE%C3%AF%C3%B0%C3%B1%C3%B2%C3%B3%C3%B4%C3%B5%C3%B6%C3%B7.txt"
      },
      "should handle char set 7": {
        input: "øùúûüýþ + ÿ;.txt",
        output: "%C3%B8%C3%B9%C3%BA%C3%BB%C3%BC%C3%BD%C3%BE%20%2B%20%C3%BF%3B.txt"
      }
    };

    function runTest(description, test) {
      it(description, function () {
        assert.equal(encodeS3URI(test.input), test.output);
      });
    }

    for (var description in tests) {
      runTest(description, tests[description]);
    }
  });
});