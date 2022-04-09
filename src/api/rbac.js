import request from '@/utils/request'
import { getPermissionTree } from '@/config/router.config'

export function getInfo() {
  return request({
    url: '/users/current-user',
    method: 'GET'
  })
}

export function getUserList(parameter) {
  return request({
    url: '/admin/user/page',
    method: 'GET',
    params: parameter
  })
}

export function getUserById(id) {
  return request({
    url: `/admin/user/get/`,
    method: 'GET',
    params: {
      id: id
    }
  })
}

export function addUser(params) {
  return request({
    url: '/admin/user/add',
    method: 'POST',
    data: params
  })
}

export function updateUser(id, params) {
  return request({
    url: `/admin/user/update`,
    method: 'POST',
    data: params
  })
}

export function deleteUser(id) {
  return request({
    url: `/admin/user/delete`,
    method: 'POST',
    params: {
      id: id
    }
  })
}

export function getRoleList(parameter) {
  return request({
    url: '/admin/role/page',
    method: 'GET',
    params: parameter
  })
}

export function getRoleAll() {
  return request({
    url: '/admin/role/all',
    method: 'GET'
  })
}

export function listAvailableRoles() {
  return request({
    url: '/admin/role/all',
    method: 'GET',
    params: {
      status: 'Enabled'
    }
  })
}

export function getRoleById(id) {
  return request({
    url: `/admin/role/getRole`,
    method: 'GET',
    params: {
      id: id
    }
  })
}

export function listPermissions() {
  return getPermissionTree()
}

export function synchronizePermissions() {
  return request({
    url: '/permissions/sync',
    method: 'POST'
  })
}

export function addRole(params) {
  return request({
    url: '/admin/role/add',
    method: 'POST',
    data: params
  })
}

export function updateRole(roleId, params) {
  return request({
    url: `/admin/role/update`,
    method: 'POST',
    data: params
  })
}

export function deleteRole(roleId) {
  return request({
    url: `/admin/role/delete`,
    method: 'post',
    params: {
      id: roleId
    }
  })
}

export function getPermissionList(parameter) {
  return request({
    url: '/permissions/page',
    method: 'GET',
    params: parameter
  })
}
