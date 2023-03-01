// import Vue from "vue";

const loadMore = {
  bind(el, binding) {
    const SELECTWRAP_DOM = el;
    console.log(binding, 'binding')
    console.log(SELECTWRAP_DOM)
    console.log(document, 'document');
    // mounted: function () {
    window.addEventListener('scroll', function () {
      const condition = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight;
      if (condition) {
        console.log('111111')
      }
    });
    // }

  }
}

export default loadMore;