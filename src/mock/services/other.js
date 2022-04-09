import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 10

const orgTree = () => {
  return builder([{
    'key': 'key-01',
    'title': '研发中心',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': '后端组',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': 'JAVA',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': 'PHP',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': 'Golang',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': '前端组',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'React',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': 'Vue',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': 'Angular',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': '财务部',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': '会计核算',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': '成本控制',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': '内部控制',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': '财务制度建设',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': '会计核算',
        'icon': null
      }
      ]
    }]
  }])
}

const role = () => {
  return builder({
    'data': [{
      'id': 'admin',
      'name': '管理员',
      'describe': '拥有所有权限',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': ['1001', '2001', '3001'
      ]
    },
    {
      'id': 'svip',
      'name': 'SVIP',
      'describe': '超级会员',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1532417744846,
      'deleted': 0,
      'permissions': ['1002', '2002', '3002'
      ]
    },
    {
      'id': 'user',
      'name': '普通会员',
      'describe': '普通用户，只能查询',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': ['1003', '2003', '3003'
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const permissionNoPager = () => {

  return builder([{
    'id': 'marketing',
    'name': '营销管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"1001","action":"query","defaultCheck":false,"describe":"查询"},{"id":"1002","action":"get","defaultCheck":false,"describe":"详情"},{"id":"1003","action":"add","defaultCheck":false,"describe":"新增"},{"id":"1004","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"1005","action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': null,
    'parents': null,
    'type': null,
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'member',
    'name': '会员管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"2001","action":"query","defaultCheck":false,"describe":"查询"},{"id":"2002","action":"get","defaultCheck":false,"describe":"详情"},{"id":"2003","action":"add","defaultCheck":false,"describe":"新增"},{"id":"2004","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"2005","action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'menu',
    'name': '菜单管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"3001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"3002","action":"import","defaultCheck":false,"describe":"导入"},{"id":"3003","action":"get","defaultCheck":false,"describe":"查询"},{"id":"3004","action":"edit","defaultCheck":false,"describe":"修改"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'import',
      'get',
      'edit'
    ]
  },
  {
    'id': 'order',
    'name': '订单管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"4001","action":"query","defaultCheck":false,"describe":"查询"},{"id":"4002","action":"get","defaultCheck":false,"describe":"详情"},{"id":"4003","action":"add","defaultCheck":false,"describe":"新增"},{"id":"4004","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"4005","action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'permission',
    'name': '权限管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"5001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"5002","action":"get","defaultCheck":false,"describe":"查询"},{"id":"5003","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"5004","action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'role',
    'name': '角色管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"6001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"6002","action":"get","defaultCheck":false,"describe":"查询"},{"id":"6003","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"6004","action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'test',
    'name': '测试权限',
    'describe': null,
    'status': 1,
    'actionData': '[{"id":"7001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"7002","action":"get","defaultCheck":false,"describe":"详情"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  }
  ])
}

const permissions = (options) => {
  const parameters = getQueryParameters(options)

  const data = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  return builder( {pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: [{
    'id': 'marketing',
    'name': '营销管理',
    'describe': '4444',
    'status': 1,
    'actionData': '[{"id":"1001","action":"query","defaultCheck":false,"describe":"查询"},{"id":"1002","action":"get","defaultCheck":false,"describe":"详情"},{"id":"1003","action":"add","defaultCheck":false,"describe":"新增"},{"id":"1004","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"1005","action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': null,
    'parents': null,
    'type': null,
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
    {
      'id': 'member',
      'name': '会员管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"id":"2001","action":"query","defaultCheck":false,"describe":"查询"},{"id":"2002","action":"get","defaultCheck":false,"describe":"详情"},{"id":"2003","action":"add","defaultCheck":false,"describe":"新增"},{"id":"2004","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"2005","action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'menu',
      'name': '菜单管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"id":"3001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"3002","action":"import","defaultCheck":false,"describe":"导入"},{"id":"3003","action":"get","defaultCheck":false,"describe":"查询"},{"id":"3004","action":"edit","defaultCheck":false,"describe":"修改"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'import',
        'get',
        'edit'
      ]
    },
    {
      'id': 'order',
      'name': '订单管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"id":"4001","action":"query","defaultCheck":false,"describe":"查询"},{"id":"4002","action":"get","defaultCheck":false,"describe":"详情"},{"id":"4003","action":"add","defaultCheck":false,"describe":"新增"},{"id":"4004","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"4005","action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'permission',
      'name': '权限管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"id":"5001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"5002","action":"get","defaultCheck":false,"describe":"查询"},{"id":"5003","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"5004","action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'role',
      'name': '角色管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"id":"6001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"6002","action":"get","defaultCheck":false,"describe":"查询"},{"id":"6003","action":"edit","defaultCheck":false,"describe":"修改"},{"id":"6004","action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'test',
      'name': '测试权限',
      'describe': null,
      'status': 1,
      'actionData': '[{"id":"7001","action":"add","defaultCheck":false,"describe":"新增"},{"id":"7002","action":"get","defaultCheck":false,"describe":"详情"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    }
  ]})
}

Mock.mock(/\/org\/tree/, 'get', orgTree)
Mock.mock(/\/role/, 'get', role)
Mock.mock(/\/permissions\/no-pager/, 'get', permissionNoPager)
Mock.mock(/\/permissions\/page/, 'get', permissions)
