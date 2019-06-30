<template>
	<div class="banner">
		<div class="swiper-container" :class="swiperid">
			<div class="swiper-wrapper" >
				<slot name="swiper-con"></slot>
			</div>
			<!-- 如果需要分页器 -->
			<div :class="{'swiper-pagination':paginationshow}"></div>

			<!-- 如果需要导航按钮 -->
			<!-- <div class="swiper-button-prev"></div>
		    <<div class="swiper-button-next"></div> -->
 
			<!-- 如果需要滚动条
			<!--<div class="swiper-scrollbar"></div>-->
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		//props 高级写法
		props:{
			swiperid:{type:String,default:''},//唯一标识
			paginationshow:{type:Boolean,default:true},//是否显示分页器
	        paginationtype:{type:String,default:"bullets"},//分页器样式
	        effecttype:{type:String,default:'swiper'},
	        autoplaytype:{type:Boolean,default:false},
	        looptype:{type:Boolean,default:true}
		},
		mounted:function() {
			console.log(this.paginationtype)
			 new Swiper('.'+this.swiperid, {
//				direction: 'vertical', // 垂直切换选项S
				loop: this.looptype, // 循环模式选项
				autoplay:this.autoplaytype,//是否需要自动播放

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					type:this.paginationtype
				},
                 effect:this.effecttype
			})
		}
	}
</script>
<style lang="less">
.banner{
	width: 100%;
	height:360/75rem;
	color: #fff ;
	padding-bottom: 15/75rem;;
	margin-top:10/75rem;
	// overflow: hidden;
}

.swiper-slide img{
	width: 100%;
	height: 100%;
}

</style>
