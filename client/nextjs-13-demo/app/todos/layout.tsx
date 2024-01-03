import TodoList from "./TodoList";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
    }) {
    return(
        <main style={{display:"flex"}}>
            <div>
                <TodoList />
            </div>
            <div style={{flex:"1"}}>
                {children}
            </div>
        </main>
    )
 
}