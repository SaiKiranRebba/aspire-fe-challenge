<template>
  <div class="q-pa-md transaction-card">
    <!-- Card Details -->
    <q-expansion-item
      expand-separator
      icon="description"
      label="Card details"
      header-class="bg-light"
      dense
      class="transaction-card__details"
    >
      <template v-slot:header>
        <div class="q-gutter-sm row items-center full-width">
          <img :src="Details" alt="icon" style="width: 20px; height: 20px" />
          <div class="transaction-card__details-title">Card details</div>
        </div>
      </template>
      <div class="q-pa-sm">Card number: {{ props.card?.number }}</div>
    </q-expansion-item>

    <!-- Recent Transactions -->
    <q-expansion-item
      expand-separator
      header-class="bg-light"
      default-opened
      dense
      class="transaction-card__trasactions"
    >
      <template v-slot:header>
        <div class="q-gutter-sm row items-center full-width">
          <img
            :src="Transactions"
            alt="icon"
            style="width: 20px; height: 20px"
          />
          <div class="transaction-card__trasactions-title">
            Recent transactions
          </div>
        </div>
      </template>
      <div v-for="(txn, i) in transactions" :key="i">
        <div class="row items-start q-py-md q-px-md trasaction-item">
          <q-avatar
            size="48px"
            :style="{ backgroundColor: txn.iconBg }"
            class="q-mr-md"
          >
            <q-img :src="txn.icon" style="width: 16px" />
          </q-avatar>
          <div class="column trasaction-item__info">
            <div class="row justify-between items-center">
              <div class="trasaction-item__info__title">{{ txn.name }}</div>
              <div
                :class="txn.amount > 0 ? 'text-positive' : 'text-negative'"
                class="trasaction-item__info__val"
              >
                {{
                  txn.amount > 0
                    ? "+ S$ " + txn.amount
                    : "- S$ " + Math.abs(txn.amount)
                }}
              </div>
            </div>
            <div class="trasaction-item__info__date flex">{{ txn.date }}</div>
            <div class="flex">
              <div class="trasaction-item__info__icon">
                <q-img :src="Finance" style="width: 10px; margin-top: -4px" />
              </div>
              <div class="text-primary text-caption">{{ txn.subtext }}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-green-1 text-center transaction-card__trasactions__viewall"
      >
        View all card transactions
      </div>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import FileStorage from "@/assets/file-storage.svg";
import Flights from "@/assets/flights.svg";
import Megaphone from "@/assets/megaphone.svg";
import Transactions from "@/assets/transactions.svg";
import Details from "@/assets/details.svg";
import Finance from "@/assets/business-and-finance.svg";
import { Card } from "@/types/card";

const transactions = [
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: 150,
    icon: FileStorage,
    iconBg: "#E0F7FA",
    subtext: "Refund on debit card",
  },
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    icon: Flights,
    iconBg: "#E8F5E9",
    subtext: "Charged to debit card",
  },
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    icon: Megaphone,
    iconBg: "#FCE4EC",
    subtext: "Charged to debit card",
  },
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    icon: FileStorage,
    iconBg: "#E3F2FD",
    subtext: "Charged to debit card",
  },
];

const props = defineProps<{ card: Card }>();
</script>

<style lang="scss">
.transaction-card {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 12px;
  .bg-light {
    background-color: #f5f9ff;
  }
  &__details {
    margin-bottom: 14px;
    &-title {
      font-size: 14px;
    }
  }
  &__trasactions {
    &-title {
      font-size: 14px;
    }
    &__viewall {
      color: #01d167;
      border: 1px solid #ddffec;
      padding: 20px;
    }
  }
  .q-expansion-item {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    .q-item {
      height: 72px;
    }
  }
}
.trasaction-item {
  &__info {
    width: 80%;
    &__title {
      color: #222222;
      font-size: 14px;
      font-weight: bold;
    }
    &__val {
      font-weight: bold;
    }
    &__date {
      color: #aaaaaa;
      font-size: 13px;
    }
    &__icon {
      background-color: #325baf;
      border-radius: 50%;
      width: 24px;
      height: 20px;
      margin-right: 4px;
    }
  }
}
</style>
