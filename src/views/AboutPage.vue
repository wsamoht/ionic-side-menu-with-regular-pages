<template>
  <ion-page>
    <ion-content>
      <h1>Some About Stuff Here</h1>
      <IonButton
        :router-link="{ name: 'menu.folder', params: { id: 'Inbox' } }"
      >
        Go to folders
      </IonButton>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonContent, IonPage } from "@ionic/vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    IonButton,
    IonContent,
    IonPage,
  },
  setup() {
    // do stuff
  },
});
</script>
