#!/usr/bin/env node
try {
  require('ts-node/register');
} catch (err) {}

require('../dist/server');
