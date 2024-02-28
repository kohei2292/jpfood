

<template>
  <v-container>
    <h1 class="text-center">{{title}}</h1>
    <v-list color="white" class="elevation-10 my-3 mx-auto" two-line>
      <v-list-item v-for="item in displayedItems" :key="item.title">
        <v-list-item-avatar width=60% height=30%>
          <v-img :src="require(`~/assets/images/${item.path_name}`)" :alt="item.title" :aspect-ratop="16/9"
                class="ma-0 pa-0"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="black--text text--darken-1 text-center text-subtitle2 text-pre-wrap">{{ item.call_name }}</v-list-item-title>
          <v-list-item-title class="black--text text--darken-1 text-center text-subtitle2 text-pre-wrap">{{ item.jp_name }}</v-list-item-title>
          <v-list-item-title class="black--text text--darken-1 text-center text-h9 text-md-h4 font-weight-bold text-pre-wrap">{{ item.food_name }}</v-list-item-title>
          <v-list-item-title class="black--text text--darken-1 text-center text-h8 text-md-h7 text-lg-h6 text-pre-wrap">{{ item.rate }}pt / 100pt</v-list-item-title>
          <div class="text-center text-h8 text-md-h7 text-lg-h6">
            <a :href="item.link_path3" target="_blank" rel="noopener noreferrer">Wiki</a><br>
            <a :href="item.link_path1" target="_blank" rel="noopener noreferrer">Google</a>
            <a :href="item.link_path2" target="_blank" rel="noopener noreferrer">Youtube</a>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      title: "",
      itemsPerPage: 5,
      currentPage: 1,
    }
  },
  computed: {
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
  },
  async asyncData({ $axios }) {
    // ランキングデータをAPIなどから取得する場合
    const { data } = await $axios.get('/api/v1/list_today');
    
    return { items: data.data, title: data.title };
  },
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  color: #333;
}
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>