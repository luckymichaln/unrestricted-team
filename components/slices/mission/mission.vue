<template>
  <section class="home-section mission" id="mission">
  <div class="container">
    <prismic-rich-text class="heading heading--big" :field="data.primary.heading" />
    <prismic-rich-text class="text text--boxed text--center" :field="data.primary.description" />
  </div>
</section>
</template>

<script>
export default {
  props: {
    data: {
        type: Object,
        default: () => {}
      },
  }
}
</script>

<style>

</style>