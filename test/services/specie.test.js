const assert = require('assert');
const app = require('../../src/app');

describe('\'specie\' service', () => {
  it('registered the service', () => {
    const service = app.service('specie');

    assert.ok(service, 'Registered the service');
  });
});
