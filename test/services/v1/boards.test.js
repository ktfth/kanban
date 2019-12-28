const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/boards\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/boards');

    assert.ok(service, 'Registered the service');
  });
});
