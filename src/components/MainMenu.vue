<script setup lang="ts">
import AspireLogo from "@/assets/aspire-logo.svg";
import Home from "@/assets/Home.svg";
import Account from "@/assets/Account.svg";
import Card from "@/assets/Card.svg";
import Payments from "@/assets/Payments.svg";
import Credit from "@/assets/Credit.svg";
import { useRouter } from "vue-router";

const router = useRouter();

const toolbarItems = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Card, label: "Cards", path: "/cards" },
  { icon: Payments, label: "Payments", path: "/payments" },
  { icon: Credit, label: "Credit", path: "/credit" },
  { icon: Account, label: "Settings", path: "/settings" },
];

function onClickMenuItem(item: Record<string, any>) {
  if (item.path) {
    router.push(item.path);
  }
}
</script>

<template>
  <div class="main-menu">
    <section class="main-menu__header">
      <q-img
        :src="AspireLogo"
        contain
        style="width: 125px; height: 35px; margin-bottom: 32px"
      />
      <h6 class="main-menu__header__title">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </h6>
    </section>
    <section class="main-menu__toolbar">
      <div
        class="main-menu__toolbar--item"
        v-for="(item, index) in toolbarItems"
        :key="index"
        @click="onClickMenuItem(item)"
      >
        <q-img
          :src="item.icon"
          contain
          style="width: 24px"
          class="main-menu__toolbar--item_img"
        />
        <h6 class="main-menu__toolbar--item_title">{{ item.label }}</h6>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-menu {
  background-color: #0c365a;
  .q-img {
    display: block;
  }
  padding: 60px 48px;
  &__header {
    &__title {
      color: #ffffff;
      font-size: 15px;
      text-align: left;
      margin-bottom: 65px;
    }
  }
  &__toolbar {
    &--item {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-bottom: 60px;
      &_img {
      }
      &_title {
        padding-left: 12px;
        margin: 0px;
      }
    }
  }
}
</style>
