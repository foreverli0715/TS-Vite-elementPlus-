<template>
  <div class="brand-story">
    <el-row :gutter="15">
      <template v-for="item of 15">
        <el-col v-bind="layout">
          <el-card shadow="hover" body-style="padding: 0px;" class="story-card">
            <el-image :src="imageSrc" class="image-card"/>
            <div style="padding: 14px">
              <div style="text-align: left;">商品名称</div>
              <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                color: #999;
                margin-top: 10px;"
              >
                <div>商品描述</div>
                <div>
                  <el-button color="#626aef" plain size="small" text style="min-height: auto;">go</el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageSrc = "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

const layout = {
  xl: 2,
  lg: 4,
  md: 8,
  sm: 12,
  xs: 24
}
</script>

<style lang="scss" scoped>
.brand-story{
  width: 98%;
  margin: 10px auto;
  .story-card{
    margin-bottom: 15px;
    .image-card{
      width: 100%;
    }
  }

}
</style>
