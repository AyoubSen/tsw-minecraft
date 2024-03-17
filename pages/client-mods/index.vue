<template>
  <div class="p-10 h-screen overflow-auto">
    <div>Client Mods</div>
    <div class="flex-container mt-10">
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
  name: "ServerMods",
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
