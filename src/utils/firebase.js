
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc , doc , updateDoc, deleteDoc } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyCSJhVr7DbZ71OVy9L8kP2qJsjAz0B8GzY",
  authDomain: "hampiyura-react-44995.firebaseapp.com",
  projectId: "hampiyura-react-44995",
  storageBucket: "hampiyura-react-44995.appspot.com",
  messagingSenderId: "1028369824752",
  appId: "1:1028369824752:web:f904555b001e4dcf2d3b35"
};


const app = initializeApp(firebaseConfig);
const dataBase = getFirestore() //a trves de esta constante puedo revisar mi base de datos 

// CRUD PRODUCTS - CREATE READ UPDATE DELETE //

export const cargarBDD = async() => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
    await addDoc (collection(dataBase,"productos"), {    
        idCategoria: prod.idCategoria,
        categoria: prod.categoria,
        name: prod.name,
        image: prod.image,
        price: prod.price,
        description: prod.description,
        stock: prod.stock,
        amount: prod.amount  
      })
  })

}

export const getProducts = async () => {
  const productos = await getDocs (collection(dataBase,"productos"))
  const items = productos.docs.map(prod => {
    return {...prod.data() , id: prod.id}
  })
  return items
}

export const getProduct = async (id) => {
  const producto = await getDoc(doc(dataBase, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}
  
export const updateProduct = async (id, info) => {
  await updateDoc(doc(dataBase, "productos", id), info)
}

export const deleteProduct = async (id) => {
  await deleteDoc (doc(dataBase, "productos" , id))
}


//CREATE AND READ ORDEN DE COMPRA
export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(dataBase, "ordenesCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const oC = await getDoc(doc(dataBase, "ordenesCompra", id))
  const ordenCompra = { ...oC.data(), id: oC.id }
  return ordenCompra
}