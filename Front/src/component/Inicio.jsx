import Carousels from './Carousels';
const Inicio = () => {
  return (
    <div
      className="flex flex-wrap gap-5 justify-content-center"
      style={{ minHeight: "calc(100% - 16px)" }}
    >
      <section className="w-full">
        <Carousels/>
      </section>
    </div>
  );
};

export default Inicio;
