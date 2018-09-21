<template>
  <div class="hello">
    <v-big-img v-if="isShowBigImg" :imgSrc="bigImgUrl" @hideBigImg="closeBigImg"></v-big-img>
    <div class="upload_warp_img" v-show="imgRes.length!=0">
      <div class="upload_warp_img_div" v-for="(url, index) of imgRes" :key="index">
        <div class="upload_warp_img_div_top">
          <img :src="del" class="upload_warp_img_div_del" @click="fileDel(index)">
        </div>
        <div class="upload_warp_img_div_bottom"  @click="showBigImg(url)">
          <span class="glyphicon glyphicon-resize-full iii"></span>
        </div>
        <img :src="serverurl + url" >
      </div>
    </div>
    <div class="upload_warp" v-show="imgRes.length < len">
      <div class="upload_warp_left" @click="fileClick">
        <img :src="upload">
        <p style="line-height: 75px;">{{title}}</p>
      </div>
    </div>
    <input @change="fileChange($event)" type="file" :id="uploadid" multiple style="display: none" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"/>
  </div>
</template>

<script>
import del from '@/assets/img/del.png'
import upload from '@/assets/img/upload.png'
import { uploadFile, IMAGE_SERVER_URL } from '@/config/api/base-api'

import vBigImg from '@/components/img/big'

export default {
  name: 'upload',
  props: ['uploadid', 'len', 'imgSrc', 'title', 'mark'],
  data () {
    return {
      del,
      upload,
      serverurl: IMAGE_SERVER_URL,
      bigImgUrl: '',
      isShowBigImg: false,
      imgRes: []
    }
  },
  watch: {
    imgSrc: 'setImgSrc'
  },
  methods: {
    fileClick () {
      document.getElementById(this.uploadid).click()
    },
    fileChange (el) {
      // 判断文件是否存在
      if (!el.target.files[0].size) return
      const file = el.target.files[0]
      // 判断是否为图片文件
      if (file.type.indexOf('image') === -1) return
      this.upFile(file)
      el.target.value = ''
    },
    async upFile (file) {
      const param = new FormData()
      param.append('fileList', file)
      if (this.mark === 'false') {
        param.append('mark', false)
      }
      uploadFile(param).then((d) => {
        if (this.imgRes.length >= this.len) {
          this.imgRes.splice(0, 1)
        }
        this.imgRes.push(d[0])
        this.$emit('acceptData', this.imgRes.join(','))
      })
    },
    fileDel (index) {
      this.imgRes.splice(index, 1)
      this.$emit('acceptData', this.imgRes.length === 0 ? '' : this.imgRes.join(','))
    },
    showBigImg (url) {
      this.bigImgUrl = this.serverurl + url
      this.isShowBigImg = true
    },
    closeBigImg () {
      this.isShowBigImg = false
    },
    setImgSrc () {
      if (this.imgSrc) {
        this.imgRes = this.imgSrc.split(',')
      }
    }
  },
  components: {
    'v-big-img': vBigImg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
