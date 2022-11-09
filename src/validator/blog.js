/**
 * @description 微博 数据格式校验
 * @author jinhero
 */

const validate = require('./_validate')

// 校验规则
const SCHEMA = {
  type: 'object',
  properties: {
    content: {
      type: 'string'
    },
    password: {
      type: 'string',
      maxLength: 255
    }
  }
}
 
/**
  * 校验微博数据格式
  * @param {Object} data 微博数据
  */
function blogValidate(data = {}) {
  return validate(SCHEMA, data)
}
 
module.exports = blogValidate
