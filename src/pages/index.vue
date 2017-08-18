<template>

	<section >
		<!-- 头部文件 -->
		<HeaderBar></HeaderBar>

		<div class="wrapper">
			<h1 class="customer-name">您好，肖先生</h1>
			<h1 class="title-gray">HOW CAN WE TAKE <br> CARE YOURSELF?</h1>
			<ul class="fun-list">
				<li class="fun-list-item">
					<a class="active">
					<i class="iconfont icon-yisheng"></i>
					<p>寻找医生</p>
					<p>113位医生</p>
				</a>
					<a>
					<i class="iconfont icon-01"></i>
					<p>寻找医院</p>
					<p>获取地址</p>
				</a>
				</li>
				<li class="fun-list-item">
					<a>
					<i class="iconfont icon-menzhenguahao"></i>
					<p>挂号</p>
					<p>排队挂号</p>
				</a>
					<a>
					<i class="iconfont icon-15"></i>
					<p>医疗清单</p>
					<p>3项</p>
				</a>
				</li>
			</ul>
		</div>

		<FooterNav></FooterNav>

	</section>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue'
	import FooterNav from '../components/FooterNav.vue'

	export default {
		components: {
			HeaderBar,
			FooterNav
		},
		name: 'mainpage',
		data() {
			return {
				msg: 'a'
			}
		}
	}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
