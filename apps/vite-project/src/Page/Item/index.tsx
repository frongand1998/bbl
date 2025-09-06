import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledButton,
  StyledButtonOutlined,
  StyledInput,
} from "../../Components/Basic/indext";

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false as boolean);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) handleGetById(id!);
  }, [id]);

  const handleGetById = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/items/${id}`);
    const data = await response.json();
    console.log("🚀 ~ handleGetById ~ data:", data);
    reset(data);
  };

  const handleUpdate = async (data: any) => {
    console.log("🚀 ~ handleUpdate ~ data:", data);
    if (!data) return;

    const response = await fetch(`http://localhost:3000/api/items/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response?.ok) {
      setEditing(false);
      handleGetById(id!);
      setTimeout(() => {
        goBack();
      }, 500);
    }
  };

  const handleCreate = async (data: any) => {
    console.log("🚀 ~ handleCreate ~ data:", data);
    if (!data) return;

    const response = await fetch(`http://localhost:3000/api/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response?.ok) {
      setEditing(false);
      handleGetById(id!);
      setTimeout(() => {
        goBack();
      }, 500);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 flex flex-col gap-4 ">
      <h1 className="text-orange-500">
        Name :{" "}
        <StyledInput
          {...register("name", { required: true })}
          error={errors.name}
        />{" "}
      </h1>
      <p className="text-gray-500">
        Description :{" "}
        <StyledInput
          {...register("description", { required: true })}
          error={errors.description}
        />
      </p>
      {id !== "new" && (
        <p className="text-gray-400">
          Created At : <StyledInput {...register("createdAt")} readOnly />
        </p>
      )}
      <div className="flex gap-2 items-center ">
        <StyledButtonOutlined onClick={goBack}>Cancel</StyledButtonOutlined>

        {id === "new" ? (
          <StyledButton
            onClick={() => {
              handleSubmit(handleCreate)();
            }}
          >
            Create
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() => {
              handleSubmit(handleUpdate)();
            }}
          >
            Update
          </StyledButton>
        )}
      </div>
    </div>
  );
}

export default Item;
