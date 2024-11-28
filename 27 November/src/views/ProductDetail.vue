<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useProductStore } from '@/stores/product';
  
  const route = useRoute();
  const productStore = useProductStore();
  const product = ref(null);
  
  product.value = productStore.products.find(p => p.id === parseInt(route.params.id));
  </script>

  <template>
        <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.img" class="img-fluid" alt="...">
        </div>
        <div class="col-md-6">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: {{ product.price }}$</p>
            <p>Date of addition: {{ product.publish_at }}</p>
   
            <button type="button" class="btn btn-outline-success me-2">Success</button>
            <router-link to="/" class="btn btn-outline-primary">Back to Home</router-link>

        </div>
      </div>
    </div>
    </template>
<style>
.container {
  font-family: Georgia, 'Times New Roman', Times, serif;
    color: black;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>