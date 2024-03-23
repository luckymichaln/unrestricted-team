<template>
  <section class="home-section partners section-accent section-accent--light" id="partners">
    <div class="container">
      <prismic-rich-text class="heading heading--big" :field="data.primary.heading" />
      <prismic-rich-text class="text text--boxed text--center" :field="data.primary.description" />
      <ul class="logotypes">
        <li>Logo 1</li>
        <li>Logo 2</li>
        <li>Logo 3</li>
        <li>Logo 4</li>
        <li>Logo 5</li>
        <li>Logo 6</li>
        <li>Logo 7</li>
        <li>Logo 8</li>
      </ul>
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