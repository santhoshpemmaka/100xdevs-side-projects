import Search from './Search';
import type { Metadata } from 'next';
import './Search.css';
export const metadata: Metadata = {
    title: 'Search Text',
    description: 'Demo NextJS project',
  }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main style={{display:'flex'}}>
            <div >
                <h3 className='search'>Search</h3>
            </div>
            <div style={{flex:"1", marginLeft : "20px"}}>
                <Search />
                <div>
                    {children}
                </div>
            </div>
        </main>
    )
    
}

export default RootLayout;