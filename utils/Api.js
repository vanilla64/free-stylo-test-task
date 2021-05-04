import { ROOT_URL, CLIENT_ID } from './constants'

class Api {
  constructor(reqUrl, appId) {
    this._url = reqUrl
    this._appId = appId
  }

  _initialRequest = (res) => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getChannelsId = (channelName) => {
    return fetch(`${this._url}/search/channels?query=${channelName}`, {
      headers: {
        "Client-ID": this._appId,
        "Accept": 'application/vnd.twitchtv.v5+json'
      }
    }).then(res => this._initialRequest(res))
  }

  // https://api.twitch.tv/kraken/channels/<channel ID>/videos
  getChannelVideos = (channelId) => {
    return fetch(`${this._url}/channels/${channelId}/videos`, {
      headers: {
        "Client-ID": this._appId,
        "Accept": 'application/vnd.twitchtv.v5+json'
      }
    }).then(res => this._initialRequest(res))
  }
}

const api = new Api(ROOT_URL, CLIENT_ID)

export default api
