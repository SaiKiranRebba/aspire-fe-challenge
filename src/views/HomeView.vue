<template>
  <div class="row no-wrap home-view">
    <div
      class="text-white column home-view__left"
      style="width: 340px; min-height: 100vh"
    >
      <main-menu></main-menu>
    </div>

    <div class="column home-view__right" style="flex: 1">
      <div class="row justify-between items-center home-view__right__info">
        <section class="home-view__right__balance">
          <div class="home-view__right__balance-title">Available balance</div>
          <span class="home-view__right__balance-val">
            <div class="home-view__right__balance-val__dollar">S$</div>
            3,000
          </span>
        </section>
        <q-btn
          class="home-view__right__add"
          @click="openModal"
          style="text-transform: none; font-weight: bold"
        >
          <q-img :src="PlusIcon" style="width: 16px; margin-right: 8px" />
          New card
        </q-btn>
      </div>

      <tab-section class="home-view__right__tabs"></tab-section>

      <div class="flex home-view__main row">
        <section class="col-6">
          <q-carousel
            v-model="currentSlide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            height="300px"
            class="bg-white text-white rounded-borders"
            infinite
            :autoplay="false"
          >
            <q-carousel-slide
              v-for="card in cards"
              :key="card.id"
              :name="card.id"
            >
              <CardItem :card="card" />
            </q-carousel-slide>
          </q-carousel>
          <tool-bar-section
            @freeze-card="onFreezeCard"
            :card="currentCard"
          ></tool-bar-section>
        </section>
        <div class="col-1"></div>
        <trasaction-section
          class="col-4"
          :card="currentCard"
        ></trasaction-section>
      </div>
    </div>
  </div>

  <AddCardModal ref="addCardModal" @card-added="onCardAdded" />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import CardItem from "@/components/CardItem.vue";
import AddCardModal from "@/components/AddCardModal.vue";
import ToolBarSection from "@/components/ToolBarSection.vue";
import TrasactionSection from "@/components/TrasactionSection.vue";
import MainMenu from "@/components/MainMenu.vue";
import PlusIcon from "@/assets/box.svg";
import TabSection from "@/components/TabSection.vue";

const store = useStore();

const addCardModal = ref();

const cards = computed(() => store.getters.cards);

const currentSlide = ref(cards.value.length > 0 ? cards.value[0].id : null);

const currentCard = computed(() => {
  const currentIndex = cards.value.findIndex(
    (c: any) => c.id === currentSlide.value
  );
  return cards.value[currentIndex];
});

function openModal() {
  addCardModal.value.show = true;
}

function onCardAdded(card) {
  store.dispatch("addCard", card);
}

function onFreezeCard() {
  if (currentCard.value) {
    store.dispatch("toggleFreeze", currentCard.value.id);
  }
}
</script>

<style lang="scss">
.q-carousel__control {
  //top: 10px !important;
  &.q-btn-content {
    color: #01d167 !important;
  }
}
.q-btn-content {
  color: #01d167 !important;
}
.q-carousel {
  height: auto; /* Adjust as needed */
}

.q-carousel-slide {
  padding: 16px;
  display: flex;
  justify-content: center; /* Center the CardItem horizontally */
}
.home-view {
  &__right {
    padding: 60px 60px 20px 60px;
    &__info {
      margin-bottom: 20px;
    }
    &__balance {
      &-title {
        display: flex;
        font-size: 14px;
        color: #222222;
        margin-bottom: 8px;
      }
      &-val {
        display: flex;
        justify-items: center;
        align-items: center;
        &__dollar {
          background-color: #01d167;
          margin-right: 8px;
          padding: 2px 8px;
          border-radius: 4px;
          color: white;
          font-size: 13px;
        }
        font-size: 26px;
        font-weight: bold;
        color: #222222;
      }
    }
    &__tabs {
      margin-bottom: 20px;
    }
    &__add {
      background-color: #325baf !important;
      color: #fff !important;
      font-weight: bold !important;
      font-size: 13px !important;
    }
  }
  &__main {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 40px;
    border-radius: 14px;
  }
}
</style>
