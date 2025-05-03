// import "./styles/quasar.sass";
// import "@quasar/extras/material-icons/material-icons.css";
// import { Dialog, Notify } from "quasar";
// import lang from "quasar/lang/en-US";
// import { QuasarPluginOptions } from "quasar";
//
// // Define the options
// const quasarUserOptions: QuasarPluginOptions = {
//   config: {},
//   plugins: {
//     Dialog,
//     Notify,
//   },
//   lang,
// };
//
// export default quasarUserOptions;

import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";

import {
  Quasar,
  QCarousel,
  QCarouselSlide,
  QBtn,
  QCard,
  QCardSection,
  QCardActions,
  QDialog,
  QInput,
  QImg,
  QIcon,
  QItem,
  QItemLabel,
  Notify,
  QExpansionItem,
  Dialog,
  QAvatar,
  QForm,
} from "quasar";

export default {
  config: {},
  components: {
    QBtn,
    QCard,
    QCardSection,
    QCardActions,
    QDialog,
    QInput,
    QImg,
    QIcon,
    QCarousel,
    QCarouselSlide,
    QItem,
    QItemLabel,
    QExpansionItem,
    QAvatar,
    QForm,
  },
  plugins: {
    Dialog,
  },
};
