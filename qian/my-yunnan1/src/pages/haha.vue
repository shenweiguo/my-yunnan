<template>
	<div>
		<div class="searchBar" id="searchBar">
			<ul>
				<li @click="toggle(1)">产品特色<i class="iconfont icon-jiantouxia"></i></li>
				<li @click="toggle(2)">详细说明<i class="iconfont icon-jiantouxia"></i></li>
				<li @click="toggle(3)">常见问题<i class="iconfont icon-jiantouxia"></i></li>
			</ul>
			<ul v-show="searchBarFixed" class="isFixed">
				<li @click="toggle(1)">产品特色<i class="iconfont icon-jiantouxia"></i></li>
				<li @click="toggle(2)">详细说明<i class="iconfont icon-jiantouxia"></i></li>
				<li @click="toggle(3)">常见问题<i class="iconfont icon-jiantouxia"></i></li>
			</ul>
		</div>
		<div style="height: 1000px;background: red;">234</div>
	</div>

</template>

<script>
	export default {
		mounted() {
			window.addEventListener('scroll', this.handleScroll)

		},
		methods: {
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
					document.body.scrollTop
				console.log(scrollTop)
			},
			toggle(tabIndex) {
				this.whichTab = tabIndex
				window.location.href = '#searchBar' // 锚点
			},
			destroyed() {
				window.removeEventListener('scroll', this.handleScroll)
			}
		}

	}
</script>

<style>
	.searchBar {
		.isFixed {
			position: fixed;
			background-color: #Fff;
			top: 0;
			z-index: 999;
		}
		ul {
			WIDTH: 100%;
			height: 40px;
			line-height: 40px;
			display: flex;
			li {
				font-size: 0.8rem;
				text-align: center;
				flex: 1;
				i {
					font-size: 0.9rem;
					padding-left: 5px;
					color: #ccc;
				}
			}
			border-bottom: 1px solid #ddd;
		}
	}
</style>