<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Madrid</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Alejandro Castillo</div>
              <div class="text-caption text-grey">
                Administrador
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
           Administrador de todas las tiendas
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="user.first_name"
                label="Nombre"
              />

              <q-input
                filled
                v-model="user.last_name"
                label="Apellidos"

              />

              <q-input
                filled
                v-model="user.age"
                label="Edad"

              />

              <q-input
                filled
                v-model="user.email"
                label="Correo electrónico"

              />

              <q-input
                filled
                v-model="user.phone"
                label="Teléfono"

              />

              <div>
                <q-btn label="Actualizar" type="submit" color="positive" text-color="white"/>
              </div>
            </q-form>
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
                user: {
                    first_name: 'Alejandro',
                    last_name: 'Castillo',
                    age: '?',
                    email: 'aca******@*****.com',
                    phone: '68******03'
                },
            }
        },
    }
</script>

<style scoped>

</style>
