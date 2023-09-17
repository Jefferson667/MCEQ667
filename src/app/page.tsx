import Image from 'next/image'

export default function Home() {
  return (  
    <main className='flex flex-col justify-center items-center'> 
        <header className='flex flex-col justify-center items-center bg-gray-200 w-[800px] h-[300px] gap-5'>  

        <Image
          src="/logo.jpg"
          width={100}
          height={100}
          alt="Picture of the author"
        />

        <section>
          <h1 className=' font-bold  text-[30px]'>
            #MCEQ667
          </h1>
          <h1 className='flex justify-center'>
            moto clube
          </h1>
        </section>

        <nav>
          <ul className='flex gap-5 cursor-pointer'>
              <li><a>agenda</a></li>
              <li><a>fotos</a></li>
              <li><a>Agenda</a></li>
              
          </ul>
        </nav>  
        </header>
      
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZqQ23ngqEU?si=eYq7P-4govKkZfFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
       
        
          <h1 className='font-bold text-[25px] mt-8'>
          Sobre Nós
          </h1>

          <h1 className='w-[800px] mt-3'>
          "🏍️🙏 Unidos na Fé e na Estrada! 🙏🏍️ Motoclube da Igreja Quadrangular: Explorando a vida sobre duas rodas, guiados pela nossa fé. Juntos na jornada, juntos na devoção. 🕊️🛣️ #FéEstradaIgrejaQuadrangular"
          </h1>

          <h1 className='font-bold text-[25px] mt-24'> 
          Contato
          </h1>

          <h1 className='mt-6'>
          Entre em contato conosco pelo email: contato@motoclubeigreja.com
          </h1>

        <section>
          
        </section>

      <footer className='flex justify-center bg-gray-200 w-[800px] h-[80px] items-center '>
        <h1 className='flex'>
        © 2023 Motoclube da Igreja. Todos os direitos reservados.
        </h1>
      </footer>
  
    </main>

  )
}
