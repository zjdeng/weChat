import {HTTP} from '../utils/util.js'
export class ClassicModel extends HTTP {
  getLatest (sCallback) {
    this.request({
      url: 'clinic/vspmanager/process/queryVspTemplateInfoList',
      success: (res) => {
        sCallback(res)
      }
    })

  }
}