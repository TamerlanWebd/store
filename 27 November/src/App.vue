<script setup>
import {RouterLink, RouterView } from 'vue-router'

</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Shop</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about"class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <RouterView />
</template>
<style scoped>
.navbar {
  padding: 1rem 2rem;
  background-color: #f8f9fa;
}

.navbar-light .navbar-nav .nav-link {
  color: #333;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #007bff;
}

.navbar-nav .nav-item.active .nav-link {
  color: #28a745; /* Green for active link */
}

.navbar-toggler-icon {
  background-color: #007bff;
}

.navbar-brand {
  color: #007bff !important;
}

.navbar-nav .nav-item {
  margin-left: 1rem;
}

.navbar-nav .nav-link {
  font-weight: 500;
}

.active-link {
  color: #007bff !important;
}

@media (max-width: 991px) {
  .navbar {
    padding: 1rem;
  }
}
</style>
