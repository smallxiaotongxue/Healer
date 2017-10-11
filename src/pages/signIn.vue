<template>
    <section class="signin-wrapper">

        <h1 class="main-title">SIGN IN</h1>
        <ul class="form-list">
            <li class="list-item">
                <div class="item-icon">
                    <i class="iconfont icon-yonghu"></i>
                </div>
                <div class="item-body">
                    <input type="text" name="uname" placeholder="请输入您的用户名" v-model="uname">
                </div>

            </li>
            <li class="list-item">
                <div class="item-icon">
                    <i class="iconfont icon-mima"></i>
                </div>
                <div class="item-body">
                    <input type="password" name="upwd" placeholder="请输入密码" v-model="upwd">
                </div>
            </li>
            <li class="list-item-radio">
                <div class="item-icon">
                    <i class="icon-radio"></i>
                </div>
                <div class="item-body">
                    <div>下次自动登录</div>
                </div>
                <div class="item-foot">
                    <i class="iconfont icon-bangzhudisc c-696969"></i>
                </div>
            </li>
        </ul>

        <div>
            <a class="btn-primary" @click="submitMessage">登 录</a>

            <router-link class="btn-primary" to="/">使用 QQ账号 登录</router-link>
        </div>

        <div class="sign-text-bottom">
            <p>没有账号 ?
                <router-link class="page-link" to="signup">注册</router-link>
                <router-link class="page-link" to="forgetPassword">忘记密码</router-link>
            </p>
            </p>
        </div>

    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            uname: '',
            upwd: '',
        }
    },
    computed: {
        //判断用户名
        rightUserName: function() {
            return /^[a-zA-Z0-9_-]{8,16}$/gi.test(this.uname)
        },
        //密码强度正则，最少8位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        rightUserPassword: function(){
            return /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/ig.test(this.upwd);
        }
    },
    methods: {

        submitMessage() {
            if (!this.rightUserName && !this.rightUserPassword) {
                return;
            }
            axios.post('/static/mockdata/queryUser.json', {
                    uname: this.uname,
                    upwd: this.upwd
                })
                .then(function(response) {
                    console.log(response.message);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
}
</script>

