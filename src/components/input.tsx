type Input = {
    inputValue: string,
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({ inputValue, setInputValue }:Input) => {
    return (
          <input type="text" className="w-full" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>

    )
}