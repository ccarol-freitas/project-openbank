<template>
    <div id="home">Teste</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  mounted() {
    axios.get("https://api.hgbrasil.com/finance?array_limit=1&fields=only_results,bitcoin&key=7197fb6b")
    .then(response => console.log(response))
  }
};
// import axios from 'axios';
// export default {
//    data(){
//        return{
//            Finance:null
//        }
//    },
//    mounted(){
//        this.getFinance();
//    },
//    methods:{
//        getFinance(){
//            axios
//             .get('https://api.hgbrasil.com/finance')
//                 .then(response => {
//                     this.finance = response.data
//                 })
//                 .catch(e => console.log(e))
//        }
//    }
// }

</script>