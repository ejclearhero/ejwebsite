<template>
  <nav
  class="navbar navbar-expand-lg bg-white border-bottom shadow fixed-top">
    <div class="container">
      <!-- LOGO -->
      <router-link to="/">
      <img src="@/assets/images/logo_gray.svg" alt="Logo" class="logo-img">
      </router-link>
      <!-- <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo_gray.svg" alt="Logo" class="logo-img">
      </a> -->

      <!-- 漢堡按鈕 -->
      <button class="navbar-toggler"
      type="button"
      aria-label="Toggle navigation"
      @click="toggleCollapse">
        <i class="bi bi-list fs-1"></i>
      </button>

      <!-- 收合選單 -->
      <div class="collapse navbar-collapse fs-6" ref="collapseTarget">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"
              @click.prevent="scrollToSection('about')">
              關於亦傑
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              @click.prevent="scrollToSection('serviceFlow')">服務流程</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
            @click.prevent="scrollToSection('serviceItem')">服務項目</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('emergency')">聯絡我們</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  name: 'NavbarModal',
  data() {
    return {
      collapse: null,
      isSticky: false,
    };
  },
  mounted() {
    // 引用模組 Collapse，用 new Collapse(...) 初始化 ref 對象即可。
    this.collapse = new Collapse(this.$refs.collapseTarget, {
      toggle: false, // 避免自動打開
    });
  },
  methods: {
    toggleCollapse() {
      this.collapse.toggle();
    },
    // navbar 錨點設定
    scrollToSection(id) {
      const targetEl = document.getElementById(id);
      if (targetEl) {
        // ✅ 平滑滾動
        targetEl.scrollIntoView({ behavior: 'smooth' });
        // ⛔ 自動收合 mobile 漢堡選單
        const collapseEl = this.$refs.collapseTarget;
        if (collapseEl.classList.contains('show')) {
          collapseEl.classList.remove('show');
        }
      }
    },
  },
};
</script>

<style scoped>
.navbar-toggler {
  border: none;
}
</style>
