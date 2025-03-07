import { useQueryClient } from "@tanstack/react-query";

export default function TodoForm({ fetchData }) {

  // TODO: 필수: useMutation 으로 리팩터링 하세요.
  // TODO: 선택: useMutation 으로 리팩터링 후, useTodoMutation 커스텀훅으로 정리해 보세요.
  
  const queryClient = useQueryClient()

  const mutation = useMutation(

  )
  
  const handleAddTodo = async (e) => {
    e.preventDefault();
    
    await todoApi.post("/todos", {
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      createdAt: Date.now(),
    });
    await fetchData();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        required
      />
      <label htmlFor="contents">내용:</label>
      <input
        id="contents"
        name="contents"
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
