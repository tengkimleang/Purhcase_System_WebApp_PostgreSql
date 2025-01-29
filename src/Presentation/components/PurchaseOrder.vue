<style scoped>
  .float-end {
    float: right;
  }
  .align-content-center {
    align-content: center;
  }
  .mr-1{
    margin-right: 10px;
  }
  .p-1{
    padding-left: 10px;
    padding-right: 10px;
  }
  /* Use deep selector for nested internal elements */
  ::v-deep(.custom-text-field .v-input) {
    min-height: auto; /* Remove the default min-height */
    height: 50px; /* Set desired height for input wrapper */
    border: 0;
  }

  ::v-deep(.v-field--active) input{
    opacity: 0 !important;
  }

  ::v-deep(.custom-text-field .v-field) {
    min-height: auto; /* Optionally adjust min-height of the field itself */
    height: 50px; /* Set height for visual consistency */
    border: 0;
  }

</style>

<template>
  <v-layout>
    <v-container>
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

    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
</script>


