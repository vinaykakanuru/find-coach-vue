import { createApp, defineAsyncComponent } from "vue";
import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";

// import "bootstrap"; // To include bootstrap, install bootstrap and popper using npm
// npm install --save @popperjs/core
// npm install --save bootstrap

import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
// import BaseDialog from "./components/ui/BaseDialog.vue";

// calling BaseDialog Component asynchronously i.e., component downloads when needed.
// All other components downloads for every hit on our App in browser. check Network tab in devtools.
const BaseDialog = defineAsyncComponent(() =>
  import("./components/ui/BaseDialog.vue")
);

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
