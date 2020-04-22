<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded" style="min-width: 280px;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1" style="width: 1000px">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/jouer">Jouer</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
