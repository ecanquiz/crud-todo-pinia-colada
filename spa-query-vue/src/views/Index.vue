<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import * as Services from '../services/'
import type {Ref} from 'vue'
import type { Task } from '@/types'

const { isPending, isError, data, error } = useQuery({ queryKey: ['todos'], queryFn: Services.getTasks })

    /*const tasks: Ref<Task[]> = ref([])
    const pending = ref(false)
    const getTasks = () => {
      pending.value = true
      Services.getTasks()
        .then(response => tasks.value = response )
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        )
        .finally(() => pending.value = false)
    }
    const removeTask = (id: string) => {
      if (confirm("Do you want to delete this task?")) {
        pending.value = true
        Services.removeTask(id)
          .then(response => {
            console.log({ statusCode: response.status })
            if (response.status===204)
              getTasks();
            })
          .catch(
            error => console.log({
              errorCode: error.code, errorMessage: error.message
            })
          )
          .finally(() => pending.value = false)
      }
    }

    onMounted(() => getTasks())*/
</script>

<template>
  <div class="container mx-auto">

    esta pendiente: {{ isPending}} <hr/>
    es error {{isError}} <hr/>
    data: {{data}} <hr/>
    error: {{error }}
    <!--h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">ToDo List</h1>
      
    <router-link
      :to="{name: 'create'}"
      class="btn btn-primary"
      >Create
    </router-link>
    <table class="min-w-full text-left text-sm font-light">
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
          v-for="task in tasks"
          :key="task.id"
          class="border-b dark:border-neutral-500"
        >
          <td class="p-2">{{ task.id }}</td>
          <td class="p-2">{{ task.title }}</td>
          <td class="p-2">{{ task.description }}</td>
          <td class="p-2">{{ task.done }}</td>
          <td class="p-2">{{ task.created_at }}</td>
          <td class="p-2">{{ task.updated_at }}</td>          
          <td>
            <button
              class="btn btn-success m-1 text-sm"
              @click="$router.push({name: 'edit', params: {id: task.id}})"
            >
              Edit
            </button>
            <button
              class="btn btn-danger m-1 text-sm"
              @click="removeTask(task.id as unknown as string)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="tasks.length === 0">Empty list.</h4-->
  </div>
</template>











