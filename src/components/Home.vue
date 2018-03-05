<template>
  <div class="factory">
    <app-table :time="time"></app-table>
  </div>
</template>

<script>

import Table from './Table.vue'

export default {
  
  computed:{
    time(){      
      return this.$store.state.time;
    }
  },

  components:{
    appTable: Table
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
