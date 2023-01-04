<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-table title="Pedidos" :data="data" :hide-header="mode === 'grid'" :columns="columns" row-key="invoice_id"
        :grid="mode == 'grid'" :filter="filter" :pagination.sync="pagination"
        :visible-columns="visibleColumns">
        <template v-slot:top="props">
        <q-space />

        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="invoice_id" label="ID" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="reference" label="Referencia" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="tracking" label="Tracking" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="email" label="Email" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="date" label="Fecha" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="name" label="Nombre" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="address" label="Dirección" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="zip_code" label="Código postal" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="city" label="Ciudad" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="state" label="Provincia" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="country" label="País" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="phone" label="Teléfono" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="product" label="Producto" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="product_image" label="Foto" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="product_link" label="Enlace" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="payment" label="Pago" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="cost" label="Precio coste" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="pvp" label="PVP" />
          <q-toggle checked-icon="add" unchecked-icon="remove" v-model="visibleColumns" val="status" label="Estado" />
<!--           <q-tocggle v-model="visibleColumns" val="incidence" label="Incidencias" /> -->

        </div>
        <q-select
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

          <q-input outlined dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen" v-if="mode === 'list'">
            <q-tooltip
              :disable="$q.platform.is.mobile"
              v-close-popup
            >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}
            </q-tooltip>
          </q-btn>

          <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_view'"
            @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
            v-if="!props.inFullscreen">
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === 'grid' ? 'List' : 'Grid' }}
            </q-tooltip>
          </q-btn>
          <q-btn flat dense icon="download" class="float-right" @click="exportTable"
            :color="!$q.dark.isActive ? 'grey-8' : 'white'">
            <q-tooltip>Exportar a CSV</q-tooltip>
          </q-btn>
      </template>
        <template v-slot:body="props">
          <q-tr :props="props"  :class="props.row.incidences && 'bg-warning'">
            <q-td style="text-align:center" key="invoice_id" :props="props" >
              <q-btn size="sm" color="primary" outline flat @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
              {{ props.row.invoice_id }}
            </q-td>
            <q-td style="text-align:center" key="reference" :props="props">
              {{ props.row.reference }}
            </q-td>
            <q-td style="text-align:center" key="tracking" :props="props">
              {{ props.row.tracking }}
            </q-td>
            <q-td style="text-align:center" key="email" :props="props">
              <div class="text-pre-wrap">{{ props.row.email }}</div>
            </q-td>
            <q-td style="text-align:center" key="date" :props="props">
              {{ props.row.date }}
            </q-td>
            <q-td style="text-align:center" key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td style="text-align:center" key="address" :props="props">{{ props.row.address }}</q-td>
            <q-td style="text-align:center" key="zip_code" :props="props">{{ props.row.zip_code }}</q-td>
            <q-td style="text-align:center" key="city" :props="props">{{ props.row.city }}</q-td>
            <q-td style="text-align:center" key="state" :props="props">{{ props.row.state }}</q-td>
            <q-td style="text-align:center" key="country" :props="props">{{ props.row.country }}</q-td>
            <q-td style="text-align:center" key="phone" :props="props">{{ props.row.phone }}</q-td>
            <q-td style="text-align:center" key="product" :props="props">{{ props.row.product }}</q-td>
            <q-td style="text-align:center" key="product_image" :props="props">{{ props.row.product_image }}</q-td>

            <q-td style="text-align:center" key="product_link" :props="props">{{ props.row.product_link }}</q-td>
            <q-td style="text-align:center" key="payment" :props="props">{{ props.row.payment }}</q-td>
            <q-td style="text-align:center" key="cost" :props="props">
              {{ props.row.cost }}€
              <q-popup-edit v-model="props.row.cost" title="Precio de coste" buttons persistent v-slot="scope">
                <q-input type="text" v-model="scope.value" dense autofocus hint="Haz click para cerrar"/>
              </q-popup-edit>
            </q-td>
            <q-td style="text-align:center" key="pvp" :props="props">{{ props.row.pvp }}</q-td>
            <q-td style="text-align:center" key="status" :props="props">
              <q-chip
              style="padding:1rem 0.7rem"
              :color="props.row.color"
              text-color="white"
              dense
              class="text-weight-bolder"
              square
            >{{props.row.status}}
            </q-chip>

            </q-td>
            <q-td style="text-align:center" key="incidences" :props="props">
              <q-btn v-if="!props.row.incidences" flat dense icon="notification_important">
                <q-tooltip>Añadir incidencia</q-tooltip>
              </q-btn>
              {{ props.row.incidences }}
              <q-popup-edit v-model="props.row.incidences" title="Incidencias" buttons persistent v-slot="scope">
                <q-input type="text" v-model="scope.value" dense autofocus hint="Haz click para cerrar" />
              </q-popup-edit>
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
          <q-td colspan="10%">
            <div class="text-left">{{ props.row.incidences ? props.row.incidences : "Añadir incidencia"}}.</div>
            <q-popup-edit v-model="props.row.incidences" title="Incidencias" buttons persistent v-slot="scope">
                <q-input type="text" v-model="scope.value" dense autofocus hint="Haz click para cerrar" />
              </q-popup-edit>
          </q-td>
        </q-tr>
        </template>



      </q-table>
    </q-card>
  </q-page>
</template>

<script>
import { exportFile } from "quasar";
import { ref } from 'vue'
import { checkServerIdentity } from "tls";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
}

