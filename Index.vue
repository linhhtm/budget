<template>
    <div>
        <div class="background">
            <div class="budget_title text-center">
                <p>Available Budget in July</p>
                    <p class="budget"> {{income-expenses}}</p>
            </div>
            <div class="budget_card">
                <div class="income d-flex">
                    <p class="type">INCOME</p>
                    <div class="type_right">
                        <p class="budget">+ {{income}}</p>
                        <div class="percent">{{Math.round(income / Math.abs(income + expenses) * 100) > -1 ? Math.round(income / Math.abs(income + expenses) * 100) : 0 }} %</div>
                    </div>
                </div>
                <div class="expenses d-flex">
                    <p class="type">expenses</p>
                    <div class="type_right">
                        <p class="budget">- {{expenses}}</p>
                        <div class="percent">{{Math.round(expenses / Math.abs(income + expenses) * 100) > -1 ? Math.round(expenses / Math.abs(income + expenses) * 100) : 0 }} %</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="container-fluid">
            <div class="row select d-flex">
                <div class="form-group">
                    <select class="form-control" id="select_type">
                        <option>-</option>
                        <option>+</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="description" >
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" id="budget">
                </div>
                <span style="font-size: 34px; color:#42d9e6">
                    <i class="fas fa-check-square" @click="appendType()"></i>
                </span>
            </div>
            <div class="row table">
                <div class="col-md-6 income_table">
                    <p class="head">income</p>
                    <div v-for="line, index in income_array" class="line d-flex">
                        <p class="description">
                           {{line.description}}
                        </p>
                        <p class="budget" @mouseover="hover=true">
                           {{line.budget}}
                        </p>
                        <button class="remove" @click="remove(line,index)">
                            X
                        </button>
                    </div>
                </div>
                <div class="col-md-6 expenses_table">
                    <p class="head">Expenses</p>
                    <div v-for="line,index in expenses_array" class="line d-flex">
                         <p class="description">
                           {{line.description}}
                        </p>
                        <p class="budget" @mouseover="hover=true">
                           {{line.budget}}
                        </p>
                        <button class="remove" @click="remove(line,index)">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                total: 0,
                income: 0,
                expenses: 0,
                income_array: [],
                expenses_array: [],
                hover: false,
            }
        },
        // watch :{
        //     hover: function($event){
        //         console.log($event);
        //         console.log($event.target.closest('div'));
        //     }
        // },
        methods: {
            appendType: function(){
                var select = document.getElementById('select_type').value;
                var description = document.getElementById('description').value;
                var budget = document.getElementById('budget').value;
                var obj = {
                    type: select,
                    description : description,
                    budget: budget,
                }
                var html = `<div class="line d-flex">
                        <p class="description">
                            ${description}
                        </p>
                        <p class="budget">
                            ${budget}
                        </p>
                    </div>`;
                    
                switch (select) {
                    case '+': {
                        this.income_array.push(obj);
                        this.income = parseInt(this.income) + parseInt(budget);
                        //document.getElementsByClassName('income_table')[0].insertAdjacentHTML("beforeend",html);
                        break;
                    }
                    case '-':{
                        this.expenses_array.push(obj);
                        this.expenses = parseInt(this.expenses) + parseInt(budget);
                        //document.getElementsByClassName('expenses_table')[0].insertAdjacentHTML("beforeend",html);
                        break;
                    }
                    default: break;
                }
            },
            remove: function(line,index){
                if(line.type=='-'){
                    this.$delete(this.expenses_array, index);
                    this.expenses = parseInt(this.expenses) - parseInt(line.budget);
                }
                else{
                    this.$delete(this.income_array,index);
                    this.income = parseInt(this.income) - parseInt(line.budget);
                }
            }
        }
    }
</script>