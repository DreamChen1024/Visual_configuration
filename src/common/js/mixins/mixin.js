/**
 * Created by Administrator on 2019/4/2.
 */
import * as storage from '../tool/storage'
import tool from '../tool/tools'

export const tools = {
  methods: {
    ...storage,
    ...tool
  }
}

