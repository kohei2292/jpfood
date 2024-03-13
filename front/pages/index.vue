

<template>
  <v-container>
    <h1 class="text-center">{{title}}</h1>
    <v-row class="pt-0">
      <v-col sm="4" align-self="center">
      </v-col>
      <v-col sm="4" align-self="center">        
      </v-col>
      <v-col sm="4" align-self="center">
        <v-sheet>
          <v-select
            :items="pulldownItemdata"
            item-text="label"
            item-value="value"
            label="Select"
            v-model="pulldownSelected"
            class="v-select-list"
            return-object>
          </v-select>
          <v-text-field 
              placeholder="Search" 
              filled
              rounded 
              dense 
              single-line 
              v-model="keyword"
              class="shrink input-color-black-class">
          </v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
    <v-list color="white" class="elevation-10 my-2 mx-auto" two-line>
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
          <v-list-item-title class="black--text text--darken-1 text-center text-subtitle2 text-pre-wrap">{{ item.tags }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-pagination
      class="mt-5"
      v-model="currentPage"
      :length="pageCount"
    ></v-pagination>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      searchItems: [],
      title: "",
      keyword: "",
      itemsPerPage: 10,
      currentPage: 1,
      min: 0,
      max: 10,
      listRandom: "",
      pulldownItemdata: [
        {label: 'English', value: 0},
        {label: '일본어', value: 1},
        {label: '한국어', value: 2},
        {label: 'Tag', value: 3}],
      pulldownSelected: {label: 'English', value: 0},
    }
  },
  computed: {
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      let items = [];
      let lowerKeyword = this.keyword.toLowerCase()

      for(var i in this.items) {

          var item = this.items[i];
          var lowerItem = item.call_name.toLowerCase()

          switch (this.pulldownSelected.value) {
            case 0:
              lowerItem = item.call_name.toLowerCase()
              break
            case 1:
              lowerItem = item.jp_name.toLowerCase()
              break
            case 2:
              lowerItem = item.food_name.toLowerCase()
              break
            case 3:
              lowerItem = item.tags.toLowerCase()
              break
            default:
              console.log('오류')
          }

          if(lowerItem.indexOf(lowerKeyword) !== -1) {

              items.push(item);

          }

      }
      this.searchItems = items
      return items.slice(startIndex, endIndex);
    },
    
    pageCount() {
      return Math.ceil(this.searchItems.length / this.itemsPerPage);
    }
  },
  async asyncData({ $axios }) {
    // ランキングデータをAPIなどから取得する場合
    const { data } = await $axios.get('/api/v1/list');
    
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
.input-color-black-class.v-text-field >>> input {
  background-color: black;
  border: 1px solid  royalblue;
  border-radius: 5px;
}
.input-color-black-class.v-text-field >>> input::placeholder {
  background-color: black;
  color: white !important;
  padding-left: 5px;
}
.v-sheet {
  height: 20%;
  background-color: white;
}
.v-select {
    width: 80%;
    border: 1px solid  royalblue;
    border-radius: 5px;
    margin-left: 23px;
    padding-left: 5px;
}
.v-select >>> .v-select__selections {
    padding-top: 10px;
}
.v-select-list {
  background-color: #000000;
}
</style>