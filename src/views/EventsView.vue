<template>
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-40">
            <p class="font-sans sm:Roboto hidden md:block font-sans text-6xl text-white font-semibold mt-40 tracking-widest">EVENTS</p>
            <p class="font-sans sm:Arial hidden md:block text-1xl text-white text-left font-normal pb-5 mt-10 tracking-wide ml-40 mr-40">Kanten holder en masse fede events og koncerter i løbet af året, og de er delt op i 4 temaer: DEFT, MANA CLUB, VERTEX og X-MASSIVE DUB. Hvert tema har sin egen musikgenre, som kan være alt fra Hip Hop, Pop, Indie, Dub, Reggae og mange flere. </p>
            <p class="font-sans sm:Arial hidden md:block text-1xl text-white text-left font-normal pb-5 mt-1 tracking-wide ml-40 mr-40">Udover at holde events og koncerter, holder Kanten også andre former for kunstneriske events, heriblandt kunst - og lyd ferniseringer. </p>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/event-billede.jpg" alt="">
  </div>

  <div>
    <p class="font-sans text-center sm:Roboto hidden md:block font-sans text-4xl text-black font-semibold mt-20 mb-20 tracking-widest">FASTE EVENTS</p>
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
            <button class="text-md font-semibold bg-transparent hover:bg-black text-white font-bold mt-5 hover:text-white py-3 px-6 border-2 border border-white hover:border-white tracking-widest">
              <RouterLink to="/program">SE PROGRAM</RouterLink>
            </button>
          </div>
      </div>
    </div>
  </div>

  <div>
    <p class="font-sans text-center sm:Roboto hidden md:block font-sans text-4xl text-black font-semibold mt-20 mb-20 tracking-widest">ANDRE EVENTS</p>
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
            <button class="text-md font-semibold bg-transparent hover:bg-black text-white font-bold mt-5 hover:text-white py-3 px-6 border-2 border border-white hover:border-white tracking-widest">
              <RouterLink to="/program">SE PROGRAM</RouterLink>
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