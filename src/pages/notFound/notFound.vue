<template>
  <div class="not-found">
    <div class="not-found-img"></div>
    <div class="not-found-content">
      <div>Page missing, please return</div>
      <button @click="goBack">返回</button>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 返回上一级
 */
const goBack = () => {
    history.go(-1)
}
</script>

<style lang="scss" scoped>
.not-found{
  width: 100%;
  height: 100%;
  .not-found-img{
    width: 100%;
    height: 550px;
    background: url('../../static/img/404.png') center no-repeat;
  }
  .not-found-content{
    text-align: center;
    & > div{
      padding: 10px 0;
      font-size: 24px;
      font-weight: 800;
    }
    & > button{
      cursor: pointer;
      background: #ff4b2b;
      padding: 10px 50px;
      border: 1px solid transparent;
      border-radius: 20px;
      text-transform: uppercase;
      color: white;
      margin-top: 10px;
      outline: none;
      transition: transform 80;
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>
