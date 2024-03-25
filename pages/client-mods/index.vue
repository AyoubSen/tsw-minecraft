<template>
  <div class="">
    <div style="text-align: center" class="mb-3">
      <h1 style="font-size: 30px; font-weight: bold">Client Mods</h1>
    </div>
    <div class="flex-container">
      <template v-for="mod in mods" :key="mod.name">
        <div v-if="mod.type === 'client'" class="flex-item">
          <ModCard :mod="mod" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import modsData from "@/assets/mods.json";

export default {
  name: "ClientMods",
  data() {
    return {
      mods: modsData,
    };
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 10px;
  align-items: stretch;
}

.flex-item {
  display: flex;
  flex: 0 0 300px;
  height: auto;
}
</style>
