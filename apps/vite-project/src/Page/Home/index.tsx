import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledTd,
  StyledTr,
} from "../../Components/Basic/indext";

function Home({}) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetAll();
  }, []);

  const handleGetAll = async () => {
    const response = await fetch("http://localhost:3000/api/items");
    const data = await response.json();
    console.log("🚀 ~ handleGetAll ~ data:", data);
    setItems(data);
  };

  const handleRemove = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });
    console.log("🚀 ~ handleRemove ~ response:", response);
    if (response?.ok) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div>
        <StyledButton onClick={() => navigate("/items/new")}>
          + Create New Item
        </StyledButton>
      </div>
      <div className="overflow-auto w-full border border-gray-200 rounded-md mt-4   h-96">
        <table className="w-full table-auto border-collapse  ">
          <thead className="sticky top-0 bg-gray-500 text-white z-10">
            <tr>
              <StyledTd>Name</StyledTd>
              <StyledTd>Description</StyledTd>
              <StyledTd>Created At</StyledTd>
              <StyledTd colSpan={2} />
            </tr>
          </thead>
          <tbody>
            {items?.map((item: any, index: number) => (
              <StyledTr key={index}>
                <StyledTd>{item?.name || "-"}</StyledTd>
                <StyledTd>{item?.description || "-"}</StyledTd>
                <StyledTd className="whitespace-nowrap">
                  {item?.createdAt || "-"}
                </StyledTd>
                <StyledTd onClick={() => navigate(`/items/${item.id}`)}>
                  EDIT
                </StyledTd>{" "}
                <StyledTd onClick={() => handleRemove(item?.id)}>
                  REMOVE
                </StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {items?.map((item: any) => (
        <div
          onClick={() => navigate(`/items/${item.id}`)}
          key={item?.id}
          className="cursor-pointer p-2 rounded-md active:scale-95 flex flex-col transition-all hover:bg-orange-500 group "
        >
          <span>{item?.name}</span>
          <span>{item?.description}</span>
          <span>{item?.createdAt}</span>
          <span className=" text-orange-500 group-hover:text-gray-200">
            Click for edit
          </span>
        </div>
      ))} */}
    </div>
  );
}

export default Home;
