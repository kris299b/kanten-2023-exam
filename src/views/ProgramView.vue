<template>
    <div>
        <p class="font-sans text-center sm:Roboto hidden md:block font-sans text-4xl text-black font-semibold mt-20 mb-10 tracking-widest">PROGRAM</p>
        <p class="font-sans text-center sm:Roboto hidden md:block font-sans text-2xl text-black font-semibold mb-20 tracking-widest">KOMMENDE EVENTS</p>
    </div>

    <div>
    <div v-for="todo in todos" :key="todo">
      <div class="text-center ml-10 mr-10 mt-10 mb-10 max-w-xxl bg-white border border-black shadow dark:bg-black dark:border-black">
          <a href="#">
            <img class="rounded-t-lg" src="" alt="" />
          </a>
          <div class="p-10">
            <a href="#">
            <p class="mb-2 text-7xl font-normal tracking-widest text-white text-white ">   
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
            <button class="text-md font-semibold bg-transparent hover:bg-black text-white font-bold mt-5 hover:text-white py-3 px-6 border-2 border border-white hover:border-white tracking-widest">
              KØBT BILLET
            </button>
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

<style lang="scss" scoped>

</style>