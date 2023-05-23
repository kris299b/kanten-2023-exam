<template>
    <form @submit.prevent="addTodo">   
        <div class="flex flex-col relative pt-7 space-y-4 place-items-center">
          <h2 class="mb-5 mt-2 text-3xl tracking-tight font-semibold text-center text-gray-900 text-black">Event formular</h2>
          <!--tilføj mere tekst til input-->
          <input type="text" id="default-search" class="w-1/2 p-4 text-sm text-black border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a title" required v-model="newTodoContent">
          <input type="text" id="default-search" class="w-1/2 p-4 text-sm text-black border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a date" required v-model="newTodoTitle">
          <input type="text" id="default-search" class="w-1/2 p-4 text-sm text-black border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a description" required v-model="newTodoDescription">
          <input type="text" id="default-search" class="w-1/2 p-4 text-sm text-black border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add an artist" required v-model="newTodoArtist">
          <input type="text" id="default-search" class="w-1/2 p-4 text-sm text-black border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add an venue" required v-model="newTodoVenue">
          
          <button class="mt-5 bg-gray-600 hover:bg-black text-white font-semibold py-2 px-4">
            Gem ændringer
          </button>
        </div>
    </form>
      <div class="flex flex-row place-content-center">
        <div v-for="todo in todos" :key="todo">
          <div class="text-center ml-10 mr-10 mt-10 mb-10 max-w-xxl bg-white border border-black shadow dark:bg-black dark:border-black">
              <a href="#">
                  <img class="rounded-t-lg" src="" alt="" />
              </a>
              <div class="p-10">
                  <a href="#">
                  <p class="mb-2 text-7xl font-normal tracking-widest text-white text-white">   
                    {{ todo.content }}
                  </p>
                  </a>
                  <p class="mb-3 font-semibold text-white tracking-widest">
                    {{ todo.title }}
                  </p>
                  <p class="mb-3 font-normal text-white">
                    {{ todo.description }}
                  </p>
                  <p class="mb-3 font-normal text-white">
                    {{ todo.artist }}
                  </p>
                  <p class="mb-3 font-normal text-white">
                    {{ todo.venue }}
                  </p>
              <button class="text-white font-bold text-2xl" @click="deleteTodo(todo.id)">X</button>
    
              </div>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { 
      collection, onSnapshot, 
      addDoc, doc, deleteDoc, updateDoc, 
    } from "firebase/firestore";
    import { db } from "@/firebase";
    import { ref, onMounted } from 'vue' 
    
    /* 
    firebase refs
    */
    
    const todosCollectionRef = collection(db, "todos")
    const todos = ref([])
    
    onMounted(() => {
      // henter data fra firebase
      onSnapshot(todosCollectionRef, (querySnapshot) => {
        const fbTodos = []
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            content: doc.data().content,
            done: doc.data().done,
            title: doc.data().title,
            description: doc.data().description,
            artist: doc.data().artist,
            venue: doc.data().venue,
            
            }
            fbTodos.push(todo)
        });
        todos.value = fbTodos
      });
    })
    
     // sender data til backend 
    const newTodoContent = ref('')
    const newTodoTitle = ref('')
    const newTodoDescription = ref('')
    const newTodoArtist = ref('')
    const newTodoVenue = ref('')
    
    const addTodo = () => {
    
      // sender data fra frontend(vue) til firebase 
      addDoc(todosCollectionRef, {
        content: newTodoContent.value,
        done: false,
        date: Date.now(),
        title: newTodoTitle.value,
        description: newTodoDescription.value,
        artist: newTodoArtist.value,
        venue: newTodoVenue.value,
      })
      newTodoContent.value = ''
      newTodoTitle.value = ''
      newTodoDescription.value = ''
      newTodoArtist.value = ''
      newTodoVenue.value = ''
    }
    
    const deleteTodo = (id) => {
      deleteDoc(doc(todosCollectionRef, id))
    }
    
    const toggleDone = id => {
      const index = todos.value.findIndex(todo => todo.id === id )
      updateDoc(doc(todosCollectionRef, id), {
        done: !todos.value[index].done
      })
    }
    </script>
    
    
    <style scoped>
    
    </style>
    