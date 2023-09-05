import Mock from '../tool'

Mock.onPost('/login/login').reply(200, {
  code: 200,
  data: {
    username: 'admin',
    // 一个用户可能有多个角色
    roles: ['admin'],
    accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
    refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
    expires: '2023/10/30 00:00:00'
  }
})

Mock.onPost('/login/email/verify_code').reply(200, {
  code: 200,
  data: {}
})
