<template>
  <q-dialog v-model="show">
    <q-card class="q-pa-md" style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">Add New Card</div>
      </q-card-section>

      <q-form @submit.prevent="submitForm" ref="formRef">
        <q-card-section class="q-gutter-md">
          <q-input
            filled
            v-model="form.name"
            label="Cardholder Name"
            :rules="[(val) => !!val || 'Name is required']"
          />

          <q-input
            filled
            v-model="form.number"
            label="Card Number"
            mask="#### #### #### ####"
            :rules="[
              (val) => !!val || 'Card number is required',
              (val) =>
                val.replace(/\s/g, '').length === 16 ||
                'Card number must be 16 digits',
            ]"
          />

          <q-input
            filled
            v-model="form.expiry"
            label="Expiry Date"
            mask="##/##"
            :rules="[(val) => !!val || 'Expiry date is required']"
          />

          <q-input
            filled
            v-model="form.cvv"
            label="CVV"
            mask="###"
            :rules="[
              (val) => !!val || 'CVV is required',
              (val) => val.length === 3 || 'CVV must be 3 digits',
            ]"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="primary"
            v-close-popup
            @click="show = false"
          />
          <q-btn label="Add Card" color="primary" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineEmits, defineExpose } from "vue";
import { uid } from "quasar";
import { useStore } from "vuex";

const emit = defineEmits(["card-added"]);
const store = useStore();

const show = ref(false);
const formRef = ref(null);

const form = ref({
  name: "",
  number: "",
  expiry: "",
  cvv: "",
});

function resetForm() {
  form.value = {
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  };
}

async function submitForm() {
  const valid = await formRef.value.validate();
  console.log("Form valid?", valid);

  if (valid) {
    emit("card-added", {
      id: uid(),
      ...form.value,
      frozen: false,
    });
    show.value = false;
    resetForm();
  }
}

// expose `show` control to parent
defineExpose({ show });
</script>
