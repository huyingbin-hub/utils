<template>
  <div>
    <div>{{timestamp | normalTime()}}</div>
    <div>{{trim | trim(1)}}</div>
    <div>{{str | changeCase(1)}}</div>
    <div>{{x | toDecimal2()}}</div>
    <div>{{hours}}</div>
    <div>{{welcome}}</div>
    <div v-time="timeNow"></div>
  </div>
</template>

<script>
import "@/utils/time.js";
import { normalTime, trim } from "@/utils/filters";
import {
  timeFix,
  welcome,
  filterObj,
  randomNumber,
  randomString,
  randomUUID,
  getScrollPosition,
  clone
} from "@/utils/util";
export default {
  name: "HelloWorld",
  components: {
    
  },
  data() {
    return {
      data:'',
      timestamp: "",
      trim: "傻 浩",
      str: "xxxxxx",
      x: 566,
      hours: "",
      welcome: "",
      timeNow: "2020-07-23 11:41:00"
    };
  },
  
  mounted() {
    this.getTime();
  },
  methods: {
    onClick(){
      // console.log(this.data)
    },
    getTime() {
      let kk = {
        name: "kk",
        age: "mm",
        dd: "11",
        faves: null,
        lloe: ["xx", "aa", "as"]
      };
      console.log(clone(kk));
      // let ll=151362980
      console.log(getScrollPosition());
      this.hours = timeFix();
      this.welcome = welcome();
      this.timestamp = new Date().getTime();
      console.log(this.timestamp);
      let aa = normalTime(this.timestamp, ".");
      let bb = trim(this.trim, 1);
      console.log(aa, bb);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
