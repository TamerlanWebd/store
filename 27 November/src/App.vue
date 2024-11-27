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
          <a class="nav-link" href="#">Cart</a>
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
