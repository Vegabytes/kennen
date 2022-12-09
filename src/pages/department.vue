<template>
  <q-page>
    <h5 class="q-my-xs q-pt-sm q-ml-md text-black">Contabilidad</h5>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Cuentas
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <q-table
              :data="account_data"
              :columns="columns"
              row-key="name"
              :pagination.sync="pagination"
            >
              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn dense color="primary" icon="edit"/>
                    <q-btn dense color="red" icon="delete"/>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Finanzas
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <q-table
              :data="finance_data"
              :columns="columns"
              row-key="name"
              :pagination.sync="pagination"
            >
              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn dense color="primary" icon="edit"/>
                    <q-btn dense color="red" icon="delete"/>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Ingresos
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <q-table
              :data="hr_data"
              :columns="columns"
              row-key="name"
              :pagination.sync="pagination"
            >
              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn dense color="primary" icon="edit"/>
                    <q-btn dense color="red" icon="delete"/>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Gastos
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <q-table
              :data="it_data"
              :columns="columns"
              row-key="name"
              :pagination.sync="pagination"
            >
              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn dense color="primary" icon="edit"/>
                    <q-btn dense color="red" icon="delete"/>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        name: "serial_no",
                        align: "left",
                        label: "Id.",
                        field: "serial_no",
                        sortable: true
                    },
                    {
                        name: "designation",
                        align: "left",
                        label: "Nombre",
                        field: "designation",
                        sortable: true
                    },
                    {
                        name: "action",
                        align: "left",
                        label: "Acciones",
                        field: "action",
                        sortable: true
                    }
                ],
                finance_data: [
                    {
                        serial_no: "xxxx-xxxx-xx-xxxxxxxxxx",
                        designation: "Admin",
                    },
                    {
                      serial_no: "xxxx-xxxx-xx-xxxxxxxxxx",
                        designation: "Vendedor",
                    },
                    {
                      serial_no: "xxxx-xxxx-xx-xxxxxxxxxx",
                        designation: "Admin",
                    }
                ],
                account_data: [
                    {
                      serial_no: "xxxx-xxxx-xx-xxxxxxxxxx",
                        designation: "BBVA",
                    },
                    {
                      serial_no: "xxxx-xxxx-xx-xxxxxxxxxx",
                        designation: "La Caixa",
                    },
                    {
                      serial_no: "xxxx-xxxx-xx-xxxxxxxxxx",
                        designation: "Banco Popular",
                    }
                ],
                hr_data: [
                    {
                        serial_no: "01",
                        designation: "Ventas",
                    },
                    {
                        serial_no: "02",
                        designation: "Bonificaciones",
                    },
                    {
                        serial_no: "03",
                        designation: "Colaboraciones",
                    }
                ],
                it_data: [
                    {
                        serial_no: "01",
                        designation: "Internet",
                    },
                    {
                        serial_no: "02",
                        designation: "Autónomo",
                    },
                    {
                        serial_no: "03",
                        designation: "Impuestos",
                    }
                ],
                pagination: {
                    rowsPerPage: 5
                }
            }
        }
    }
</script>
