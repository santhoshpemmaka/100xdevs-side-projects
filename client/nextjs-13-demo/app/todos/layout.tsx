import TodoList from "./TodoList";
import styles from './TodoList.module.css';
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
    }) {
    return(
        <main style={{display:"flex"}}>
            <div className={styles.todoListHeader}>
                <TodoList />
            </div>
            <div style={{flex:"1"}}>
                {children}
            </div>
        </main>
    )
 
}