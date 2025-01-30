<style scoped lang="sass">

</style>

<template>
  <v-responsive>
    <v-container>
      <v-row no-gutters>
        <v-col cols="11" sm="6" md="6" lg="6" xl="6">
          <!-- Save Icon -->
          <v-icon color="primary" size="24" class="mr-1">
            mdi-content-save
          </v-icon>
          <!-- Title of the Function -->
          <span class="ml-4 text-h6">Purchase Order</span>
        </v-col>
        <v-col cols="11" sm="6" md="6" lg="6" xl="6" >
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
        <v-col cols="12" sm="12" md="6" lg="3" xl="3" class="pl-2 pr-2">
          <v-autocomplete
            label="Vendor Code"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            variant="underlined"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3" class="pl-2 pr-2">
          <!--            <v-text-field label="Order Date"-->
          <!--                          class="custom-text-field p-1"-->
          <!--                          variant="underlined"/>-->
          <v-date-input label="Date input"
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3" class="pl-2 pr-2">
          <v-text-field label="Order Number"
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3" class="pl-2 pr-2">

        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3" xl="3" class="pl-2 pr-2">
          <v-text-field label="Vendor Name"
                        disabled
                        variant="underlined"/>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="pl-2 pr-2">
          <v-text-field label="Ship To"
                        variant="underlined"/>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <v-btn prepend-icon="mdi-plus" style="float: right;">
            Add Line
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-data-table-server
              v-model:items-per-page="itemsPerPage"
              :headers="headers"
              :items="serverItems"
              :items-length="totalItems"
              :loading="loading"
              item-value="name"
              @update:options="loadItems"
            ></v-data-table-server>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-textarea label="Remarks"
                      variant="underlined"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>


<script>
const desserts = [
  {
    productCode: 'Frozen Yogurt',
    productName: 159,
    qty: 6.0,
    unitPrice: 24,
  },
  {
    productCode: 'Jelly bean',
    productName: 375,
    qty: 0.0,
    unitPrice: 94,
  },
  {
    productCode: 'KitKat',
    productName: 518,
    qty: 26.0,
    unitPrice: 65,
  },
  {
    productCode: 'Eclair',
    productName: 262,
    qty: 16.0,
    unitPrice: 23,
  },
  {
    productCode: 'Gingerbread',
    productName: 356,
    qty: 16.0,
    unitPrice: 49,
  },
  {
    productCode: 'Ice cream sandwich',
    productName: 237,
    qty: 9.0,
    unitPrice: 37,
  },
  {
    productCode: 'Lollipop',
    productName: 392,
    qty: 0.2,
    unitPrice: 98,
  },
  {
    productCode: 'Cupcake',
    productName: 305,
    qty: 3.7,
    unitPrice: 67,
  },
  {
    productCode: 'Honeycomb',
    productName: 408,
    qty: 3.2,
    unitPrice: 87,
  },
  {
    productCode: 'Donut',
    productName: 452,
    qty: 25.0,
    unitPrice: 51,
  },
]

const FakeAPI = {
  async fetch ({ page, itemsPerPage, sortBy }) {
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = desserts.slice()

        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a, b) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
          })
        }

        const paginated = items.slice(start, end)

        resolve({ items: paginated, total: items.length })
      }, 500)
    })
  },
}

export default {
  data: () => ({
    itemsPerPage: 6,
    headers: [
      {
        title: 'Product Code',
        align: 'start',
        sortable: false,
        key: 'productCode',
      },
      { title: 'Product Name', key: 'productName', align: 'end' },
      { title: 'Qty', key: 'qty', align: 'end' },
      { title: 'Unit Price', key: 'unitPrice', align: 'end' },
    ],
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems ({ page, itemsPerPage, sortBy }) {
      this.loading = true
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items
        this.totalItems = total
        this.loading = false
      })
    },
  },
}
</script>
