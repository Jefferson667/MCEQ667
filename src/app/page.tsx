import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (  
    <main className='flex flex-col justify-center items-center '> 

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
              <Link href="fotos"><>fotos</></Link>
              <Link href="videos"><>videos</></Link>
              <a href="https://calendar.google.com/calendar/embed?src=56e35bb80e38dd08b508d485e23fdcb50065a3c85166ca0db5f119fee3f16b78%40group.calendar.google.com&ctz=America%2FSao_Paulo">agenda</a>

              
            </ul>
          </nav>
 
        </header>
      
        <div>
          
          <iframe className='space-x-4 mt-1'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/J6KwFS6M9fc?si=Oc4gQu02bTCPmtOk"
            title="YouTube video player"
            frameBorder="0" // Corrigido 'frameborder' para 'frameBorder'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

    

      </div>

      <div className='mt-1'>
      <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6ZqQ23ngqEU?si=eYq7P-4govKkZfFz"
            title="YouTube video player"
            frameBorder="0" // Corrigido 'frameborder' para 'frameBorder'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

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
