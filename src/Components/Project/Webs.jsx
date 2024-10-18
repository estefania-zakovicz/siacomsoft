

   

  return (
    <div className="w-full h-screen overflow-hidden" ref={containerRef}>
      <div className="flex w-[300vw] h-full">
        {/* Comienza en el Panel 2 */}
        <div className="panel w-screen h-full bg-red-500 flex justify-center items-center">
          <h1 className="text-white text-4xl">Panel 2</h1>
        </div>
        <div className="panel w-screen h-full bg-green-500 flex justify-center items-center">
          <h1 className="text-white text-4xl">Panel 3</h1>
        </div>
        <div className="panel w-screen h-full bg-purple-500 flex justify-center items-center">
          <h1 className="text-white text-4xl">Panel 4</h1>
        </div>
      </div>
    </div>
  );
};

export default Webs;
{/* Sección 1 con el video */}
<div
ref={ref}
className="relative h-screen bg-azul-950 overflow-hidden flex items-center justify-between"
>
{/* Texto de introducción con animaciones */}
