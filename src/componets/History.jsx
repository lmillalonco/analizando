const History = () => {
    return (
      <div className='h-auto bg-yellow-100 mx-auto mb-52 pt-16 lg:mb-[10%] md:mb-[35%] px-6 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
          <h3 className='text-2xl font-bold hover:text-[#ea580c] duration-500 cursor-pointer'>
            Provincia de Chiloé
          </h3>
          <p className='mt-4'>
          La Provincia de Chiloé comprende la totalidad del archipiélago del mismo nombre, está formada por más de 40 islas menores y la Isla grande, la cual posee una superficie de 9.181,5kms², siendo la isla más grande de Sudamérica después de Tierra del Fuego.

Los Poblados chilotes conservan el encanto, tradición y costumbres de sus habitantes, lo que constituye la principal riqueza de estas tierras.

Esta área se caracteriza por su gran actividad marítima, propia de un archipiélago y por su cultura culinaria, rica en carnes y mariscos.
Generosa es la isla por su artesanía, que se despliega en colores y texturas: mimbre, lana, madera y otras artes manuales, con una fuerte presencia religiosa que se descubre a través de sus 150 iglesias y de sus múltiples festividades

Los palafitos, construcciones sobre pilares en el agua son la arquitectura típica de Chiloé.

Está integrada por las comunas de Castro, Ancud, Quemchi, Dalcahue, Curaco de Vélez, Quinchao, Puqueldón, Chonchi, Queilén y Quellón
          </p>
        </div>
  
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 col-span-2'>
          <img
            className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
            src='https://static.wixstatic.com/media/7d37ec_b9187a9e0fda4af6a165d038df05ef61.jpg/v1/fill/w_428,h_347,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7d37ec_b9187a9e0fda4af6a165d038df05ef61.jpg'
            alt=''
          />
           <img
            className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
            src='https://static.wixstatic.com/media/7d37ec_d5df092393ef4486bdcfbab96eaea7ef.jpg/v1/fill/w_849,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7d37ec_d5df092393ef4486bdcfbab96eaea7ef.jpg'
            alt=''
            />
          <img
            className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
            src='https://static.wixstatic.com/media/7d37ec_d5df092393ef4486bdcfbab96eaea7ef.jpg/v1/fill/w_849,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7d37ec_d5df092393ef4486bdcfbab96eaea7ef.jpg'
            alt=''
          />
          <img
            className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
            src='https://live.staticflickr.com/3473/3357981239_a818214cbf_c.jpg'
            alt=''
          />
          
        </div>
      </div>
    );
  };

  export default History;