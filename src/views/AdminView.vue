<template>
    <form @submit.prevent="addTodo">   
        <div class="dark:bg-black flex flex-col relative space-y-4 place-items-center py-5 md:py-7 lg:py-10 ">
          <h2 class="py-3 md:py-12 lg:py-10 text-lg md:text-2xl lg:text-3xl tracking-tight font-normal text-center text-white text-black tracking-widest">EVENT ÆNDRINGER</h2>
          <!--tilføj mere tekst til input-->
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a title" required v-model="newTodoContent">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a date" required v-model="newTodoTitle">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a description" required v-model="newTodoDescription">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add an artist" required v-model="newTodoArtist">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add an venue" required v-model="newTodoVenue">
          <input type="text" id="default-search" class="sm:w-3/6 md:w-1/2 lg:w-1/2 p-4 h-5 md:h-10 lg:h-10 text-sm text-black border border-white bg-white focus:ring-blue-500 focus:border-blue-500 bg-white border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add an image" required v-model="newTodoImage">
          <input type="file" label="File input" @change="uploadImg">
          <br>
          <button @click.prevent="firebaseAddSingleItem()" :disabled="uploadBtnDisabled">Add item</button>
          <div class="py-3 md:py-6 ">
            <button class="bg-black border border-white hover:bg-black text-white font-normal py-2 px-4">
              Gem ændringer
            </button>
          </div>
        </div>
    </form>
      <div class="dark:bg-black flex flex-row md:flex-col lg:flex-col place-items-center grid md:grid-cols-2 lg:grid-cols-2 py-5 flex justify-center p-10">
        <div v-for="todo in todos" :key="todo">
          <div class="text-center max-w-xxl bg-black border border-white">
              <a href="#">
                  <img class="rounded-t-lg" src="" alt="" />
              </a>
              <div class="p-10">
                  <a href="#">
                  <p class="mb-2 text-2xl font-normal tracking-widest text-white">   
                    {{ todo.content }}
                  </p>
                  <img :src="todo.imgURL" alt="" height="200" width="200">
                  </a>
                  <p class="mb-4 text-1xl font-semibold text-white tracking-widest">
                    {{ todo.title }}
                  </p>
                  <p class="mb-3 text-1xl font-normal text-white">
                    {{ todo.description }}
                  </p>
                  <p class="mb-3 text-1xl font-normal text-white">
                    {{ todo.artist }}
                  </p>
                  <p class="mb-3 text-1xl font-normal text-white">
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
    import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    
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
            venue: doc.data().image,
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
        imgURL: imgURL.value,
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
    