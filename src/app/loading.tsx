const GlobalLoading = async () => {
  return (
    <div
      className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
    >
      <h1
        className="text-indigo-500 top-1/2 my-0 mx-auto block relative w-0 h-0"
      >
        Loading
      </h1>
    </div>
  )
}

export default GlobalLoading;
