import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'ekatemi',
        name: 'Ekaterina Mikhaylova',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Anjel',
        isFollowing: false
    },
    {
        userName: 'nico',
        name: 'Nico N.',
        isFollowing: true
    }
]


export function App () {
    return (
        //same as React.Fragment isFollowing boolean
        <div className='App'>
            {
                users.map( user => {
                    const {userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                        userName={userName}
                        initIsFollowing={isFollowing} 
                        key={userName}   
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
        
        </div>
    )
}