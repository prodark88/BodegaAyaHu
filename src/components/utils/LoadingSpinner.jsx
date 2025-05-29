const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-40">
      <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
