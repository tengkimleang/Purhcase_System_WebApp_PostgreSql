<script setup lang="ts">
import {useRouter} from "vue-router";

// Access the Vue Router instance
const router = useRouter();

const navigateTo = (path: string) => {
  if (router) {
    router.push(path); // Navigate to the provided route
  } else {
    console.error('Router instance is not available.');
  }
};

</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Application Bar</v-app-bar-title>

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
      <v-navigation-drawer>
        <v-list>
          <!-- HomePage -->
          <v-list-item
              @click="navigateTo('/')"
              class="custom-list-item"
          >
            <v-icon start>mdi-home</v-icon>
            HomePage
          </v-list-item>

          <!-- Purchase Order -->
          <v-list-item
              @click="navigateTo('/purchase-order')"
              class="custom-list-item"
          >
            <v-icon start>mdi-cart-outline</v-icon>
            Purchase Order
          </v-list-item>
        </v-list>
      </v-navigation-drawer>



      <v-main>
        <router-view></router-view> <!-- Render the active route's component -->
      </v-main>
    </v-app>
  </v-responsive>
</template>


<style scoped>
/* Custom hover style for list items */
.custom-list-item {
  transition: all 0.3s ease; /* Smooth transition for hover effect */
}

.custom-list-item:hover {
  background-color: #d3d3d3; /* Light grey background */
  color: black; /* Override text color to black for better visibility if needed */
  border-radius: 4px; /* Optional: add rounded corners */
}
</style>

