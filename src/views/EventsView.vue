<template>
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex items-center">
          <div class="h-screen w-screen text-center bg-black bg-opacity-10">
            <div>
              <p class="font-sans sm:Roboto md:block font-sans text-2xl md:text-5xl lg:text-7xl text-black font-semibold mt-5 md:mt-20 lg:mt-20 tracking-widest">KANTEN</p>
              <p class="font-sans sm:Roboto md:block font-sans text-xs md:text-sm lg:text-2xl text-black py-0 md:py-1 lg:py-3 tracking-widest">KLAR TIL FEDE MUSIK EVENTS ?</p>
            </div>
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="invisible md:invisible lg:visible w-20 h-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    <img class="image" src="../assets/event-billedet.jpg" alt="">
  </div>


  <div class="dark:bg-black px-0 md:px-4 lg:px-4 dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black">
    <p class="font-sans text-center sm:text-center sm:Roboto md:block font-sans text-base md:text-xl lg:text-xl text-white font-normal py-10 tracking-widest">EVENT INFO</p>
    <p class="font-sans arial md:block text-sm md:text-base lg:text-base text-neutral-200 text-center sm:text-center font-light tracking-wide px-10 sm:px-20 md:px-20 lg:px-40 text-justify sm:text-justify mb-10">Kanten holder en masse musik events og koncerter i løbet af året, og de er delt op i 4 temaer: DEFT, MANA CLUB, VERTEX og X-MASSIVE DUB. Hvert tema har sin egen musikgenre, som kan være alt fra Hip Hop, Pop, Indie, Dub, Reggae og mange flere. Udover at holde events og koncerter, holder Kanten også andre former for kunstneriske events, heriblandt kunst - og lyd ferniseringer.</p>
    <p class="font-sans text-center sm:Roboto md:block font-sans text-base md:text-xl lg:text-xl text-white font-normal pb-5 md:pb-8 lg:pb-10 tracking-widest">KOMMENDE EVENTS</p>
  </div>

<!-- v-for bruges til at rendere objekter-->
  <div class="dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black grid grid-rows-3 md:grid-flow-col gap-x-32 md:gap-x-20 lg:gap-x-40 gap-y-0 md:gap-y-1 lg:gap-y-1 pb-20 justify-center">
    <div class="py-4" v-for="todo in todos" :key="todo">
      <p class="text-md md:text-2xl lg:text-2xl font-normal tracking-widest text-white text-center py-2 md:py-3 lg:py-3">   
          {{ todo.content }}
      </p>
      <div class="dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black text-center h-auto max-w-xs md:max-w-xs lg:mx-w-lg border border-white shadow border-white">
          <div class="">
            <a href="#">
            <img :src="todo.imgURL" alt="" height="290" width="290" class="mx-auto mt-3">
            </a>
            <p class="font-sans roboto text-sm md:text-1xl font-semibold text-white tracking-widest ml-0 py-5">
              {{ todo.title }}
            </p>
            <p class="font-sans roboto text-sm md:text-1xl mb-5 font-normal text-white">
              {{ todo.artist }}
            </p>
            <p class="font-sans roboto text-sm md:text-1xl mb-5 font-normal text-white">
              {{ todo.venue }}
            </p>
            <p class="font-sans roboto text-sm md:text-1xl mb-5 font-normal text-white">
              {{ todo.price }}
            </p>
            <p class="font-sans arial text-sm md:text-1xl mb-3 text-sm font-light text-white px-5 text-justify">
              {{ todo.description }}
            </p>
            <div class="py-5 pb-7">
              <a href="https://billetto.dk/users/kanten">
                <button class="font-sans roboto text-xs md:text-xs lg:text-xs font-semibold bg-transparent hover:bg-black text-white font-bold hover:text-white py-3 px-6 border-2 border border-white hover:border-white tracking-widest">
                  KØB BILLET
                </button>
              </a>
            </div>
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
            price: doc.data().price,
            imgURL: doc.data().imgURL
            
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
    const newTodoPrice = ref('')
    
    const addTodo = () => {
    
      // sender data fra frontend(vue) til firebase 
      addDoc(todosCollectionRef, {
        content: newTodoContent.value,
        done: false,
        date: Date.now(),
        title: newTodoTitle.value,
        description: newTodoDescription.value,
        artist: newTodoArtist.value,
        price: newTodoPrice.value,
        venue: newTodoVenue.value,
      })
      newTodoContent.value = ''
      newTodoTitle.value = ''
      newTodoDescription.value = ''
      newTodoArtist.value = ''
      newTodoPrice.value = ''
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