import React from 'react'
import {Data} from '../data/data'
import styles from '../styles/RoomList.module.css'
import RoomCard from './RoomCard'


function RoomList() {
    return (
        <div className={styles.roomContainer}>
            <div className={styles.heading}>
                <h3>Stays in Finland</h3>
                <p>12+ stays</p>
            </div>
            <div className={styles.listContainer}>
                
                {Data.map(room => {
                    return <RoomCard key={room.id} room={room}/>
                })}
            </div>
        </div>
    )
}

export default RoomList
