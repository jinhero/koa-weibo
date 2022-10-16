/**
 * @description jest server
 * @author jinhero
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)