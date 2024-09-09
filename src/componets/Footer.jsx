const Footer = () => {
  return (
    <div className='w-full mt-12 bg-red-600 text-gray-200 py-4 px-4'>
      {/* Contenedor Principal */}
      <div className='max-w-[1200px] mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6'>
        {/* Columnas */}
        <div>
          <h4 className='font-bold uppercase pt-1 mb-4 text-sm transition-colors duration-300 hover:text-orange-500 cursor-pointer'>
            Islas
          </h4>
          <ul>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Llingua</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Quenac</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Chaulinec</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Lemuy</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Apiao</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Alao</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase pt-1 mb-4 text-sm transition-colors duration-300 hover:text-orange-500 cursor-pointer'>
            Galería Fotos
          </h4>
          <ul>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Arquitectura</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Paisajes</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Flora y Fauna</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase pt-1 mb-4 text-sm transition-colors duration-300 hover:text-orange-500 cursor-pointer'>
            Contacto
          </h4>
          <ul>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Llingua</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Quenac</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Chaulinec</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Lemuy</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Apiao</li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold uppercase pt-1 mb-4 text-sm transition-colors duration-300 hover:text-orange-500 cursor-pointer'>
            Tours
          </h4>
          <ul>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Tour Chepu</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Tantauco</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Isla Quinchao</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Aves de Chiloe</li>
            <li className='py-0.5 text-sm transition-transform duration-300 hover:scale-105 cursor-pointer'>Bosque Piedra</li>
          </ul>
        </div>
        {/* Formulario */}
        <div className='col-span-2 md:col-span-4 lg:col-span-2 flex flex-col items-start justify-center'>
          <p className='font-bold uppercase text-sm transition-colors duration-300 hover:text-orange-500 cursor-pointer mb-4'>
            Suscríbete
          </p>
          <form className='flex flex-col sm:flex-row w-full'>
            <input
              className='w-full p-2 mr-4 mb-4 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300'
              type='email'
              placeholder='Enter Email...'
            />
            <button className='p-2 rounded-lg bg-red-800 text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
              Suscribir
            </button>
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div className='text-center py-4 bg-red-600 text-gray-100'>
        © {new Date().getFullYear()} Luis Millalonco. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;
