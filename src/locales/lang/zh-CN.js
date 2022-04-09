import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',

  'menu.rbac': '系统管理',
  'menu.rbac.user': '用户管理',
  'menu.rbac.user-approval': '用户审批',
  'menu.rbac.role': '角色管理',
  'menu.rbac.permission': '权限管理',

  'label.search': '搜索',
  'label.reset': '重置',
  'label.synchronize': '同步',
  'label.status': '状态',
  'label.operation': '操作',
  'label.edit': '编辑',
  'label.delete': '删除',
  'label.add': '添加',
  'label.username': '用户名',
  'label.email': '邮箱',
  'label.phone': '手机号',
  'label.address': '地址',
  'label.tax-code': '税号',

  'label.permissions': '权限列表',
  'label.permission.code': '权限编码',
  'label.permission.name': '权限名称',
  'label.permission.description': '权限描述',
  'label.permission.action': '权限动作',
  'message.permission.async': '确认要同步权限吗？',

  'label.roles': '角色列表',
  'label.role.id': '角色编号',
  'label.role.code': '角色编码',
  'label.role.name': '角色名称',
  'label.role.description': '角色描述',
  'message.role.delete': '确认要删除该角色吗？',

  'label.user.type': '用户类型',
  'label.user.approval-status': '审批状态',
  'message.user.delete': '确认要删除该用户吗？',

  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.ICON': '图标库',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.form': '表单',
  'menu.form.basic': '基础表单',
  'menu.form.step': '分步表单',
  'menu.form.advanced': '高级表单',
  'menu.table': '列表页',
  'menu.table.query': '查询列表',
  'menu.table.standard': '标准列表',
  'menu.table.card': '卡片列表',
  'menu.table.search': '搜索列表',
  'menu.table.search.article': '搜索列表（文章）',
  'menu.table.search.project': '搜索列表（项目）',
  'menu.table.search.application': '搜索列表（应用）',
  'menu.profile': '详情页',
  'menu.profile.basic': '基础详情页',
  'menu.profile.advanced': '高级详情页',
  'menu.result': '结果页',
  'menu.result.success': '成功',
  'menu.result.failed': '失败',
  'menu.exception': '异常页',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.account.settings.base': '基本设置',
  'menu.account.settings.security': '安全设置',
  'menu.account.settings.custom': '个性化设置',
  'menu.account.settings.bindings': '账户绑定',
  'menu.account.settings.notification': '新消息通知',
  'menu.document': '文档页',
  'menu.document.button': '按钮&图标&加载',

  'label.logout': '退出登录',
  'label.good-morning': '早上好',
  'label.good-beforenoon': '上午好',
  'label.good-noon': '中午好',
  'label.good-afternoon': '下午好',
  'label.good-nignt': '晚上好'
}

export default {
  ...components,
  ...locale
}
