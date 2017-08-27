<template>

	<section class="signin-wrapper">

		<h1 class="main-title">SIGN IN</h1>
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
			<a class="btn-primary">登 录</a>

			<a class="btn-primary">使用 QQ账号 登录</a>
		</div>

        <div class="sign-text-bottom">
            <p>没有账号 ?<a>注册</a></p>
        </div>

	</section>

</template>
