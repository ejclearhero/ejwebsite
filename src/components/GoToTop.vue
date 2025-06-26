<template>
  <button class="go-top-btn btn btn-primary rounded-circle"
  v-show="isVisible" @click="scrollToTop" aria-label="回到頂部">
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: 'GoToTop',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.go-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
</style>
