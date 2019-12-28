const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/cards\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/cards');

    assert.ok(service, 'Registered the service');
  });
});
