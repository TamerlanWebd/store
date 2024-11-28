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
<style scoped>
.container {
  max-width: 1200px;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

.text-muted {
  color: #6c757d;
}

.card {
  border: none;
}

img {
  max-width: 100%;
}

button.btn {
  border-radius: 50px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

button.btn:hover {
  opacity: 0.9;
}

.product-description {
  line-height: 1.5;
}
</style>