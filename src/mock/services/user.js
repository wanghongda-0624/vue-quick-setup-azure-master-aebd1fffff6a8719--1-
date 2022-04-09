import Mock from 'mockjs2'
import { builder } from '../util'

const info = (options) => {
  console.log('options', options)
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': 'admin',
    'username': 'admin',
    'password': '',
    'avatar': '/BMW_White-Colour_RGB.svg',
    'status': 1,
    'telephone': '',
    'lastLoginIp': '27.154.74.117',
    'lastLoginTime': 1534837621348,
    'creatorId': 'admin',
    'createTime': 1497160610259,
    'merchantCode': 'TLif2btpzg079h15bk',
    'deleted': 0,
    'roleId': 'admin',
    'role': {}
  }
  // role
  const roleObj = {
    'id': 'admin',
    'name': 'Administrator',
    'describe': 'Have all permissions',
    'status': 1,
    'creatorId': 'system',
    'createTime': 1497160610259,
    'deleted': 0,
    'permissionIds': ['1009' , '100901', '100903'],
    'permissions': [{
      'roleId': 'admin',
      'permissionId': 'dashboard',
      'permissionName': 'Dashboard',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'exception',
      'permissionName': 'Exception page permission',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'result',
      'permissionName': 'Result Permission',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'profile',
      'permissionName': 'Detail Page Permission',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': 'Table Permission',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': 'Import',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'form',
      'permissionName': 'Table Permission',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'order',
      'permissionName': 'Order Management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'permission',
      'permissionName': 'Permission Manangement',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'role',
      'permissionName': 'Role Permission',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': 'Table Management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"query","defaultCheck":false,"describe":"Query"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Query',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'user',
      'permissionName': 'User Management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': 'Import',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Detail',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'Modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'Delete',
        'defaultCheck': false
      }, {
        'action': 'export',
        'describe': 'Export',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'docs',
      'permissionName': 'Document',
      'actions': '[]',
      'actionEntitySet': [],
      'actionList': null,
      'dataAccess': null
    }]
  }

  roleObj.permissions.push({
    'roleId': 'admin',
    'permissionId': 'support',
    'permissionName': 'Super module',
    'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Detail"},{"action":"update","defaultCheck":false,"describe":"Modify"},{"action":"delete","defaultCheck":false,"describe":"Delete"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
    'actionEntitySet': [{
      'action': 'add',
      'describe': 'Add',
      'defaultCheck': false
    }, {
      'action': 'import',
      'describe': 'Import',
      'defaultCheck': false
    }, {
      'action': 'get',
      'describe': 'Detail',
      'defaultCheck': false
    }, {
      'action': 'update',
      'describe': 'Modify',
      'defaultCheck': false
    }, {
      'action': 'delete',
      'describe': 'Delete',
      'defaultCheck': false
    }, {
      'action': 'export',
      'describe': 'Export',
      'defaultCheck': false
    }],
    'actionList': null,
    'dataAccess': null
  })

  userInfo.role = roleObj
  return builder(userInfo)
}

