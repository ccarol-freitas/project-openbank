<template>
  <div id="moedas">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Cotação de Moedas</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-striped text-center">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Nome da Moeda</th>
                      <th scope="col">Valor para Compra</th>
                      <th scope="col">Valor para Venda</th>
                      <th scope="col">Variação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="name"
                      v-for="result in results"
                      :key="result.name"
                    >
                      <td class="name">{{ result.name }}</td>
                      <td class="buy">{{ result.buy }}</td>
                      <td v-if="result.sell != null" class="sell">
                        {{ result.sell }}
                      </td>
                      <td v-else class="sell">Não Disponível</td>
                      <td v-if="result.variation > 0" class="variation-green">
                        {{ result.variation }}
                      </td>

                      <td
                        v-else-if="result.variation < 0"
                        class="variation-red"
                      >
                        {{ result.variation }}
                      </td>

                      <td v-else class="variation">
                        {{ result.variation }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  name: "moedas",
  data() {
    return {
      results: null,
    };
  },
  computed: {},

  methods: {
    getResults() {
      axios
        .get(
          "https://api.hgbrasil.com/finance/?format=json-cors&fields=only_results,currencies&key=cc61020d"
        )
        .then((response) => {
          console.log(response);
          this.results = response.data.currencies;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.getResults();
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },
  watch: {
    username(newUsername) {
      localStorage.username = newUsername;
    },
    password(newPassword) {
      localStorage.password = newPassword;
    },
  },
};
</script>


<style>
.variation-red {
  color: red;
  font-weight: 500;
  font-size: 24px;
}

.variation-green {
  color: green;
  font-weight: 500;
  font-size: 24px;
}
</style>

