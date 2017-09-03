<template>
    
        <section class="signin-wrapper">
    
            <h1 class="main-title">SIGN UP</h1>
            <ul class="form-list">
                <li class="list-item">
                    <div class="item-icon">
                        <i class="iconfont icon-yonghu"></i>
                    </div>
                    <div class="item-body">
                        <input type="text" name="uname" placeholder="请输入您的用户名">
                    </div>
                    
                </li>
                <li class="list-item">
                    <div class="item-icon">
                        <i class="iconfont icon-mima"></i>
                    </div>
                    <div class="item-body">
                        <input type="password" name="upwd" placeholder="请输入密码">  
                    </div>
                </li>
                <li class="list-item">
                    <div class="item-icon">
                        <i class="iconfont icon-mima"></i>
                    </div>
                    <div class="item-body">
                        <input type="password" name="upwd" placeholder="请再次输入密码">  
                    </div>
                </li>
                <li class="list-item">
                    <div class="item-icon">
                        <i class="iconfont icon-xinxi"></i>
                    </div>
                    <div class="item-body">
                        <input type="password" name="upwd" placeholder="请输入您的邮箱">  
                    </div>
                </li>
            </ul>
    
            <div class="mt-60">
                <router-link class="btn-primary" to="personMessage/inputName">注 册</router-link>
            </div>
    
            <div class="sign-text-bottom">
                <p>
                    已有账号 ?
                    <router-link class="page-link" to="signup">登录</router-link>
                </p>
            </div>
    
        </section>
    
    </template>
    