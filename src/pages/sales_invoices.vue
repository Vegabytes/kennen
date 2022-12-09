<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-table
        title="Invoices"
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
            :icon="mode === 'grid' ? 'list' : 'grid_on'"
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
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-chip
              :color="(props.row.status == 'Active')?'green':(props.row.status == 'Inactive'?'red':'grey')"
              text-color="white"
              dense
              class="text-weight-bolder"
              square
              style="width: 85px"
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
          <q-btn label="Save" type="submit" color="primary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
    import {exportFile} from "quasar";

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
                        name: "account",
                        required: true,
                        label: "Artículo",
                        align: "left",
                        field: "account",
                        sortable: true
                    },
                    {
                        name: "client",
                        required: true,
                        label: "Cliente",
                        align: "left",
                        field: "client",
                        sortable: true
                    },
                    {
                        name: "amount",
                        align: "left",
                        label: "Total",
                        field: "amount",
                        sortable: true
                    },
                    {
                        name: "invoice_date",
                        align: "left",
                        label: "Fecha de factura",
                        field: "invoice_date",
                        sortable: true
                    },
                    {
                        name: "invoice_type",
                        align: "left",
                        label: "Forma de pago",
                        field: "invoice_type",
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
                        reference:"UPKNQIRQL",
                        account: "Nike Air Force One Blancas",
                        client:"Cliente1",
                        amount: "67,05",
                        invoice_type: "Tarjeta Redsys",
                        status: "Pago aceptadoe",
                        invoice_date: "09-02-2019",
                    },
                    {
                        invoice_id: "C002",
                        reference:"UPKNQIRQL",
                        account: "Dr. Martens Altas Plataforma Negras",
                        client:"Cliente1",
                        amount: "87,05€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Últmo recordatorio de pago",
                        invoice_date: "03-25-2019",

                    },
                    {
                        invoice_id: "C003",
                        reference:"UPKNQIRQL",
                        account: "Converse All Star Plataforma Altas Blancas",
                        client:"Cliente1",
                        amount: "65,16€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "03-18-2019",

                    },
                    {
                        invoice_id: "C004",
                        reference:"UPKNQIRQL",
                        account: "Nike Air Force One Negras",
                        client:"Cliente1",
                        amount: "67,05€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Inactive",
                        invoice_date: "04-09-2019",

                    },
                    {
                        invoice_id: "C005",
                        reference:"UPKNQIRQL",
                        account: "Converse All Star Altas De Plataforma Negras",
                        client:"Cliente1",
                        amount: "65,16€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "09-03-2019",

                    },
                    {
                        invoice_id: "C006",
                        reference:"UPKNQIRQL",
                        account: "Nike Air Force One Blancas Altas",
                        client:"Cliente1",
                        amount: "76,55€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "01-12-2019",

                    },
                    {
                        invoice_id: "C007",
                        reference:"UPKNQIRQL",
                        account: "Converse Run Star Hike High Top Negras",
                        client:"Cliente1",
                        amount: "64,05€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "04-15-2019",

                    },
                    {
                        invoice_id: "C008",
                        reference:"UPKNQIRQL",
                        account: "CONVERSE ALL STAR CUERO PLATAFORMA ALTAS NEGRAS",
                        client:"Cliente1",
                        amount: "100€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "11-09-2019",

                    },
                    {
                        invoice_id: "C009",
                        reference:"UPKNQIRQL",
                        account: "CONVERSE CHUCK TAYLOR MOVE NEGRAS",
                        client:"Cliente1",
                        amount: "105€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Inactive",
                        invoice_date: "01-01-2019",

                    },
                    {
                        invoice_id: "C010",
                        reference:"UPKNQIRQL",
                        account: "CONVERSE RUN STAR HIKE HIGH LOW TOP BLANCAS",
                        client:"Cliente1",
                        amount: "105€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "04-12-2019",

                    },
                    {
                        invoice_id: "C011",
                        reference:"UPKNQIRQL",
                        account: "CONVERSE ALL STAR ROJAS BAJAS",
                        client:"Cliente1",
                        amount: "70€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "10-09-2019",

                    },
                    {
                        invoice_id: "C012",
                        reference:"UPKNQIRQL",
                        account: "CONVERSE CHUCK TAYLOR MOVE BEIGE",
                        client:"Cliente1",
                        amount: "115€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "01-02-2019",

                    },
                    {
                        invoice_id: "C014",
                        reference:"UPKNQIRQL",
                        account: "CONVERSE ALL STAR NEGRAS ENTERAS BAJAS",
                        client:"Cliente1",
                        amount: "70€",
                        invoice_type: "Tarjeta Redsys",
                        status: "Active",
                        invoice_date: "07-06-2019",

                    }
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
</style>
