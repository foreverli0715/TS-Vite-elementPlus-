<template>
  <div class="system-content">
    <el-row class="row-bg" justify="space-around">
      <el-col class="col-card" :xs="24" :sm="24" :md="10" :lg="5" :xl="5">
        <div class="amount-card">
        <div>
          <div>总销售额</div>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="指标说明"
            placement="top"
          >
            <el-icon :size="15"><InfoFilled /></el-icon>
          </el-tooltip>
        </div>
        <div class="card-bottom">
          <div class="card-bottom-right">
            <div>￥123,322</div>
            <div>
              <div style="position: relative;margin-right: 15px;">
                周同比 12%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-bottom: #f70f0f 4px solid;"></span>
              </div>
              <div style="position: relative;margin-right: 15px;">
                日同比 11%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-top: 4px solid #00ad19;
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;"></span>
              </div>
            </div>
          </div>
          <div class="card-bottom-left">
            <el-image style="width: 70px; height: 70px" src="../../../public/img/system1.png" fit="cover" />
          </div>
        </div>
      </div>
      </el-col>
      <el-col class="col-card" :xs="24" :sm="24" :md="10" :lg="5" :xl="5">
        <div class="amount-card">
        <div>
          <div>用户总量</div>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="/ 人"
            placement="top"
          >
            <el-icon :size="15"><InfoFilled /></el-icon>
          </el-tooltip>
        </div>
        <div class="card-bottom">
          <div class="card-bottom-right">
            <div>500 +</div>
            <div>
              <div style="position: relative;margin-right: 15px;">
                日活跃率: 73%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-bottom: #f70f0f 4px solid;"></span>
              </div>
              <div style="position: relative;margin-right: 15px;">
                月活跃率: 65%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-bottom: #f70f0f 4px solid;"></span>
              </div>
            </div>
          </div>
          <div class="card-bottom-left">
            <el-image style="width: 70px; height: 70px" src="../../../public/img/system2.png" fit="cover" />
          </div>
        </div>
      </div>
      </el-col>
      <el-col class="col-card" :xs="24" :sm="24" :md="10" :lg="5" :xl="5">
        <div class="amount-card">
        <div>
          <div>工作时长</div>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="/ 月"
            placement="top"
          >
            <el-icon :size="15"><InfoFilled /></el-icon>
          </el-tooltip>
        </div>
        <div class="card-bottom">
          <div class="card-bottom-right">
            <div>148.5 h</div>
            <div>
              <div style="position: relative;margin-right: 15px;">
                日完成度: 100%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-top: 4px solid #00ad19;
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;"></span>
              </div>
              <div style="position: relative;margin-right: 15px;">
                月完成度: 85%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-top: 4px solid #00ad19;
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;"></span>
              </div>
            </div>
          </div>
          <div class="card-bottom-left">
            <el-image style="width: 70px; height: 70px" src="../../../public/img/system3.png" fit="cover" />
          </div>
        </div>
      </div>
      </el-col>
      <el-col class="col-card" :xs="24" :sm="24" :md="10" :lg="5" :xl="5">
        <div class="amount-card">
        <div>
          <div>商品评价</div>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="/ 条"
            placement="top"
          >
            <el-icon :size="15"><InfoFilled /></el-icon>
          </el-tooltip>
        </div>
        <div class="card-bottom">
          <div class="card-bottom-right">
            <div>12.5 万</div>
            <div>
              <div style="position: relative;margin-right: 15px;">
                好评: 98%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-left: 4px solid transparent;
                  border-right: 4px solid transparent;
                  border-bottom: #f70f0f 4px solid;"></span>
              </div>
              <div style="position: relative;margin-right: 15px;">
                差评: 2%
                <span style="
                  width: 0;
                  height: 0;
                  top: 10px;
                  right: -11px;
                  position: absolute;
                  border-top: 4px solid #00ad19;
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;"></span>
              </div>
            </div>
          </div>
          <div class="card-bottom-left">
            <el-image style="width: 70px; height: 70px" src="../../../public/img/system4.png" fit="cover" />
          </div>
        </div>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
</script>

<style lang="scss" scoped>
  .system-content{
    margin: 0 auto;
    width: 97%;
    .row-bg{
      & > .el-col{
        background-color: #fff;
        margin-top: 15px;
      }
      .col-card{
        .amount-card{
          width: 100%;
        &:hover{
          box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .25);
          transition: all .2s ease-in-out;
        }
        & > div:first-child{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 35px;
          border-bottom: #f0f0f0 1px solid;
          padding: 0 12px;
          font-size: 13px;
        }
        .card-bottom {
          display: flex;
          justify-content: space-between;
          height: 110px;
          padding: 12px;
          .card-bottom-right{
            & > div:first-child{
              color:  rgba(0,0,0,.85);
              font-size: 26px;
              text-align: left;
              padding: 10px 0;
            }
            & > div:last-child{
              display: flex;
              align-items: center;
              font-size: 13px;
              margin: 20px 0;
            }
          }
        }
      }
    }
  }
}
</style>
