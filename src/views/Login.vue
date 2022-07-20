<template>
  <div class="login">
    <v-container fluid >
      <v-row>
        <v-col cols="6" >
          <v-img
            max-height="100%"
            max-width="100%"
        
            src="../assets/Group 3897.png"
          ></v-img>
        </v-col>
        
        <v-col align=center cols="6" class="blue lighten-3  ">
           
             <div class="pt-16">
                <v-img max-height="90%" max-width="20%"  src="../assets/Group.png" ></v-img>
             </div>
           
          <v-col class="mt-10" cols="12" sm="7" md="20" >
            <v-text-field label="Username" prepend-inner-icon="mdi-account" background-color="white" outlined  ></v-text-field
          ></v-col>
          <v-col cols="12" sm="7" md="20">
            <v-text-field label="Password" prepend-inner-icon="mdi-lock-outline"  background-color="white" outlined></v-text-field>
          </v-col>
          
          <v-col  >
          <v-btn  class="text-center px-16" elevation="3"  >Login</v-btn>
          </v-col>
         <p class="text-right mt-5">Forgot Password ?</p>
         
        </v-col>
       
     
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
