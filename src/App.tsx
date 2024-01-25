import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Input } from "./components/input";
import { Button } from "./components/Button";
import { type Items } from "./components/types/utils";
import List from "./components/List";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };


  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl p-10 font-bold text-blue-400">
          React Todo-List
        </h1>
        <Header />
        <form
          className="w-[350px] flex items-center flex-col p-10"
          onSubmit={handleSubmit}
        >
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Button className={"bg-blue-950 p-1 m-3 text-white w-full"}>
            Add
          </Button>
          <section className="h-52 overflow-auto w-full ">
            <List items={items} setItems={setItems}/>
          </section>
        </form>
      </div>
    </>
  );
}

export default App;
