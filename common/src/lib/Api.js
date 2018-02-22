import axios from 'axios'
import * as env from '../lib/constants'
import boards from '../settings/boards';

export default class Api {
  client() {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
    if (this.Authorization) {
      headers.Authorization = this.Authorization
    }
    console.log('Headers: ', headers)
    return axios.create({ headers })
  }

  mapBoardToDevice(boardSlot) {
    const slotValue = boardSlot.toLowerCase().trim()

    const matches = boards.filter((board) => board.names.includes(slotValue))
    if (matches.length) {
      return { deviceId: matches[0].id, server: matches[0].baseUrl }
    }

    return { deviceId: null, server: null };
  }

  getLoginEndpoint(serverUrl) {
    return `${serverUrl}/login`
  }

  getDeviceEndpoint(serverUrl, deviceId) {
    return `${serverUrl}/api/devices/${deviceId}/state`
  }

  async login(serverUrl) {
    const loginEnpoint = this.getLoginEndpoint(serverUrl)
    console.log(`API: ${loginEnpoint}`)
    const { username, password } = env
    const tokenResponse = await this.client().post(loginEnpoint, {
      username, password
    })
    this.Authorization = `Bearer ${tokenResponse.data.token}`
  }

  async getStatus(boardSlot) {
    const { deviceId, server } = this.mapBoardToDevice(boardSlot)
    console.log('GET: ', boardSlot, deviceId, this.client().baseURL)

    if (deviceId != null) {
      await this.login(server)
      const response = await this.client().get(this.getDeviceEndpoint(server, deviceId))
      console.log('response', response.data)
      return response.data
    }

    return null;
  }

  async putStatus(boardSlot, payload) {
    const { deviceId, server } = this.mapBoardToDevice(boardSlot)
    console.log('GET: ', payload, boardSlot, deviceId, this.client().baseURL)

    if (deviceId != null) {
      await this.login(server)
      const response = await this.client().put(this.getDeviceEndpoint(server, deviceId), payload)
      return response.status
    }

    return null;
  }
}
