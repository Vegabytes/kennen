<template>
  <q-layout view="lHh LpR lFf">
    <q-header
      reveal
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    >
      <q-toolbar>
        <q-btn
          @click="left = !left"
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
        />
<!--                 <q-avatar>
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar> -->

        <q-toolbar-title>Kennen</q-toolbar-title>
        <q-btn
          class="q-mr-xs"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
<!--         <a
          style="font-size: 25px;"
          class="float-right q-mr-sm"
          href="https://github.com/Vegabytes"
          target="_blank"
          title="Donate"
          ><i class="fas fa-heart" style="color: #eb5daa"></i
        ></a> -->
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="notifications" class="q-mr-xs" />
        <q-btn
          flat
          round
          dense
          icon="fas fa-sign-out-alt"
          @click="logoutNotify"
          to="/"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      class="left-navigation"
      show-if-above
      v-model="left"
      style="background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;"
      side="left"
      elevated
    >
      <div
        class="full-height"
        :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'"
      >
        <div style="height: calc(100% - 117px);padding:10px;">
          <q-toolbar>
            <q-avatar>
              <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />

            </q-avatar>

            <q-toolbar-title>Alex</q-toolbar-title>
          </q-toolbar>
          <hr />
          <q-scroll-area style="height:100%;">
            <q-list padding>
              <q-item
                active-class="tab-active"
                to="/dashboard"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>

                <q-item-section>
                Dashboard
                </q-item-section>
              </q-item>

<!--              <q-item
                active-class="tab-active"
                to="/dashboard"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>

                <q-item-section>
                  Detalle tienda
                </q-item-section>
              </q-item> -->
<!--
              <q-item
                active-class="tab-active"
                to="/dashboard_v2"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>

                <q-item-section>
                  Dashboard v2
                </q-item-section>
              </q-item>

           <q-item
                active-class="tab-active"
                to="/dashboard_v3"
                exact
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>

                <q-item-section>
                  Dashboard v3
                </q-item-section>
              </q-item>
 -->


<!--               <q-item
                active-class="tab-active"
                to="/change_request"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>
                  Change Request
                </q-item-section>
              </q-item> -->

              <q-item
                active-class="tab-active"
                to="/pedidos"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="euro" />
                </q-item-section>

                <q-item-section>
                  Pedidos
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/contabilidad"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="business" />
                </q-item-section>

                <q-item-section>
                  Contabilidad
                </q-item-section>
              </q-item>


              <hr>

   <!--          <q-item
                active-class="tab-active"
                to="/quotes"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="money" />
                </q-item-section>

                <q-item-section>
                  Quotes
                </q-item-section>
              </q-item> -->

<!--                <q-item
                active-class="tab-active"
                to="/transactions"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="assignment" />
                </q-item-section>

                <q-item-section>
                  Transactions
                </q-item-section>
              </q-item> -->

            <q-item
                active-class="tab-active"
                to="/usuarios"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="group" />
                </q-item-section>

                <q-item-section>
                  Usuarios
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/calendario"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="calendar_today" />
                </q-item-section>

                <q-item-section>
                  Calendario
                </q-item-section>
              </q-item>


              <q-item
                active-class="tab-active"
                to="/clientes"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="payments" />
                </q-item-section>

                <q-item-section>
                  Clientes
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/perfil"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>

                <q-item-section>
                  Mi Perfil
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
<!--       <q-banner inline-actions rounded style="background-color:#5dcf8a" class="z-max shadow-10 q-ma-md absolute absolute-bottom text-white">
      Looking for beautiful premium Quasar CRM admin template for Vue 3? Please drop me an email. Buy only at <b>$49</b>!
      <template v-slot:action>
        <q-btn target="_blank" type="a" href="https://next-quasar-admin-crm.netlify.com/" flat style="background-color:purple" class="text-capitalize q-mr-md" label="Live Demo"></q-btn>
        <q-btn type="a" href="mailto:mayank091193@gmail.com" flat style="background-color:#172b4d" class="text-capitalize" label="Email me"></q-btn>
      </template>
    </q-banner>-->
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      options: [
        'Purpleshop', 'Tienda2', 'Tienda3', 'Tienda4', 'Tienda5'
      ]
    };
  },
  methods: {
    logoutNotify() {
      this.$q.notify({
        message: "Logged out"
      });
    }
  }
};
</script>

<style>
.q-drawer {
  /*background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;*/
  background-image: url("/statics/images/lake.jpg") !important;
  background-size: cover !important;
}

.drawer_normal {
  background-color: rgba(1, 1, 1, 0.75);
  background-color: #FFFFFF;
}

.drawer_dark {
  background-color: #010101f2;
  background-color: #1D1D1D;
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  /*background-color: green;*/
  background-color:#E9C027;
}

body {
  background: #F6F6F6 !important;
}

.header_normal {
/*   background: linear-gradient(
    145deg,
    rgb(32, 106, 80) 15%,
    rgb(21, 57, 102) 70%
  ); */
  background-color:  #000;
/*   color: #000; */
}


.header_dark {
/*   background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%); */
  background: #1D1D1D;
}

.q-item__section--avatar {
    color: inherit;
    min-width: 0;
}

header .q-toolbar__title {
    color:#EBC61F;
}
</style>
