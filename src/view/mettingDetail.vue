<template>
  <div class="add-metting">
    <!-- 主题 -->
    <van-field v-model="itemMsg.title" label="主题" readonly placeholder="请输入" input-align="right" />
    <!-- 简介 -->
    <van-field v-model="itemMsg.about" label="简介" readonly placeholder="请输入" input-align="right" />
    <!-- 类型 -->
    <van-field
      readonly
      clickable
      label="类型"
      :value="itemMsg.type"
      placeholder="选择类型"
      @click="showType = true"
      input-align="right"
    />
    <!-- 时间 -->
    <van-field
      readonly
      clickable
      label="时间"
      :value="itemMsg.time"
      placeholder="选择时间"
      @click="showTime = true"
      input-align="right"
    />
    <!-- 地点 -->
    <van-field v-model="itemMsg.address" readonly label="地点" placeholder="请输入" input-align="right" />
    <!-- 会议主持 -->
    <van-field
      readonly
      clickable
      label="会议主持"
      :value="itemMsg.host"
      placeholder="选择会议主持"
      @click="showHost = true"
      input-align="right"
    />
    <!-- 参会人员 -->
    <van-field
      readonly
      rows="1"
      autosize
      type="textarea"
      class="members-all"
      label="参会人员"
      :value="itemMsg.person"
      input-align="right"
    />
  <!-- 抄送人员 -->
    <van-field
      readonly
      clickable
      label="抄送"
      :value="itemMsg.copy"
      placeholder="选择抄送人员"
      @click="showCopy = true"
      input-align="right"
    />
    <!-- 会议纪要 -->
    <div class="metting-content">会议纪要</div>
    <van-field
        v-model="itemMsg.message"
        rows="2"
        autosize
        readonly
        type="textarea"
        placeholder="填写会议纪要"
        show-word-limit
        />
  </div>
</template>

<script>
export default {
  name: "addMetting",
  data() {
    return {
      itemMsg: {
        title: "会议",
        about: "The whole night,my classmates and i went to and celebrated the futur",
        type: "1",
        time: "2",
        address: "3",
        host: "4",
        person:'按时到，按时到，无二，为，二分干， 电饭锅， 电饭锅，地方个，和飞哥会， 返回，',
        copy:'6',
        message:"是对方开始就阿开发快"
      },
    };
  },
  created() {
      console.log(this.$route.params.item)
    //   this.itemMsg = this.$route.params.item;
  },
  methods: {
    onType(value) {
      this.itemMsg.type = value;
      this.showType = false;
    },
    onTime(value) {
      this.itemMsg.time = value;
      this.showTime = false;
    },
    onHost(value) {
      this.itemMsg.host = value;
      this.showHost = false;
    },
    selectMember(value) {
      this.itemMsg.person = value;
      this.showMember = false;
    },
    selectCopy(value){
      this.itemMsg.copy = value;
      this.showCopy = false;
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.add-metting {
  width: 94%;
  margin: 1rem auto 0;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 5px;
  height: 90%;
  background: #fff;
  box-sizing: border-box;
  .metting-content{
      height: 3rem;
      width: 100%;
      text-align: left;
      line-height: 3rem;
      color: #323233;
        font-size: 14px;
        padding: 0 1rem;
        box-sizing: border-box
  }
  .members-all{
    height: auto;   
}
}

/deep/ .van-cell{
    height: 3rem;
    .van-field__label{
        text-align: left;
    }
}

</style>
