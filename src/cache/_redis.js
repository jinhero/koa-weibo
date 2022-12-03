/**
 * @description 连接 redis 的方法 get set
 * @author jinhero
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient({ 
  url : `redis://${REDIS_CONF.host}:${REDIS_CONF.port}` // redis://alice:foobared@awesome.redis.server:6380
})

redisClient.on('error', err => {
  console.error('redis error', err)
})

!async function() {
  await redisClient.connect()
}()

/**
 * redis set
 * @param {string} key 
 * @param {string} val 
 * @param {number} timeout 过期时间，单位 s
 */
async function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  await redisClient.set(key, val)
  await redisClient.expire(key, timeout)
}

/**
 * redis get
 * @param {string} key 
 */
async function get(key) {
  const value = await redisClient.get(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

module.exports = {
  set,
  get
}
