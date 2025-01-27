<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

// Access the Vue Router instance
const router = useRouter();

// Extracted reusable constants
const AVATAR_URL = "https://randomuser.me/api/portraits/men/85.jpg"; // Centralized avatar URL

// Ref function for navigating to routes
const navigateTo = (path: string) => {
  if (router) {
    router.push(path);
  } else {
    console.error("Router instance is not available.");
  }
};

// State variables with better naming for clarity
const isDrawerOpen = ref(true);
const isMiniDrawer = ref(false);

// Function to generate reusable list items
const createListItem = (icon: string, title: string, value: string) => ({
  prependIcon: icon,
  title,
  value,
});

const navItems = [
  createListItem("mdi-home-city", "Home", ""),
  createListItem("mdi-purse", "Purchase Order", "purchase-order"),
  // createListItem("mdi-account-group-outline", "Users", "users"),
];
</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar :elevation="2">
        <v-list-item :prepend-avatar="AVATAR_URL" title="John Leider" nav>
          <template v-slot:append>
            <v-btn
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="isMiniDrawer = !isMiniDrawer"
            ></v-btn>
          </template>
        </v-list-item>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="navigateTo('/logout')">
              <v-list-item-title>Sign Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer
          v-model="isDrawerOpen"
          :rail="isMiniDrawer"
          permanent
          @click="isMiniDrawer = false"
          overlay-color="transparent"
      >
        <v-list density="compact" nav>
          <v-list-item
              v-for="item in navItems"
              :key="item.value"
              :prepend-icon="item.prependIcon"
              :title="item.title"
              :value="item.value"
              @click="navigateTo(item.value)"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view> <!-- Render the active route's component -->
      </v-main>
    </v-app>
  </v-responsive>
</template>
<style scoped>
/deep/ .v-list-item__overlay {
  background-color: rgba(25, 118, 210, 0.1) !important;
}

::v-deep(.v-list-item__overlay) {
  background-color: rgba(0, 152, 87, 0.5) !important; /* Deep selector for scoped styling */
}
</style>



