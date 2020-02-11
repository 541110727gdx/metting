<template>
<div>
    <div class="item" v-for="(item,index) in list" :key="index" @click="goDetail(item)">
        <div class="con">
            <div class="title">{{item.title}}</div>
            <div class="main">{{item.main}}</div>
            <div class="person">{{item.persons}}</div>
        </div>
        <div class="metting-date"> 
            <div v-if="item.type ==1" class="metting-type today">{{item.date}}</div>
                <div v-else class="metting-type">{{item.date}}</div>
        </div>
        
    </div>
</div>
    
</template>

<script>
export default {
  name: "index",
  props: ["list"],
  data() {
    return {};
  },
  created() {
      console.log(this.list)
  },
  methods: {
      goDetail(item) {
          this.$emit('getItem',item)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.item{
    width: 94%;
    height: auto;
    box-shadow: 0px 0px 3px #ccc;
    margin: 1rem auto 0;
    background: #fff;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 5px
}
.con{
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    width: 96%;
    margin: 0 auto;
    text-align: left;
    padding-bottom: .8rem;
}
.title{
    font-size: 18px;
    text-align: left;
    color: #000;
    margin:.8rem 0;
}
.main{
    font-size: 14px;
    color: #ccc;
    margin: .8rem 0;
}
.persons{
    color: #000;
    font-size: 16px;
}
.metting-date{
    height: 2rem;
    text-align: right;
    width: 96%;
    margin: 0 auto;
    padding: 1rem 0 0;
    
}
.metting-type{
   height: 2rem;
    text-align: center;
    width: 7rem;
    line-height: 2rem;
    float: right;
    background: #eee;
    border-radius: 5px;

}
.today{
    color: darkorange;
    background: rgb(243, 206, 160);
}
</style>
