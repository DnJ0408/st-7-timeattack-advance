import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // TODO: 필수: useQuery 로 리팩터링 하세요.
  // TODO: 선택: useQuery 로 리팩터링 후, 커스텀훅 useTodosQuery 로 정리해 보세요.
 
  const {isLoading, error, data, refetch} = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/todos');
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json();
    }
  })

  if (isLoading) {
    return <div style={{ fontSize: 36 }}>로딩중...</div>;
  }

  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <>
      <h2>서버통신 투두리스트 by useQuery</h2>
      <TodoForm fetchData={refetch}/>
      <TodoList todos={data} />
    </>
  );
}
