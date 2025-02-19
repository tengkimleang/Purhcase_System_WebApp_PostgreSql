<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="align-content-center">
          <!-- Save Icon -->
          <v-icon color="secondary" size="24" class="mr-1">
            mdi-content-save
          </v-icon>
          <!-- Title of the Function -->
          <span class="ml-4 text-h6">Purchase Order</span>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" >
          <div class="float-end">
            <v-btn prepend-icon="mdi-content-save">
              List
            </v-btn>
            &nbsp;
            <v-btn prepend-icon="mdi-content-save">
              Save
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3">
          <v-text-field label="Vendor Code"
                        class="custom-text-field p-1"
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3">
          <!--            <v-text-field label="Order Date"-->
          <!--                          class="custom-text-field p-1"-->
          <!--                          variant="underlined"/>-->
          <v-date-input label="Date input"
                        class="custom-text-field p-1"
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3">
          <v-text-field label="Order Number"
                        class="custom-text-field p-1"
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3">

        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3">
          <v-text-field label="Vendor Name"
                        class="custom-text-field p-1"
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-text-field label="Ship To"
                        class="custom-text-field p-1"
                        variant="underlined"/>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
</script>
