const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/lovable-uploads/614b8a04-14d9-40e1-b61b-08b28b679356.png" 
          alt="Ayaman Estudio" 
          className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto mx-auto animate-pulse"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;