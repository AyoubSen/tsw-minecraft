<template>
  <div
    :class="[
      'Sidebar',
      'bg-slate-700',
      'h-screen',
      minimize ? 'minimized' : '',
    ]"
  >
    <div class="flex items-center justify-between">
      <img
        :class="minimize ? '' : 'ml-4'"
        class="w-12 h-12 logo mt-4 cursor-pointer"
        src="/public/tswlogo1.png"
      />
      <div
        :class="[
          'toggleIcon',
          'cursor-pointer',
          minimize ? 'mt-4 ' : 'ml-4 mr-4',
          'mt-4',
        ]"
        @click="toggleSidebar"
      >
        <i
          :class="
            minimize ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'
          "
        ></i>
      </div>
    </div>
    <div class="navList p-3 mt-5">
      <div v-for="item in navList" :key="item.id" class="mb-4">
        <div
          v-if="item.name"
          class="navItem flex items-center gap-2 cursor-pointer p-3 rounded-xl text-slate-400 text-xl"
          :class="{ 'active-nav-item': $route.path === item.route }"
          @click="$router.push(item.route)"
        >
          <i :class="item.icon"></i>
          <span class="ml-2">
            <div>
              {{ item.name }}
            </div></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      minimize: false,
      navList: [
        {
          id: 0,
          name: "Home Page",
          route: "/",
          icon: "fa-solid fa-house",
        },
        {
          id: 1,
          name: "Client Mods",
          route: "/client-mods",
        },
        {
          id: 3,
          name: "Server Mods",
          route: "/server-mods",
          icon: "fa-solid fa-server",
        },
        {
          id: 4,
          name: "UHC",
          route: "/uhc",
          icon: "fa-solid fa-shield-halved",
        },
        {
          id: 5,
          name: "Suggestions",
          route: "/suggestions",
          icon: "fa-solid fa-lightbulb",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.minimize = !this.minimize;
    },
  },
};
</script>

<style>
.Sidebar {
  transition: width 0.3s ease;
  width: 200px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.Sidebar.minimized {
  width: 80px;
}

.Sidebar .flex {
  transition: margin-top 0.3s ease;
}

.navItem:hover {
  background-color: #2d3748;
  transition: background-color 0.2s ease;
}

.navList,
.toggleIcon {
  transition: opacity 0.3s, transform 0.3s ease;
}

.Sidebar.minimized .navList {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-20px);
}

.toggleIcon {
  transition: transform 0.3s ease;
}

.Sidebar.minimized .toggleIcon {
  transform: translateY(20px);
}

.Sidebar.minimized .flex {
  flex-direction: column;
  align-items: center;
}
.active-nav-item {
  background-color: #4a5568;
}
.navItem:active {
  background-color: #4a5568;
}
</style>
