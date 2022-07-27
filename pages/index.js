
import Cat from './components/cat.js'

export default function Home() {
  return (

      <div class="flex flex-col items-center justify-center w-full h-screen">
        <h1 class="text-3xl">The Cat App</h1>
        <Cat path={"/images/cat_1.gif"}/>
        <Cat path={"/images/cat_2.gif"}/>
        <Cat path={"/images/cat_3.gif"}/>

      </div>


  )
}
