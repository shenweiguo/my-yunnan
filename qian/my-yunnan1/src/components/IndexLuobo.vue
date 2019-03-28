<template>
	<div>
		<div>
			<carousel :indicators="true" :auto="3000">
       				 <div v-for="i in lunbo">
        				<img v-bind:src=recommendSrc />
      				  </div>
   				</carousel>
		</div>
	</div>
</template>
<script>
	
	import Carousel from 'vue-m-carousel'
	export default {
		props: ['recommendSrc','recommendImg'],
		components: {
			Carousel
		}
	}
</script>