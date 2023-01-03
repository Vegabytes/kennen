<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-table
        title="Pedidos"
        :data="data"
        :hide-header="mode === 'grid'"
        :columns="columns"
        row-key="name"
        :grid="mode=='grid'"
        :filter="filter"
        :pagination.sync="pagination"
      >
        <template v-slot:top-right="props">
<!--           <q-btn
            @click="invoice_dialog=true"
            outline
            color="primary"
            label="Add New"
            class="q-mr-xs"
          /> -->

          <q-input outlined dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>

          <q-btn
            flat
            round
            dense
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"
            v-if="mode === 'list'"
          >
            <q-tooltip
              :disable="$q.platform.is.mobile"
              v-close-popup
            >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}
            </q-tooltip>
          </q-btn>

          <q-btn
            flat
            round
            dense
            :icon="mode === 'grid' ? 'list' : 'grid_view'"
            @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
            v-if="!props.inFullscreen"
          >
            <q-tooltip
              :disable="$q.platform.is.mobile"
              v-close-popup
            >{{mode==='grid' ? 'List' : 'Grid'}}
            </q-tooltip>
          </q-btn>
          <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                       :color="!$q.dark.isActive? 'grey-8':'white'">
                  <q-tooltip>Exportar a CSV</q-tooltip>
                </q-btn>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
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
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="invoice_dialog">
      <q-card style="width: 600px; max-width: 60vw;">
        <q-card-section>
          <div class="text-h6">
            Add new invoice
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Account</q-item-label>
                  <q-input dense outlined v-model="invoice.account" label="Account"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Amount</q-item-label>
                  <q-input dense outlined v-model="invoice.amount" label="Amount"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Invoice Date</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="invoice.invoice_date"
                    mask="date"
                    label="Invoice Date"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="invoiceDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="invoice.invoice_date"
                            @input="() => $refs.invoiceDateProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Due Date</q-item-label>
                  <q-input dense outlined v-model="invoice.due_date" mask="date" label="Due Date">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="dueDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="invoice.due_date"
                            @input="() => $refs.dueDateProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Invoice Type</q-item-label>
                  <q-input dense outlined v-model="invoice.invoice_type" label="Invoice Type"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Status</q-item-label>
                  <q-input dense outlined v-model="invoice.status" label="Status"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-teal">
          <q-btn label="Guardar" type="submit" color="positive" text-color="white" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
    import {exportFile} from "quasar";
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
                columns: [
                    {
                        name: "invoice_id",
                        align: "left",
                        label: "ID",
                        field: "invoice_id",
                        sortable: true
                    },
                    {
                        name: "reference",
                        align: "left",
                        label: "Referencia",
                        field: "reference",
                        sortable: true
                    },
                    {
                        name: "tracking",
                        align: "left",
                        label: "Tracking",
                        field: "tracking",
                        sortable: true
                    },
                    {
                        name: "email",
                        align: "left",
                        label: "Email",
                        field: "email",
                        sortable: true
                    },
                    {
                        name: "date",
                        align: "left",
                        label: "Fecha",
                        field: "date",
                        sortable: true
                    },
                    {
                        name: "name",
                        align: "left",
                        label: "Nombre",
                        field: "name",
                        sortable: true
                    },
                    {
                        name: "address",
                        align: "left",
                        label: "Dirección",
                        field: "address",
                        sortable: true
                    },
                    {
                        name: "zip_code",
                        align: "left",
                        label: "Código postal",
                        field: "zip_code",
                        sortable: true
                    },
                    {
                        name: "city",
                        align: "left",
                        label: "Ciudad",
                        field: "city",
                        sortable: true
                    },
                    {
                        name: "state",
                        align: "left",
                        label: "Provincia",
                        field: "state",
                        sortable: true
                    },
                    {
                        name: "country",
                        align: "left",
                        label: "País",
                        field: "country",
                        sortable: true
                    },
                    {
                        name: "phone",
                        align: "left",
                        label: "Teléfono",
                        field: "phone",
                        sortable: true
                    },
                    {
                        name: "product",
                        align: "left",
                        label: "Producto",
                        field: "product",
                        sortable: true
                    },
                    {
                        name: "product_image",
                        align: "left",
                        label: "Foto",
                        field: "product_image",
                        sortable: true
                    },
                    {
                        name: "product_link",
                        align: "left",
                        label: "Enlace",
                        field: "product_link",
                        sortable: true
                    },
                    {
                        name: "payment",
                        align: "left",
                        label: "Pago",
                        field: "payment",
                        sortable: true
                    },
                    {
                        name: "cost",
                        align: "left",
                        label: "Precio coste",
                        field: "cost",
                        sortable: true
                    },
                    {
                        name: "pvp",
                        align: "left",
                        label: "PVP",
                        field: "pvp",
                        sortable: true
                    },

                    {
                        name: "status",
                        align: "left",
                        label: "Estado",
                        field: "status",
                        sortable: true
                    }
                ],
                data: [
                    {
                        invoice_id: "C001",
                        reference:"XXXXXXXX",
                        tracking:"XXXXXXX",
                        email:"xxxx@gmail.com",
                        date:"09-02-2019",
                        name:"Batman",
                        address:"Gotham",
                        zip_code:"xxx",
                        city:"Gotham City",
                        state:"Gotham state",
                        country:"EEUU",
                        phone:"++xx xxx-xxx-xx",
                        product:"Nike Air Force One Blancas",
                        product_image:"xxx",
                        product_link:"xxx",
                        payment:"Tarjeta Redsys",
                        cost:"",
                        pvp:"67.05",
                        status: "Pago aceptado",
                        color:"accent"
                    },
                    {
                        invoice_id: "C002",
                        reference:"XXXXXXXX",
                        tracking:"XXXXXXX",
                        email:"xxxx@gmail.com",
                        date:"03-25-2019",
                        name:"Batman",
                        address:"Gotham",
                        zip_code:"xxx",
                        city:"Gotham City",
                        state:"Gotham state",
                        country:"EEUU",
                        phone:"++xx xxx-xxx-xx",
                        product:"Dr. Martens Altas Plataforma Negras",
                        product_image:"xxx",
                        product_link:"xxx",
                        payment:"Tarjeta Redsys",
                        cost:"",
                        pvp:"180,0€",
                        status: "Pago aceptado",
                        color:"accent"
                    },
                    {
                        invoice_id: "C003",
                        reference:"XXXXXXXX",
                        tracking:"XXXXXXX",
                        email:"xxxx@gmail.com",
                        date:"03-25-2019",
                        name:"Batman",
                        address:"Gotham",
                        zip_code:"xxx",
                        city:"Gotham City",
                        state:"Gotham state",
                        country:"EEUU",
                        phone:"++xx xxx-xxx-xx",
                        product:"Dr. Martens Altas Plataforma Negras",
                        product_image:"xxx",
                        product_link:"xxx",
                        payment:"Tarjeta Redsys",
                        cost:"",
                        pvp:"59,05€",
                        status: "Pendiente",
                        color:"primary"
                    },
                    {
                        invoice_id: "C004",
                        reference:"XXXXXXXX",
                        tracking:"XXXXXXX",
                        email:"xxxx@gmail.com",
                        date:"03-25-2019",
                        name:"Batman",
                        address:"Gotham",
                        zip_code:"xxx",
                        city:"Gotham City",
                        state:"Gotham state",
                        country:"EEUU",
                        phone:"++xx xxx-xxx-xx",
                        product:"Dr. Martens Altas Plataforma Negras",
                        product_image:"xxx",
                        product_link:"xxx",
                        payment:"Tarjeta Redsys",
                        cost:"",
                        pvp:"87,05€",
                        status: "Pago rechazado",
                        color:"negative"
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
</style>


