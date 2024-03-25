<template>
  <div class="uhc-page">
    <el-table :data="tableData" :border="false" style="width: 100%">
      <el-table-column type="expand" style="background: red">
        <template #default="props">
          <div style="margin: 20px">
            <el-table :data="props.row.teams" :border="true">
              <el-table-column label="Teammates" prop="teammates" />
              <el-table-column label="Kills" prop="kills" />
              <el-table-column label="Killed By" prop="killedBy" />
            </el-table>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Type" prop="type" />
      <el-table-column label="Winner(s)" prop="winner" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "16-03-2024",
          type: "Duo",
          winner: "Ayoub & Yego",
          teams: [
            {
              teammates: "Ayoub & Yego",
              kills: 2,
              killedBy: "No one",
            },
            {
              teammates: "Pika & Melda",
              kills: 0,
              killedBy: "Ayoub & Yego",
            },
            {
              teammates: "Badr & Sisterphilia",
              kills: 0,
              killedBy: "Creeper / Skeleton",
            },
            {
              teammates: "Shadowlio & Ayman",
              kills: 0,
              killedBy: "Zombie / Creeper",
            },
          ],
        },
        {
          date: "17-03-2024",
          type: "Solo",
          winner: "Ayoub",
          teams: [
            {
              teammates: "Ayoub",
              kills: 1,
              killedBy: "No one",
            },
            {
              teammates: "Pika",
              kills: 2,
              killedBy: "Ayoub",
            },
            {
              teammates: "Yego",
              kills: 2,
              killedBy: "Pika",
            },
            {
              teammates: "Melda",
              kills: 0,
              killedBy: "Yego",
            },
            {
              teammates: "Badr",
              kills: 0,
              killedBy: "Pika",
            },
            {
              teammates: "Mackroute",
              kills: 0,
              killedBy: "Yego",
            },
          ],
        },
        {
          date: "19-03-2024",
          type: "Solo",
          winner: "Pika",
          teams: [
            {
              teammates: "Ayoub",
              kills: 0,
              killedBy: "Skeleton",
            },
            {
              teammates: "Pika",
              kills: 2,
              killedBy: "No one",
            },
            {
              teammates: "Yego",
              kills: 0,
              killedBy: "Pika",
            },
            {
              teammates: "Melda",
              kills: 0,
              killedBy: "Skeleton",
            },
            {
              teammates: "Badr",
              kills: 0,
              killedBy: "Pika",
            },
            {
              teammates: "Mackroute",
              kills: 0,
              killedBy: "Skeleton",
            },
            {
              teammates: "Sisterphilia",
              kills: 0,
              killedBy: "Fall damage",
            },
          ],
        },
        {
          date: "20-03-2024",
          type: "Solo",
          winner: "Pika",
          teams: [
            {
              teammates: "Ayoub",
              kills: 0,
              killedBy: "Yego",
            },
            {
              teammates: "Pika",
              kills: 1,
              killedBy: "No one",
            },
            {
              teammates: "Yego",
              kills: 1,
              killedBy: "Pika",
            },
            {
              teammates: "Melda",
              kills: 0,
              killedBy: "Creeper",
            },
            {
              teammates: "Badr",
              kills: 0,
              killedBy: "Zombie",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.uhc-page {
  width: 100%;
}
</style>
