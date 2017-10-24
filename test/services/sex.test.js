const assert = require('assert');
const app = require('../../src/app');

describe('\'sex\' service', () => {
  it('registered the service', () => {
    const service = app.service('sex');

    assert.ok(service, 'Registered the service');
  });
});
