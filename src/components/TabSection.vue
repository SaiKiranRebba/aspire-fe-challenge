<template>
  <div class="row items-center no-wrap">
    <!-- Tabs -->
    <div class="row q-gutter-md">
      <div
        class="tab-item"
        :class="{ active: selectedTab === 'my' }"
        @click="selectedTab = 'my'"
      >
        My debit cards
      </div>

      <div
        class="tab-item"
        :class="{ active: selectedTab === 'company' }"
        @click="selectedTab = 'company'"
      >
        All company cards
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTab = ref("my");
</script>

<style scoped>
.tab-item {
  font-size: 14px;
  font-weight: 500;
  color: #bbb;
  position: relative;
  cursor: pointer;
  transition: color 0.2s;
}

.tab-item.active {
  font-weight: 700;
  color: #222222;
}

.tab-item.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #00b2ff; /* Adjust underline color */
  border-radius: 2px;
}
</style>
