import Cookies from 'js-cookie'
// @ts-ignore
import Config from '@template/config'

const TOKEN = 'AUTH_TOKEN'

export function setToken(token: string) {
  return Cookies.set(TOKEN, token, { domain: Config.cookieDomin })
}

export function getToken() {
  return Cookies.get(TOKEN)
}

export function removeToken() {
  return Cookies.remove(TOKEN, { domain: Config.cookieDomin })
}
