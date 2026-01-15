import classes from './description.module.css'
import CandleStickImg from './../assets/second-img.jpg'
import { useState } from 'react'

function Description() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const [isHoveringMain, setIsHoveringMain] = useState(false)
    const [isHoveringItem, setIsHoveringItem] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <main
            className={classes.main_description}
            onMouseEnter={() => setIsHoveringMain(true)}
            onMouseLeave={() => setIsHoveringMain(false)}
            onMouseMove={handleMouseMove}
        >
            <img
                src={CandleStickImg}
                onMouseEnter={() => setIsHoveringItem(true)}
                onMouseLeave={() => setIsHoveringItem(false)}
                alt=""
            />

            <header
                className={classes.description_text}
                onMouseEnter={() => setIsHoveringItem(true)}
                onMouseLeave={() => setIsHoveringItem(false)}
            >
                <h3>Voce ira ganhar muito Dinheiro Aqui!</h3>
                <p>
                    Este livro e completo, voce aprendera tudo o que e necessario no
                    Day Trading e poder ate ser essa sua Profissão
                </p>
            </header>

            {isHoveringMain && (
                <div
                    className={classes.cursor}
                    style={{
                        top: mouse.y,
                        left: mouse.x,
                        width: !isHoveringItem ? 15 : 80,
                        height: !isHoveringItem ? 15 : 80,
                        transition: 'all 0.1s linear',
                    }}
                />
            )}
        </main>
    )
}

export default Description
