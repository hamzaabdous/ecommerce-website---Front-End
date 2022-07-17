<template>
  <v-app id="inspire">
    <v-app-bar max-height="90" color="white" >
      <v-container  class="py-0 ">
        <v-spacer></v-spacer>

        <v-responsive class="pt-10 " max-width="500">
          
          <v-text-field
          height="30"
            rounded
            outlined
            elevation="20px"
            color="grey"
            background-color="white"
            placeholder="hello"
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

      <v-container>
        <v-row>
          <v-col class="mt-16" cols="2">
            <v-sheet class="grey lighten-3 mt-16 mr-8"  rounded="lg">
              <v-list color="transparent">
                <v-avatar
                  class="mr-10"
                  color="grey darken-1"
                  size="32"
                ></v-avatar>

                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col  >
            <v-sheet  class="pa-6 grey lighten-3" min-height="85vh" width="66vw" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
