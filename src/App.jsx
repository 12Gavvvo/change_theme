
import ThemeButton from "./components/ThemeButton.jsx";
import Form from "./components/Form.jsx";



export default function App() {
    return(
        //<ThemeButton/>
       <div className={"flex w-full h-svh"} >
           <div className={"w-full lg:w-1/2 flex items-center justify-center"}>
               <Form/>
           </div>
           <div className={'w-1/2 hidden relative lg:flex h-full bg-gradient-to-tr from-gray-500 to-pink-500 items-center justify-center'}>
               <div className={'w-60 h-60 bg-gradient-to-tr from-red-500 to-pink-500 rounded-full  animate-spin'}></div>
               <div className={'w-full h-1/2 bottom-0 absolute bg-blue-600/40 backdrop-blur-lg   '}></div>
           </div>

       </div>
    )
}