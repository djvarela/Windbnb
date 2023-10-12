

const cleanHistory = (setHistory,setSearchCity,isActive) => {
  setHistory([])
  setSearchCity("");
  localStorage.clear()
  isActive()
}

export default cleanHistory
