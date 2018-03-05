<template>
	<table class="table is-bordered is-striped is-narrow is-hoverable">
      <tr>
        <th></th><th v-for="i in time" :key="time">{{i}}</th>
      </tr>
      <Factory v-for="(job, index ) in listTimeJob" :job="job" :index="index" :key="job"></Factory>           
  </table>
</template>

<script>
	import  Factory from './Factory.vue'
	
	export default {
		props:['time'],
	
		computed: {
			listTimeJob(){
				return this.$store.getters.GetlistTimeJob
			}
		},
		
	
		components:{
			Factory 
		}
	}
</script>

<style scoped>
table{
	margin: 0 auto;
	width: 867px;
	overflow-x: scroll;
	display: block;
}
</style>