<template>
    <div class="wrap">

        <HeaderBar class="header-white"></HeaderBar>
        <section>
            <p class="person-message-title">您的姓名</p>

            <div class="mt-100 mb-50">
                <ul class="form-list">
                    <li class="list-item">
                        <div class="item-icon">
                            <i class="iconfont icon-yonghu"></i>
                        </div>
                        <div class="item-body">
                            <input type="password" name="upwd" placeholder="请输入您的真实姓名">
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <router-link class="btn-primary" to="inputBirthday">注册</router-link>
            </div>

        </section>

    </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue'

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