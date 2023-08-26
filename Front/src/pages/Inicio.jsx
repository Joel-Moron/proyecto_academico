
import About from '../component/About';
import Carousels from '../component/Carousels';

const Inicio = () => {
  return (
    <div
      className="flex flex-wrap gap-5 justify-content-center"
      style={{ minHeight: "calc(100% - 16px)" }}
    >
      <section className="w-11">
        <Carousels/>
      </section>
      <section className='w-full'>
        <About/>
      </section>
    </div>
  );
};

export default Inicio;
