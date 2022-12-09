<template>
  <q-page>
    <div class="row q-col-gutter-lg q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Purpleshop
            </div>
            <div class="text-subtitle3 text-uppercase text-grey-5">Febrero 2023</div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <q-table title="Últimos pedidos" :data="data" :hide-header="mode === 'grid'" :columns="columns"
              row-key="name" :grid="mode === 'grid'" :filter="filter" :pagination.sync="pagination"
              :class="$q.dark.isActive ? 'text-white' : 'text-grey-8'">
              <template v-slot:top-right="props">
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">FlowZapas
            </div>
            <div class="text-subtitle3 text-uppercase text-grey-5">Febrero 2023</div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <!--               <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:220px"/> -->
            <q-table title="Últimos pedidos" :data="data" :hide-header="mode === 'grid'" :columns="columns"
              row-key="name" :grid="mode === 'grid'" :filter="filter" :pagination.sync="pagination"
              :class="$q.dark.isActive ? 'text-white' : 'text-grey-8'">
              <template v-slot:top-right="props">
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">MundoAllStar
            </div>
            <div class="text-subtitle3 text-uppercase text-grey-5">Febrero 2023</div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <!--              <IEcharts :option="gaugeOptions" ref="gauge" :resizable="true" style="height:220px"/> -->
            <q-table title="Últimos pedidos" :data="data" :hide-header="mode === 'grid'" :columns="columns"
              row-key="name" :grid="mode === 'grid'" :filter="filter" :pagination.sync="pagination"
              :class="$q.dark.isActive ? 'text-white' : 'text-grey-8'">
              <template v-slot:top-right="props">
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-col-gutter-lg q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-h6">ZapasFlash
            </div>
            <div class="text-subtitle3 text-uppercase text-grey-5">Febrero 2023</div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <!--             <IEcharts ref="pie" :option="pieOptions" :resizable="true" style="height:270px"/> -->
            <q-table title="Últimos pedidos" :data="data" :hide-header="mode === 'grid'" :columns="columns"
              row-key="name" :grid="mode === 'grid'" :filter="filter" :pagination.sync="pagination"
              :class="$q.dark.isActive ? 'text-white' : 'text-grey-8'">
              <template v-slot:top-right="props">
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-h6">Sneakersshops
            </div>
            <div class="text-subtitle3 text-uppercase text-grey-5">Febrero 2023</div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <!-- <IEcharts ref="stack_bar" :option="stackedBarOptions" :resizable="true" style="height:270px"/> -->
            <q-table title="Últimos pedidos" :data="data" :hide-header="mode === 'grid'" :columns="columns"
              row-key="name" :grid="mode === 'grid'" :filter="filter" :pagination.sync="pagination"
              :class="$q.dark.isActive ? 'text-white' : 'text-grey-8'">
              <template v-slot:top-right="props">
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card flat bordered style="min-height: 100%;">
          <q-card-section>
            <div class="text-h6">Nueva Tienda
            </div>

          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <!-- <IEcharts ref="stack_bar" :option="stackedBarOptions" :resizable="true" style="height:270px"/> -->
<template>
  <q-btn flat dense icon="fas fa-plus" class="float-right add-button"  @click="new_shop=true"
                        style="font-size: 12rem;display: contents;color:#E7E7E7">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
</template>


          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-col-gutter-lg q-ma-xs">
      <div class="col-12">
        <q-card flat bordered class="bg-white">
          <q-table title="Todos ls pedidos" :data="dataAll" :hide-header="mode === 'grid'" :columns="columnsAll"
            row-key="name" :grid="mode === 'grid'" :filter="filter" :pagination.sync="pagination"
            :class="$q.dark.isActive ? 'text-white' : 'text-grey-8'">
            <template v-slot:top-right="props">
              <q-input outlined dense debounce="300" v-model="filter" placeholder="Buscar">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen" v-if="mode === 'list'">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ props.inFullscreen ? 'Exit Fullscreen' :
                    'Toggle Fullscreen'
                }}
                </q-tooltip>
              </q-btn>

              <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'"
                @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
                v-if="!props.inFullscreen">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === 'grid' ? 'List' : 'Grid' }}
                </q-tooltip>
              </q-btn>
              <q-btn flat dense icon="fas fa-download" class="float-right" @click="exportTable"
                :color="!$q.dark.isActive ? 'grey-8' : 'white'">
                <q-tooltip>Download</q-tooltip>
              </q-btn>
            </template>
          </q-table>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="new_shop">
      <q-card style="width: 600px; max-width: 60vw;">
        <q-card-section>
          <div class="text-h6">
            Añadir nueva tienda
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Nombre de la tienda</q-item-label>
                  <q-input dense outlined v-model="shop.name" label="Nombre de la tienda"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Ciudad</q-item-label>
                  <q-input dense outlined v-model="shop.city" label="City"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Provincia</q-item-label>
                  <q-input dense outlined v-model="shop.state" label="State"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Api</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="shop.last_call"
                    label="Api"
                  >
   <!--                  <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="lastCallProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="shop.last_call"
                            @input="() => $refs.lastCallProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template> -->
                  </q-input>
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
import Vue from 'vue';
import IEcharts from 'vue-echarts-v3/src/full.js';
import { exportFile } from 'quasar';

