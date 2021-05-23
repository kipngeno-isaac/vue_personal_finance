<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
    <v-fab-transition>
              <v-btn
                color="pink"
                dark
                absolute
                bottom
                right
                fab
          v-bind="attrs"
          v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Expense</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Name of Expense"
                  required
                  v-model="expense.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Amount spent"
                  required
                  v-model="expense.amount"
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addExpense()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from 'axios';
  export default {
    data: () => ({
      dialog: false,
      expense:{
      name: '',
      amount: '',
      },
    }),
    methods: {
      addExpense(){
        this.expense.user_id = 4;
        axios.post('http://localhost:3335/api/v1/expenses',this.expense)
        .then(response => response.data)
      .then(data => {
        if(data.status === 'success'){
        console.log('expense:', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      },
    },
  }
</script>