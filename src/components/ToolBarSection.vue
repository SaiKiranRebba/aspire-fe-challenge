<template>
  <div class="toolbox q-pa-md q-mx-auto">
    <div class="row justify-around q-gutter-md">
      <div
        v-for="(btn, index) in toolbarButtons"
        :key="index"
        class="column items-center text-center toolbox__item"
        @click="onClickToolBarItem(btn)"
      >
        <q-img :src="btn.icon" style="width: 32px; height: 32px" />
        <div class="text-caption q-mt-sm">
          {{
            btn.id === "freeze-card"
              ? props.card.frozen
                ? "UnFreeze card"
                : "Freeze Card"
              : btn.label
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add your component logic here if needed
import FreezeCard from "@/assets/freeze-card.svg";
import SpeedLimit from "@/assets/set-spend-limit.svg";
import Gpay from "@/assets/gPay.svg";
import ReplaceCard from "@/assets/replace-card.svg";
import DeactivateCard from "@/assets/deactivate-card.svg";
import { defineEmits, defineProps } from "Vue";
import { Card } from "@/types/card";

const emits = defineEmits(["freeze-card"]);

const props = defineProps<{ card: Card }>();

const toolbarButtons = [
  { label: "Freeze card", icon: FreezeCard, id: "freeze-card" },
  { label: "Set spend limit", icon: SpeedLimit, id: "speedLimit" },
  { label: "Add to GPay", icon: Gpay, id: "gpay" },
  { label: "Replace card", icon: ReplaceCard, id: "reply-card" },
  { label: "Cancel card", icon: DeactivateCard, id: "cancel-card" },
];

function onClickToolBarItem(btn) {
  if (btn.id === "freeze-card") {
    emits("freeze-card");
  }
}
</script>

<style lang="scss">
.toolbox {
  background-color: #edf3ff;
  border-radius: 16px;
  max-width: 800px;
  border: 1px solid #cfdbe6;
  &__item {
    cursor: pointer;
    width: 60px;
  }
}

.icon-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  //background-color: #0c365a;
}
</style>
