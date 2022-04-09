import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const userList = (options) => {
  const parameters = getQueryParameters(options)

  const data = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    data.push({
      id: tmpKey,
      uid: tmpKey,
      username: 'UN' + tmpKey,
      email: 'No@' + tmpKey,
      roles: [{ code: Mock.mock('@integer(1, 99)'),
            name: 'admin' }, { code: Mock.mock('@integer(1, 99)'),
        name: 'normal' }],
      status: 'Enabled',
      approveStatus: Mock.mock('@integer(0, 3)')
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: data
  })
}

const userInfo = (options) => {
  return builder({
    id: Mock.mock('@integer(0, 3)'),
    uid: Mock.mock('@integer(0, 3)'),
    username: 'UN' + Mock.mock('@integer(0, 3)'),
    email: 'No@' + Mock.mock('@integer(0, 3)'),
    phone: Mock.mock('@integer(0, 11)'),
    status: 'Disabled',
    userType: 'BBA',
    roleIds: ['admin', 'normal']
  })
}

const roleList = (options) => {

  const parameters = getQueryParameters(options)

  const data = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    data.push({
      id: Mock.mock('@integer(0, 3)'),
      code: 'code' + Mock.mock('@integer(0, 3)'),
      name: 'No@' + Mock.mock('@integer(0, 3)'),
      description: 'info' + Mock.mock('@integer(0, 3)'),
      status: 'Enabled'
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: data
  })
}

Mock.mock(/\/users\/page/, 'get', userList)
Mock.mock(/\/users\/get/, 'get', userInfo)
// Mock.mock(/\/roles\/list/, 'get', roleList)
// Mock.mock(/\/roles\/page/, 'get', roleList)
