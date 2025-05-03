<template>
  <div
    class="row justify-end q-mt-md relative-position cursor-pointer show-number"
    :style="{ 'z-index': 100 }"
    @click="showCardNumber = !showCardNumber"
  >
    <q-img :src="eyeLogo" style="width: 18px; margin-right: 4px" />
    Show Cad Number
  </div>
  <div class="card-container q-pa-md" :class="{ frozen: card.frozen }">
    <div class="card q-pa-md q-mb-md">
      <div class="row justify-end q-mt-md">
        <q-img :src="aspireLogo" style="width: 85px; height: 24px" />
      </div>

      <div class="row justify-between items-start card__name">
        {{ card.name }}
      </div>

      <div class="row items-center text-white q-mt-md card__number">
        <div class="text-h6">
          {{ maskedCardNumber }}
        </div>
      </div>

      <div class="row q-mt-sm text-white text-caption">
        <div class="q-mr-lg">Thru: {{ card.expiry }}</div>
        <div>CVV: {{ maskedCVV }}</div>
      </div>

      <div class="row justify-end q-mt-md">
        <q-img :src="visaLogo" style="width: 50px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";
import aspireLogo from "@/assets/aspire-logo-white.svg";
import visaLogo from "@/assets/visa-logo.svg";
import { Card } from "@/types/card";
import eyeLogo from "@/assets/eye.svg";

const showCardNumber = ref(false);

const props = defineProps<{ card: Card }>();

const maskedCardNumber = computed(() =>
  showCardNumber.value
    ? props.card.number
    : "•••• •••• •••• " + props.card.number.split(" ")[3]
);

const maskedCVV = computed(() => (props.card.number ? props.card.cvv : "***"));
</script>

<style lang="scss">
.card-container {
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
  &.frozen {
    opacity: 0.6;
  }
}

.show-number {
  color: #01d167;
  font-weight: bold;
  font-size: 12px;
}
.card {
  background-color: #01d167;
  border-radius: 16px;
  color: white;
  position: relative;
  &__name {
    font-size: 24px;
    font-weight: 600;
  }
  &__number {
    font-size: 14px;
  }
}
</style>
