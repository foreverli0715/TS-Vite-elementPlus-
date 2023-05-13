<template>
  <div class="container">
    <div class="login">
      <div class="login-left" :class="isLeft ? 'active-left' : ''">
        <h2>Sign In</h2>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
        >
          <el-form-item prop="account" size="large" style="width: 300px;">
            <el-input v-model="ruleForm.account" autocomplete="off" placeholder="account..."/>
          </el-form-item>
          <el-form-item prop="password" size="large" style="width: 300px;">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              show-password
              placeholder="password..."
            />
          </el-form-item>
        </el-form>
        <div class="check-box">
          <el-checkbox v-model="isKeepPassword" label="记住密码" size="large"/>
        </div>
        <button class="submit" @click="submitForm(ruleFormRef)">Sign In</button>
      </div>
      <div class="login-right" :class="isRight ? 'active-right' : ''">
        <img src="@/../public/vite.svg" alt="vite" style="width: 50px;height: 50px;">
        <h2 >Hello Friend!</h2>
        <p>Welcome to the background management system</p>
        <p>Enter your personal details and start journey with us.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import localCache from '@/utils/cache'
import userLoginStore from '@/store/login/login'
import type { FormInstance, FormRules } from 'element-plus'

const loginStore = userLoginStore()
const ruleFormRef = ref<FormInstance>()
const isLeft = ref(false)
const isRight = ref(false)
const isKeepPassword = ref(false)

const ruleForm = reactive({
  account: localCache.getCache('account') ?? '',
  password: localCache.getCache('password') ?? '',
})

const rules = reactive<FormRules>({
  account: [
              { required: true,
                message: '账号不能为空',
                trigger: 'blur'
              },
              {
                pattern: /^[a-z0-9]{5,10}$/,
                message: '账号必须为5-10个字母或数字',
                trigger: 'blur'
              }
            ],
  password: [
              { required: true,
                message: '密码不能为空',
                trigger: 'blur'
              },
              {
                pattern: /^[a-z0-9]{5,10}$/,
                message: '账号必须为5-10个字母或数字',
                trigger: 'blur'
              }
  ]
})

//登录验证
const onLogin = async () => {
  await loginStore.login(ruleForm)
  if (localCache.getCache('token')) {
    isLeft.value = true
    isRight.value = true
    ElNotification({
            title: '登录成功',
            message: '欢迎使用本系统',
            type: 'success',
          })
  }else{
    ElNotification({
          title: '登录失败',
          message: '密码或账号不正确',
          type: 'error',
        })
  }
  ruleForm.account = ''
  ruleForm.password = ''
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl?.validate((valid) => {
    if (valid) {
      if(isKeepPassword.value) {
        //本地缓存
        localCache.setCache('account', ruleForm.account)
        localCache.setCache('password', ruleForm.password)
      } else {
        localCache.deleteCache('account')
        localCache.deleteCache('password')
      }
      //登录验证
      onLogin()
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(246, 245, 247);
  .login{
    display: flex;
    width: 768px;
    height: 480px;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    .login-left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 384px;
      & > h2{
        margin-bottom: 20px;
        font-size: 32px;
      }
      .check-box{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 300px;
        margin-top: -10px;
      }
      .submit{
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
    .login-right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 384px;
      margin-top: -10px;
      background-color: #ff4b2b;
      & > h2{
        font-size: 32px;
        color: white;
        margin-bottom: 20px;
      }
      & > p{
        font-size: 12px;
        color: white;
        padding: 5px 0;
      }
    }
  }
}

@keyframes left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes right {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.active-left{
  animation: left 0.7s ease forwards;
}
.active-right{
  animation: right 0.7s ease forwards;
}
</style>
