var commonSpec = require('../share/common-spec.js');
var asciidoctor = require('../../build/npm/asciidoctor.js')();
var testOptions = {
  platform: 'CommonJS',
  baseDir: 'http://localhost:9876/base'
};
var Opal = asciidoctor.Opal;
var Asciidoctor = asciidoctor.Asciidoctor(true);

commonSpec(testOptions, Opal, Asciidoctor);

describe('Include', function () {
  it('Should include file', function () {
    var opts = {'safe': 'safe'};
    var html = Asciidoctor.convert('include::https://raw.githubusercontent.com/HubPress/dev.hubpress.io/gh-pages/README.adoc[]', opts);

    expect(html).toContain('Gratipay');
  });
});
