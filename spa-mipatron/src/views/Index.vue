<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import * as Services from '@/services/'
import type { Ref } from 'vue'
import type { Task } from '@/types'

const tasks = reactive({
  data:[],
  errors: {},
  pending: false
})

onMounted(async () => {
  tasks.pending = true
  const { data, errors, pending }  = await Services.getTasks()
  tasks.data = data.value
  tasks.errors = errors.value
  tasks.pending = pending.value
})
</script>

<template>
<div>
  pendiente {{ tasks.pending }} <hr/>
  tareas {{ tasks.data }} <hr/>
  error {{tasks.errors}}

</div>
  <!--div class="container mx-auto">
    <h1 class="text-2xl" align="center">ToDo List</h1>    
    <router-link
      :to="{name: 'create'}"
      class="btn btn-primary"
      >Create
    </router-link>



    <div v-if="asyncStatus === 'loading'">Loading...</div>
    <div v-if="tasks.error">
      <div>{{ tasks.error }}</div> 
    </div>

    

    <table v-else-if="tasks.data" class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th class="p-2">ID</th>
          <th class="p-2">Title</th>
          <th class="p-2">Description</th>
          <th class="p-2">Done</th>
          <th class="p-2">Created At</th>
          <th class="p-2">Updated At</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="task in tasks.data"
          :key="task.id"
          class="border-b dark:border-neutral-500"
        >
          <td class="p-2">{{ task.id }}</td>
          <td class="p-2">{{ task.title }}</td>
          <td class="p-2">{{ task.description }}</td>
          <td class="p-2">{{ task.done }}</td>
          <td class="p-2">{{ task.created_at }}</td>
          <td class="p-2">{{ task.updated_at }}</td>          
          <td class="p-2">
            <button
              class="btn btn-success m-1 text-sm"
              @click="$router.push({name: 'edit', params: {id: task.id}})"
            >
              Edit
            </button>
            <button
              class="btn btn-danger m-1 text-sm"
              @click="removeTask(task.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="tasks.length === 0">Empty list.</h4>
  </div-->
</template>











