
import { useState } from "react"

//pasamos props a TwitterFollowCard, definimos props en APP
export function TwitterFollowCard ({ children, userName, initIsFollowing }) {
   //children lo que esta envuelto entre elemento
   const [isFollowing, setIsFollowing] = useState(initIsFollowing)

   const text = isFollowing ? 'Following' : 'Follow'
   const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="Mi avatar" 
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-info-userName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}