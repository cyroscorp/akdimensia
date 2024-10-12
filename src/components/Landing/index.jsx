import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function Landing() {
    return (
        <>
            <h2>Find Humans as per your mood</h2>
            <h3>one place for brainstorming, connecting and hanging out</h3>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
            <h3>Developed By AKD </h3>
        </>
    );
}

export { Landing };
