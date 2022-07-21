<template>
  <div class="about">
    <h2>Trending Items</h2>
    <v-row  >
      <v-col  cols="6" v-for="product in products" :key="product.id">
    
        <v-card elevation="5" outlined  min-height="100%" >
    
    
          <v-img  class="img" :src="product.image"></v-img>
          <div class="text-center">
          <h3 class="pt-5">{{product.name}}</h3>
          <v-card-text>{{product.description}}</v-card-text>
          <v-card-text>{{product.size}}</v-card-text>
          <v-chip color="green" >{{product.stock}}</v-chip>
          <v-card-text>{{product.price}} </v-card-text>
         
           <v-action><v-icon>mdi-cart</v-icon></v-action> 
          
          </div>
        </v-card>
         
      </v-col>

    </v-row>
  </div>
</template>
<style scoped>
.img{
  float: left;
  height:250px;
  max-width: 220px;
}
.btn{
  outline: none;
  background-color: red;
}
</style>
<script>
export default {
  data() {
    return {
      products: [
        {
          id:1,
          name: "Nike",
          description: "Men Road Running shoes ",
          stock: "only 5",
          size: "4-sizes avalable",
          reduction:"25% off",
          price: " 200 $",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/303abd11-0610-4881-8616-a8103a700aed/chaussures-air-max-terrascape-90-pour-CRn0XW.png",
          
        },
        {
          id:2,
          name: "Apple Macbook Air",
          image:"https://help.apple.com/assets/6062258EBFC7E7487E19DBB0/60622591BFC7E7487E19DBBA/fr_FR/540d7697864354f0c0bed1741209d7f1.png",
          description: "Apple M1 CHp 51 GB Running shoes ",
          stock: "available",
          
          price: " 11900 $",
        },
        {
          id:3,
          name: "Apple Watch Series 7",
          image:"https://itsu.ma/wp-content/uploads/2022/03/apple-watch-series-7-gps-minuit-ITsu-maroc.jpg",
          description: "Men Road Running shoes ",
          stock: "available",
          
          price: " 200 $",
        },
        {
          id:4,
          name: "Nike Air Force",
          image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9861ab2-bc80-4328-ba7e-1d0a6e8d49b2/chaussure-air-force-1-07-ess-pour-xxQdZf.png",
          description: "Men Road Running shoes ",
          stock: "available",
          reduction:"25% off", 
          size: "5-sizes avalable",
          price: " 200 $",
        },
      ],
    };
  },
};
</script>
