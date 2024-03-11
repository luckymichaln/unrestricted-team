<template>
  <div>
    UnRestricted Team in progress...
    {{ data }}
    <img :src="data.hero_image.url" style="maxWidth: 100%" />
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      },
    },

    mounted() {
      console.dir(this.data)
    }
  }
</script>
