<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="200"
  >
        <v-list
      subheader
      two-line
    >
      <v-subheader inset>Expenses</v-subheader>

      <v-list-item
        v-for="expense in expenses"
        :key="expense.id"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="expense.name"></v-list-item-title>

          <v-list-item-subtitle v-text="new Date(expense.updated_at).toLocaleDateString('en-KE')"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          {{ expense.amount.toLocaleString('en-US',{ style: 'currency', currency: 'USD' })}}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import axios from 'axios';
  export default {
    data: () => ({
      expenses: [],
    }),
    mounted(){
      const payload = {page: 1};
      axios.get('http://localhost:3335/api/v1/expenses', payload)
      .then(response => response.data)
      .then(data => {
        if(data.status === 'success'){
          this.expenses = data.expenses.data;
        console.log('expenses:', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
  }
</script>