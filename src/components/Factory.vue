<template>
  <tr>
    <th>{{index}}</th>
    <td v-for="t in job">{{t}}</td>
  </tr>
</template>

<script>
export default {
  props:['job', 'index']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
