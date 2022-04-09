import storage from 'store'

const clientId = '4283d6a70ed1464ea13ee37bf6698312'
const url = 'https://iam-saml-uat.bba-app.com/ms_oauth/oauth2/endpoints/oauthservice/authorize?client_id=' + clientId + '&response_type=code&redirect_uri='

export const getSSOUrl = function (nowUrl) {
  if (process.env.VUE_APP_SSO_TYPE === 'NONE') {
    return '/user/login'
  } else {
    return url + process.env.VUE_APP_IAM_URL + '&scope=UserProfile.me&state=xyz'
  }
}