const userNav = (options) => {
  const nav = [
    // dashboard
    {
      'name': 'dashboard',
      'parentId': 0,
      'id': 1,
      'meta': {
        'icon': 'dashboard',
        'title': 'Dashboard',
        'show': true
      },
      'component': 'RouteView',
      'redirect': '/dashboard/workplace'
    },
    {
      'name': 'workplace',
      'parentId': 1,
      'id': 7,
      'meta': {
        'title': 'Dashboard',
        'show': true
      },
      'component': 'Workplace'
    },
    {
      'name': 'monitor',
      'path': 'https://www.baidu.com/',
      'parentId': 1,
      'id': 3,
      'meta': {
        'title': 'Monitor',
        'target': '_blank',
        'show': true
      }
    },
    {
      'name': 'Analysis',
      'parentId': 1,
      'id': 2,
      'meta': {
        'title': 'Analysis',
        'show': true
      },
      'component': 'Analysis',
      'path': '/dashboard/analysis'
    },
    {
      'name': 'tests',
      'parentId': 1,
      'id': 8,
      'meta': {
        'title': 'Test',
        'show': true
      },
      'component': 'TestWork'
    },

    // form
    {
      'name': 'form',
      'parentId': 0,
      'id': 10,
      'meta': {
        'icon': 'form',
        'title': 'Table'
      },
      'redirect': '/form/base-form',
      'component': 'PageView'
    },
    {
      'name': 'basic-form',
      'parentId': 10,
      'id': 6,
      'meta': {
        'title': 'Basic Table'
      },
      'component': 'BasicForm'
    },
    {
      'name': 'step-form',
      'parentId': 10,
      'id': 5,
      'meta': {
        'title': '分步表单'
      },
      'component': 'StepForm'
    },
    {
      'name': 'advanced-form',
      'parentId': 10,
      'id': 4,
      'meta': {
        'title': '高级表单'
      },
      'component': 'AdvanceForm'
    },

    // list
    {
      'name': 'list',
      'parentId': 0,
      'id': 10010,
      'meta': {
        'icon': 'table',
        'title': '列表页',
        'show': true
      },
      'redirect': '/list/table-list',
      'component': 'PageView'
    },
    {
      'name': 'table-list',
      'parentId': 10010,
      'id': 10011,
      'path': '/list/table-list/:pageNo([1-9]\\d*)?',
      'meta': {
        'title': 'Query表格',
        'show': true
      },
      'component': 'TableList'
    },
    {
      'name': 'basic-list',
      'parentId': 10010,
      'id': 10012,
      'meta': {
        'title': '标准列表',
        'show': true
      },
      'component': 'StandardList'
    },
    {
      'name': 'card',
      'parentId': 10010,
      'id': 10013,
      'meta': {
        'title': '卡片列表',
        'show': true
      },
      'component': 'CardList'
    },
    {
      'name': 'search',
      'parentId': 10010,
      'id': 10014,
      'meta': {
        'title': '搜索列表',
        'show': true
      },
      'redirect': '/list/search/article',
      'component': 'SearchLayout'
    },
    {
      'name': 'article',
      'parentId': 10014,
      'id': 10015,
      'meta': {
        'title': '搜索列表（文章）',
        'show': true
      },
      'component': 'SearchArticles'
    },
    {
      'name': 'project',
      'parentId': 10014,
      'id': 10016,
      'meta': {
        'title': '搜索列表（项目）',
        'show': true
      },
      'component': 'SearchProjects'
    },
    {
      'name': 'application',
      'parentId': 10014,
      'id': 10017,
      'meta': {
        'title': '搜索列表（应用）',
        'show': true
      },
      'component': 'SearchApplications'
    },

    // profile
    {
      'name': 'profile',
      'parentId': 0,
      'id': 10018,
      'meta': {
        'title': 'Detail页',
        'icon': 'profile',
        'show': true
      },
      'redirect': '/profile/basic',
      'component': 'RouteView'
    },
    {
      'name': 'basic',
      'parentId': 10018,
      'id': 10019,
      'meta': {
        'title': '基础Detail页',
        'show': true
      },
      'component': 'ProfileBasic'
    },
    {
      'name': 'advanced',
      'parentId': 10018,
      'id': 10020,
      'meta': {
        'title': '高级Detail页',
        'show': true
      },
      'component': 'ProfileAdvanced'
    },

    // result
    {
      'name': 'result',
      'parentId': 0,
      'id': 10021,
      'meta': {
        'title': '结果页',
        'icon': 'check-circle-o',
        'show': true
      },
      'redirect': '/result/success',
      'component': 'PageView'
    },
    {
      'name': 'success',
      'parentId': 10021,
      'id': 10022,
      'meta': {
        'title': '成功',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultSuccess'
    },
    {
      'name': 'fail',
      'parentId': 10021,
      'id': 10023,
      'meta': {
        'title': '失败',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultFail'
    },

    // Exception
    {
      'name': 'exception',
      'parentId': 0,
      'id': 10024,
      'meta': {
        'title': '异常页',
        'icon': 'warning',
        'show': true
      },
      'redirect': '/exception/403',
      'component': 'RouteView'
    },
    {
      'name': '403',
      'parentId': 10024,
      'id': 10025,
      'meta': {
        'title': '403',
        'show': true
      },
      'component': 'Exception403'
    },
    {
      'name': '404',
      'parentId': 10024,
      'id': 10026,
      'meta': {
        'title': '404',
        'show': true
      },
      'component': 'Exception404'
    },
    {
      'name': '500',
      'parentId': 10024,
      'id': 10027,
      'meta': {
        'title': '500',
        'show': true
      },
      'component': 'Exception500'
    },

    // account
    {
      'name': 'account',
      'parentId': 0,
      'id': 10028,
      'meta': {
        'title': '个人页',
        'icon': 'user',
        'show': true
      },
      'redirect': '/account/center',
      'component': 'RouteView'
    },
    {
      'name': 'center',
      'parentId': 10028,
      'id': 10029,
      'meta': {
        'title': '个人中心',
        'show': true
      },
      'component': 'AccountCenter'
    },
    // 特殊三级菜单
    {
      'name': 'settings',
      'parentId': 10028,
      'id': 10030,
      'meta': {
        'title': '个人设置',
        'hideHeader': true,
        'hideChildren': true,
        'show': true
      },
      'redirect': '/account/settings/base',
      'component': 'AccountSettings'
    },
    {
      'name': 'BaseSettings',
      'path': '/account/settings/base',
      'parentId': 10030,
      'id': 10031,
      'meta': {
        'title': '基本设置',
        'show': false
      },
      'component': 'BaseSettings'
    },
    {
      'name': 'SecuritySettings',
      'path': '/account/settings/security',
      'parentId': 10030,
      'id': 10032,
      'meta': {
        'title': '安全设置',
        'show': false
      },
      'component': 'SecuritySettings'
    },
    {
      'name': 'CustomSettings',
      'path': '/account/settings/custom',
      'parentId': 10030,
      'id': 10033,
      'meta': {
        'title': '个性化设置',
        'show': false
      },
      'component': 'CustomSettings'
    },
    {
      'name': 'BindingSettings',
      'path': '/account/settings/binding',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': '账户绑定',
        'show': false
      },
      'component': 'BindingSettings'
    },
    {
      'name': 'NotificationSettings',
      'path': '/account/settings/notification',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': '新消息通知',
        'show': false
      },
      'component': 'NotificationSettings'
    },
    {
      'name': 'docs',
      'parentId': 0,
      'id': 10035,
      'meta': {
        'title': '文档页',
        'icon': 'code',
        'show': true
      },
      'redirect': '/docs/button',
      'component': 'RouteView'
    },
    {
      'name': 'button',
      'parentId': 10035,
      'id': 10036,
      'meta': {
        'title': '按钮',
        'show': true
      },
      'component': 'button'
    }
  ]
  const json = builder(nav)
  console.log('json', json)
  return json
}

Mock.mock(/\/api\/user\/info/, 'get', info)
Mock.mock(/\/api\/user\/nav/, 'get', userNav)