Vue.component('IEcharts', IEcharts);

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')

  return `"${formatted}"`
}

export default {
  data() {
    return {
      new_shop: false,
      filter: '',
      mode: 'list',
      shop: {},

      gaugeOptions: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            type: 'gauge',
            name: "Sale",
            detail: { formatter: '{value}%' },
            data: [{ value: 30 }],
            min: 0,
            radius: '100%',
            axisLine: {
              show: true,
              lineStyle: {
                color: [[0.35, '#293c55'], [0.65, '#61a0a8'], [1, '#c23731']],
                width: 20
              },
            },

          }
        ]
      },
      columns: [
        { name: 'activity_id', align: 'left', label: 'Id Pedido', field: 'activity_id', sortable: true },
        { name: 'cost', align: 'left', label: 'Total', field: 'cost', sortable: true },
        { name: 'regarding', align: 'left', label: 'Estado', field: 'regarding', sortable: true },
        /*                     {name: 'owner', align: 'left', label: 'Owner', field: 'owner', sortable: true}, */
        {
          name: 'creation_date',
          align: 'left',
          label: 'Fecha',
          field: 'creation_date',
          sortable: true
        },
      ],
      data: [
        {
          activity_id: "C001",
          name: 'Nike Air Force One Blancas',
          regarding: 'Pago aceptado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'FlowZapas',
          cost: '67,05€'
        },
        {
          activity_id: "C002",
          name: 'Dr. Martens Altas Plataforma Negras',
          regarding: 'Cancelado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'Sneakersshops',
          cost: '87,05€'
        },
        {
          activity_id: "C003",
          name: 'Converse All Star Plataforma Altas Blancas',
          regarding: 'Entregado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'MundoAllStar',
          cost: '65,16€'
        },
        {
          activity_id: "C004",
          name: 'Nike Air Force One Negras',
          regarding: 'Error en el cobro',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'Sneakersshops',
          cost: '64,05€'
        },
        {
          activity_id: "C005",
          name: 'Converse All Star Altas De Plataforma Negras',
          regarding: 'Pendiente de cobro',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'ZapasFlash',
          cost: '64,05€'
        },
        {
          activity_id: "C006",
          name: 'Nike Air Force One Blancas Altas',
          regarding: 'Enviado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'Sneakersshops',
          cost: '100€'
        },
        {
          activity_id: "C007",
          name: 'Converse Run Star Hike High Top Negras',
          regarding: 'Preparación',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'ZapasFlash',
          cost: '105€'
        },
      ],
      columnsAll: [
        { name: 'activity_id', align: 'left', label: 'Id Pedido', field: 'activity_id', sortable: true },
        { name: 'desc', align: 'left', label: 'Descripción', field: 'desc', sortable: true },
        { name: 'regarding', align: 'left', label: 'Estado', field: 'regarding', sortable: true },
        /*                     {name: 'owner', align: 'left', label: 'Owner', field: 'owner', sortable: true}, */
        {
          name: 'creation_date',
          align: 'left',
          label: 'Fecha',
          field: 'creation_date',
          sortable: true
        },
        {
          name: 'shop',
          align: 'left',
          label: 'Tienda',
          field: 'shop',
          sortable: true
        }
      ],
      dataAll: [
        {
          activity_id: "C001",
          desc: 'Nike Air Force One Blancas',
          regarding: 'Pago aceptado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'FlowZapas',
          cost: '67,05€'
        },
        {
          activity_id: "C002",
          desc: 'Dr. Martens Altas Plataforma Negras',
          regarding: 'Cancelado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'Sneakersshops',
          cost: '87,05€'
        },
        {
          activity_id: "C003",
          desc: 'Converse All Star Plataforma Altas Blancas',
          regarding: 'Entregado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'MundoAllStar',
          cost: '65,16€'
        },
        {
          activity_id: "C004",
          desc: 'Nike Air Force One Negras',
          regarding: 'Error en el cobro',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'Sneakersshops',
          cost: '64,05€'
        },
        {
          activity_id: "C005",
          desc: 'Converse All Star Altas De Plataforma Negras',
          regarding: 'Pendiente de cobro',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'ZapasFlash',
          cost: '64,05€'
        },
        {
          activity_id: "C006",
          desc: 'Nike Air Force One Blancas Altas',
          regarding: 'Enviado',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'Sneakersshops',
          cost: '100€'
        },
        {
          activity_id: "C007",
          desc: 'Converse Run Star Hike High Top Negras',
          regarding: 'Preparación',
          owner: 'John',
          creation_date: '08-12-2022',
          shop: 'ZapasFlash',
          cost: '105€'
        },
      ],
      pagination: {
        rowsPerPage: 10
      }
    }
  },
  computed: {
    barOptions() {
      return {
        grid: {
          bottom: '20%',
          left: '15%',
          top: '3%'
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        tooltip: {},
        dataset: {
          dimensions: ['time_period', 'sale', 'goal'],
          source: [
            { time_period: 'Jan 2019', sale: 50, goal: 70 },
            { time_period: 'Feb 2019', sale: 80, goal: 75 },
            { time_period: 'Mar 2019', sale: 86, goal: 80 },
            { time_period: 'Apr 2019', sale: 72, goal: 85 }
          ]
        },
        xAxis: {
          type: 'category',
          // axisLabel: {
          //     rotate: 45
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        yAxis: {
          // name: 'Goal',
          // nameLocation: 'center',
          // nameGap: 30,
          // nameTextStyle:{
          //     fontWeight: 'bold'
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        series: [
          { type: 'bar', name: 'Sales' },
          { type: 'bar', name: 'Goals' }
        ]
      }
    },
    lineChartOption() {
      return {
        grid: {
          bottom: '20%',
          left: '15%',
          top: '3%'
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        tooltip: {
          // formatter:
          //     function (param) {
          //     console.log(param)
          //     // return param.seriesName + '<br />' + param.name + ': ';
          // }
        },
        dataset: {
          dimensions: ['product_name', 'share', 'growth'],
          source: [
            { product_name: 'Product A', share: 20, growth: 25 },
            { product_name: 'Product B', share: 22, growth: 18 },
            { product_name: 'Product C', share: 40, growth: 45 }
          ]
        },
        xAxis: {
          type: 'category',
          // axisLabel: {
          //     rotate: 45
          // }
          axisLabel: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        yAxis: {
          axisLabel: {
            formatter: function (value, index) {
              return value + ' %'
            },
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        series: [
          { type: 'line', name: 'Share' },
          { type: 'line', name: 'Growth' }
        ]
      }
    },
    pieOptions() {
      return {
        tooltip: {
          show: true
        },
        legend: {
          orient: 'horizontal',
          bottom: 0,
          width: 300,
          textStyle: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        series: [
          {
            name: 'Competitor',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'inner',
                formatter: function (param, index) {
                  return param.value + ' %'
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            selectedMode: 'single',
            data: [
              { value: 40, name: 'Product 1', selected: true },
              { value: 20, name: 'Competitor 1', selected: false },
              { value: 15, name: 'Competitor 2', selected: false },
              { value: 25, name: 'Competitor 3', selected: false },
            ]
          }
        ]
      }
    },
    stackedBarOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer:
          {
            type: 'shadow'
          },
          backgroundColor: 'rgba(50,50,50,0.9)',

        },
        legend: {
          bottom: 0,
          textStyle: {
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        color: ['#3395dd', '#ed892d', '#34393b'],
        // legend: {
        //     y: "bottom",
        //     data: [{name: 'Territory Sales', icon: 'circle'}, {
        //         name: 'Remaining Nation Sales',
        //         icon: 'circle'
        //     }]
        // },
        grid:
        {
          bottom: '10%',
          left: '15%',
          top: '9%'
        },
        calculable: true,
        xAxis:
        {
          type: 'value',
          position:
            'top',
          axisLine:
          {
            show: false
          },
          axisLabel: {
            formatter: function (value, index) {
              return '$' + value;
            },
            color: this.$q.dark.isActive ? 'white' : '#676767'
          }
        },
        yAxis: [
          {
            type: 'category',
            data: ['Alex Morrow', 'Joanna Carter', 'Jimmy Joanna', 'Mack Hales'],
            axisLabel: {
              fontSize: 12,
              color: this.$q.dark.isActive ? 'white' : '#676767'
            }
          }
        ],
        series:
          [{
            name: 'Qualification',
            type: 'bar',
            stack: 'A',
            data: [300, 350, 400, 500]

          }, {
            name: 'Discovery',
            type: 'bar',
            stack: 'A',
            data: [100, 180, 250, 300]

          }, {
            name: 'Quote',
            type: 'bar',
            stack: 'A',
            data: [100, 120, 200, 220]

          }]
      }
    }
  },
  methods: {
    SaveImage(type) {
      const linkSource = this.$refs[type].getDataURL();
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = '_self';
      downloadLink.download = type + '.png';
      downloadLink.click();
    },
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
        this.data.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'activity.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>

.blue_dark {
  background-color: #082f56;
}

.green_dark {
  background-color: #084a0b;
}

.orange_dark {
  background-color: #64350e;
}
</style>