export default {
  data() {
    return {
      filter: "",
      mode: "list",
      invoice: {},
      invoice_dialog: false,
      visibleColumns: [ 'invoice_id', 'reference', 'tracking', 'email', 'date', 'name', 'address', 'zip_code','city','state','country','phone','product','product_image','product_link','payment','cost','pvp','status' ],
      columns: [
        {
          name: "invoice_id",
          align: "center",
          label: "ID",
          field: "invoice_id",
          sortable: true
        },
        {
          name: "reference",
          align: "center",
          label: "Referencia",
          field: "reference",
          sortable: true
        },
        {
          name: "tracking",
          align: "center",
          label: "Tracking",
          field: "tracking",
          sortable: true
        },
        {
          name: "email",
          align: "center",
          label: "Email",
          field: "email",
          sortable: true
        },
        {
          name: "date",
          align: "center",
          label: "Fecha",
          field: "date",
          sortable: true
        },
        {
          name: "name",
          align: "center",
          label: "Nombre",
          field: "name",
          sortable: true
        },
        {
          name: "address",
          align: "center",
          label: "Dirección",
          field: "address",
          sortable: true
        },
        {
          name: "zip_code",
          align: "center",
          label: "Código postal",
          field: "zip_code",
          sortable: true
        },
        {
          name: "city",
          align: "center",
          label: "Ciudad",
          field: "city",
          sortable: true
        },
        {
          name: "state",
          align: "center",
          label: "Provincia",
          field: "state",
          sortable: true
        },
        {
          name: "country",
          align: "center",
          label: "País",
          field: "country",
          sortable: true
        },
        {
          name: "phone",
          align: "center",
          label: "Teléfono",
          field: "phone",
          sortable: true
        },
        {
          name: "product",
          align: "center",
          label: "Producto",
          field: "product",
          sortable: true
        },
        {
          name: "product_image",
          align: "center",
          label: "Foto",
          field: "product_image",
          sortable: true
        },
        {
          name: "product_link",
          align: "center",
          label: "Enlace",
          field: "product_link",
          sortable: true
        },
        {
          name: "payment",
          align: "center",
          label: "Pago",
          field: "payment",
          sortable: true
        },
        {
          name: "cost",
          align: "center",
          label: "Precio coste",
          field: "cost",
          sortable: true
        },
        {
          name: "pvp",
          align: "center",
          label: "PVP",
          field: "pvp",
          sortable: true
        },

        {
          name: "status",
          align: "center",
          label: "Estado",
          field: "status",
          sortable: true
        },
/*         {
          name: "incidences",
          align: "center",
          label: "Incidencias",
          field: "incidences",
          sortable: true
        } */
      ],
      data: [
        {
          invoice_id: "C001",
          reference: "XXXXXXXX",
          tracking: "XXXXXXX",
          email: "xxxx@gmail.com",
          date: "09-02-2019",
          name: "Batman",
          address: "Gotham",
          zip_code: "xxx",
          city: "Gotham City",
          state: "Gotham state",
          country: "EEUU",
          phone: "+xx xxx-xxx-xx",
          product: "Nike Air Force One Blancas",
          product_image: "xxx",
          product_link: "xxx",
          payment: "Tarjeta Redsys",
          cost: "50.00",
          pvp: "67.05€",
          status: "Pago aceptado",
          color: "accent",
          incidences: "Integer vitae vehicula magna, fermentum dignissim mi euismod"
        },
        {
          invoice_id: "C002",
          reference: "XXXXXXXX",
          tracking: "XXXXXXX",
          email: "xxxx@gmail.com",
          date: "03-25-2019",
          name: "Batman",
          address: "Gotham",
          zip_code: "xxx",
          city: "Gotham City",
          state: "Gotham state",
          country: "EEUU",
          phone: "+xx xxx-xxx-xx",
          product: "Dr. Martens Altas Plataforma Negras",
          product_image: "xxx",
          product_link: "xxx",
          payment: "Tarjeta Redsys",
          cost: "50.00",
          pvp: "180,0€",
          status: "Pago aceptado",
          color: "accent",
          incidences: ""
        },
        {
          invoice_id: "C003",
          reference: "XXXXXXXX",
          tracking: "XXXXXXX",
          email: "xxxx@gmail.com",
          date: "03-25-2019",
          name: "Batman",
          address: "Gotham",
          zip_code: "xxx",
          city: "Gotham City",
          state: "Gotham state",
          country: "EEUU",
          phone: "+xx xxx-xxx-xx",
          product: "Dr. Martens Altas Plataforma Negras",
          product_image: "xxx",
          product_link: "xxx",
          payment: "Tarjeta Redsys",
          cost: "50.00",
          pvp: "59,05€",
          status: "Pendiente",
          color: "primary",
          incidences: ""
        },
        {
          invoice_id: "C004",
          reference: "XXXXXXXX",
          tracking: "XXXXXXX",
          email: "xxxx@gmail.com",
          date: "03-25-2019",
          name: "Batman",
          address: "Gotham",
          zip_code: "xxx",
          city: "Gotham City",
          state: "Gotham state",
          country: "EEUU",
          phone: "+xx xxx-xxx-xx",
          product: "Dr. Martens Altas Plataforma Negras",
          product_image: "xxx",
          product_link: "xxx",
          payment: "Tarjeta Redsys",
          cost: "50.00",
          pvp: "87,05€",
          status: "Pago rechazado",
          color: "negative",
          incidences: "bla bla"

        },
      ],
      pagination: {
        rowsPerPage: 10
      }
    };
  },
  methods: {
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map(col => wrapCsvValue(col.label))]
        .concat(
          this.data.map(row =>
            this.columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("invoices.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
  },

  computed: {
  hasIncidence() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
};
</script>

<style>
.q-chip__content {
  display: block;
  text-align: center;
}

.q-table th.sortable {
  cursor: pointer;
  font-weight: bold;
}
.q-toggle__inner--truthy {
color: #E8C124;
}
.q-btn {
  text-transform: capitalize;
}

.q-table__card .q-table__top {
  align-items: flex-start;
}
</style>


