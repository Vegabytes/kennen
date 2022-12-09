<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-table
        title="Employee Salary List"
        :data="data"
        :hide-header="mode === 'grid'"
        :columns="columns"
        row-key="name"
        :grid="mode=='grid'"
        :filter="filter"
        :pagination.sync="pagination"
      >
        <template v-slot:top-right="props">
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
        <template v-slot:body-cell-detail="props">
          <q-td :props="props">
            <q-btn @click="employee_dialog=true" dense round color="secondary" icon="pageview"/>
          </q-td>
        </template>
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <div class="q-gutter-sm">
              <q-btn dense color="primary" icon="edit"/>
              <q-btn dense color="red" icon="delete"/>
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="employee_dialog">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-h6">
            Employee Details
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">US Region</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Mayank Patel</div>
            <div class="text-caption text-grey">
              Sales and Marketing Executive | Graduate and past committee | Keynote speaker on Selling and Recruiting
              Topics
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            />
          </q-card-section>
        </q-card-section>

        <q-separator/>

        <q-card-section>
          Assessing clients needs and present suitable promoted products. Liaising with and persuading targeted doctors
          to prescribe our products utilizing effective sales skills.
        </q-card-section>
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
                employee_dialog: false,
                columns: [
                    {
                        name: "serial_no",
                        align: "left",
                        label: "Identificador",
                        field: "serial_no",
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
                        name: "email",
                        align: "left",
                        label: "Email",
                        field: "email",
                        sortable: true
                    },
                    {
                        name: "profile",
                        align: "left",
                        label: "Perfil",
                        field: "profile",
                        sortable: true
                    },
                    {
                        name: "status",
                        align: "left",
                        label: "Estado",
                        field: "status",
                        sortable: true
                    },
                    {
                        name: "action",
                        align: "left",
                        label: "Action",
                        field: "action",
                        sortable: true
                    }
                ],
                data: [
                    {
                        serial_no: "01",
                        name: "Batman",
                        email: "batman@gmailcom",
                        profile: "SuperAdmin",
                        status: "Activo",
                    },
                    {
                        serial_no: "01",
                        name: "Superman",
                        email: "superman@gmailcom",
                        profile: "Empleado",
                        status: "Activo",
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

                const status = exportFile("employee_salary_list.csv", content, "text/csv");

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
