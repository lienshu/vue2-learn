<template>
  <div>
    emit
  </div>
</template>

<!-- <script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.28.5/date_fns.min.js"></script> -->

<script>

export default {
  name: 'Vue2LearnIndex',

  data() {
    return {
      picker: ''
    };
  },

  mounted() {
    this.picker = new Pikaday({

    })
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>