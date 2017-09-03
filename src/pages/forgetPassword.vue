
<template>
	<div class="wrap">

		<HeaderBar class="header-white"></HeaderBar>
		<section>
			<h1 class="text-title mt-100">忘记密码</h1>
			<p class="text">We just need your registerd Email <br>to send you password reset intruction</p>
			<div class="mt-100 mb-50">
				<ul class="form-list">
					<li class="list-item">
						<div class="item-icon">
							<i class="iconfont icon-xinxi"></i>
						</div>
						<div class="item-body">
							<input type="password" name="upwd" placeholder="请输入您的邮箱">
						</div>
					</li>
				</ul>
			</div>
			<div>
				<a class="btn-primary">重置密码</a>
			</div>

			<div class="sign-text-bottom">
				<p>没有账号 ?
					<router-link class="page-link" to="signup">注册</router-link>
				</p>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue'

export default {
	components: {
		HeaderBar,
	},
	name: 'mainpage',
	data() {
		return {
			msg: 'a'
		}
	}
}

</script>
