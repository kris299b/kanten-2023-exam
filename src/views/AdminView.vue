<template>
    <form @submit.prevent="addTodo">   
        <div class="dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black flex flex-col relative space-y-4 place-items-center py-5 md:py-7 lg:py-10 ">
          <h2 class="py-3 md:py-12 lg:py-10 text-lg md:text-2xl lg:text-3xl tracking-tight font-normal text-center text-white text-black tracking-widest">EVENT ÆNDRINGER</h2>
          <!--tilføj mere tekst til input-->
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj en titel" required v-model="newTodoContent">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj en dato" required v-model="newTodoTitle">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj en artist" required v-model="newTodoArtist">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj et sted" required v-model="newTodoVenue">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj en pris" required v-model="newTodoPrice">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj en beskrivelse" required v-model="newTodoDescription">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tilføj et billede" required v-model="newTodoImage">
          <input type="file" label="File input" class="" @change="uploadImg">
          <br>
          <button class="text-white" @click.prevent="firebaseAddSingleItem()" :disabled="uploadBtnDisabled"></button> <!-- blokere indtil billedet er uploadet-->
          <div class="py-2 md:py-2 lg:py-2 ">
            <button class="bg-black border border-white hover:bg-black text-white font-normal py-2 px-4">
              Gem ændringer
            </button>
          </div>
        </div>
    </form>
      <div class="dark:bg-black light:bg-black bg-black md:bg-black lg:bg-black grid grid-rows-3 md:grid-flow-col gap-x-32 md:gap-x-20 lg:gap-x-40 gap-y-0 md:gap-y-1 lg:gap-y-1 pb-20 justify-center">
        <div class="space-x-4 py-4" v-for="todo in todos" :key="todo">
          <p class="text-md md:text-2xl lg:text-2xl font-normal tracking-widest text-white text-center ml-5 py-5">  
            {{ todo.content }}
          </p>
          <div class="text-center h-auto max-w-xs md:max-w-xs lg:mx-w-lg border border-white shadow bg-black border-white">
              <div class="">
                <a href="#">
                  <img :src="todo.imgURL" alt="" height="290" width="290" class="mx-auto mt-3">
                </a>
                  <p class="text-sm md:text-1xl font-semibold text-white tracking-widest ml-0 py-2">
                    {{ todo.title }}
                  </p>
                  <p class="text-sm md:text-1xl mb-5 font-normal text-white">
                    {{ todo.artist }}
                  </p>
                  <p class="text-sm md:text-1xl mb-5 font-normal text-white">
                    {{ todo.venue }}
                  </p>
                  <p class="text-sm md:text-1xl mb-3 text-sm font-normal text-white px-5 text-justify">
                    {{ todo.description }}
                  </p>
                  <p class="text-sm md:text-1xl mb-5 font-normal text-white">
                    {{ todo.price }}
                  </p>
                  <div class="py-5 pb-7">
                  <button class="bg-transparent border border-white text-white font-bold py-2 px-4" @click="deleteTodo(todo.id)">SLET</button>
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
      query, orderBy, 
    } from "firebase/firestore";
    import { db } from "@/firebase";
    import { ref, onMounted } from 'vue' 
    import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    
    /* 
    firebase refs
    */
    
    const todosCollectionRef = collection(db, "todos")
    const todos = ref([])
    const todosCollectionQuery = query(todosCollectionRef, orderBy("date", "desc"))
    
    onMounted(() => {
      // henter data fra firebase 
      onSnapshot(todosCollectionQuery, (querySnapshot) => {
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
            image: doc.data().image,
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
    const imgURL = ref('')
    const uploadBtnDisabled = ref('')
    
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
        price: newTodoPrice.value,
        imgURL: imgURL.value,
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

    const storage = getStorage();
 
 // Firebase storage upload image + get download URL + enable button after image uploaded
 const uploadImg = async(event) => {
   let file = event.target.files[0]; // get the file
   console.log("file", file)
 // Create the file metadata
 /** @type {any} */
 const metadata = {
   contentType: 'image/jpeg'
 };
 
 // Upload file and metadata to the object 'images/mountains.jpg'
 const storageRef = refFB(storage, 'images/' + file.name);
 const uploadTask = uploadBytesResumable(storageRef, file, metadata);
 
 // Listen for state changes, errors, and completion of the upload.
 uploadTask.on('state_changed',
   (snapshot) => {
     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
     let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log('Upload is ' + progress + '% done');
     switch (snapshot.state) {
       case 'paused':
         console.log('Upload is paused');
         break;
       case 'running':
         console.log('Upload is running');       
         break;
     }
   }, 
   (error) => {
     // A full list of error codes is available at
     // https://firebase.google.com/docs/storage/web/handle-errors
     switch (error.code) {
       case 'storage/unauthorized':
         // User doesn't have permission to access the object
         break;
       case 'storage/canceled':
         // User canceled the upload
         break;
 
       // ...
 
       case 'storage/unknown':
         // Unknown error occurred, inspect error.serverResponse
         break;
     }
   }, 
   () => {
     // Upload completed successfully, now we can get the download URL
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
       console.log('File available at', downloadURL);
 
       imgURL.value = downloadURL // update variable imgURL and put the image URL link in it. 
       uploadBtnDisabled.value = false // enable button after image uploaded is complete
     });
   }  
 );
 }
    /* 
    const storage 
    const upload img 
    tilføjet imgURL til dit upload
    input til image i HTML
    linie 53 (adminview.vue)
    */ 

    </script>
    
    
    <style scoped>
    
    </style>
    