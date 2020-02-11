<template>
  <div class="add-metting">
    <!-- 主题 -->
    <van-field v-model="mettingMsg.title" label="主题" placeholder="请输入" input-align="right" />
    <!-- 简介 -->
    <van-field v-model="mettingMsg.about" label="简介" placeholder="请输入" input-align="right" />
    <!-- 类型 -->
    <van-field
      readonly
      clickable
      label="类型"
      :value="mettingMsg.type"
      placeholder="选择类型"
      @click="showType = true"
      input-align="right"
    />
    <van-popup v-model="showType" position="bottom">
      <van-picker
        show-toolbar
        :columns="mettingMsg.columns"
        @cancel="showType = false"
        @confirm="onType"
      />
    </van-popup>
    <!-- 时间 -->
    <van-field
      readonly
      clickable
      label="时间"
      :value="mettingMsg.time"
      placeholder="选择时间"
      @click="showTime = true"
      input-align="right"
    />
    <van-popup v-model="showTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>

    <!-- 地点 -->
    <van-field v-model="mettingMsg.address" label="地点" placeholder="请输入" input-align="right" />
    <!-- 会议主持 -->
    <van-field
      readonly
      clickable
      label="会议主持"
      :value="mettingMsg.host"
      placeholder="选择会议主持"
      @click="showHost = true"
      input-align="right"
    />
    <van-popup v-model="showHost" position="bottom">
      <van-picker
        show-toolbar
        :columns="mettingMsg.hostList"
        @cancel="showHost = false"
        @confirm="onHost"
      />
    </van-popup>
    <!-- 参会人员 -->
    <van-field
      readonly
      clickable
      label="参会人员"
      :value="mettingMsg.person"
      placeholder="选择参会人员"
      @click="showMember = true"
      input-align="right"
    />
    <van-popup v-model="showMember" position="bottom">
      <van-picker
    show-toolbar
    :columns="mettingMsg.members"
    @cancel="showMember = false"
    @confirm="selectMember"
  />
  </van-popup>
  <!-- 抄送人员 -->
    <van-field
      readonly
      clickable
      label="抄送"
      :value="mettingMsg.copy"
      placeholder="选择抄送人员"
      @click="showCopy = true"
      input-align="right"
    />
    <van-popup v-model="showCopy" position="bottom">
      <van-picker
    show-toolbar
    :columns="mettingMsg.copyRen"
    @cancel="showCopy = false"
    @confirm="selectCopy"
  />
    </van-popup>
    <!-- 会议纪要 -->
    <div class="metting-content">会议纪要</div>
    <van-field
        v-model="mettingMsg.message"
        rows="2"
        autosize
        type="textarea"
        placeholder="填写会议纪要"
        show-word-limit
        />

 <div class="add-btn">
      <van-button class="vant-add-btn" round type="warning" >保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addMetting",
  data() {
    return {
      mettingMsg: {
        title: "",
        about: "",
        type: "",
        time: "",
        address: "",
        host: "",
        person:'',
        copy:'',
        showPicker: false,
        columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
        timeList: ["2020-01-01", "2020-01-02"],
        hostList: ["曹胖儿", "曹胖儿2号"],
        members: ["曹胖儿", "曹胖儿2号"],
        copyRen:["曹胖儿", "曹胖儿2号"],
        message:""
      },
      showType: false,
      showTime: false,
      showHost: false,
      showMember:false,
      showCopy:false,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  created() {
    //   console.log(this.list)
  },
  methods: {
    onType(value) {
      this.mettingMsg.type = value;
      this.showType = false;
    },
    onTime(value) {
      this.mettingMsg.time = value;
      this.showTime = false;
    },
    onHost(value) {
      this.mettingMsg.host = value;
      this.showHost = false;
    },
    selectMember(value) {
      this.mettingMsg.person = value;
      this.showMember = false;
    },
    selectCopy(value){
      this.mettingMsg.copy = value;
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
}
.add-btn {
    height: 5rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding-top: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    .vant-add-btn {
      padding: 0 7rem;
    }
  }
/deep/ .van-cell{
    height: 3rem;
    .van-field__label{
        text-align: left;
    }
}

</style>
