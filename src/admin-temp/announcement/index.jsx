import { useRef, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./announcement.css";

export default function Announcement() {
    const textareaRef = useRef();
    const [open, setOpen] = useState(false);

    const handleSend = async () => {
        const response = await fetch('http://localhost:3001/frontend/annoucements', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: textareaRef.current.value })
        });

        if (response.ok) {
            setOpen(true);
            textareaRef.current.value = '';
            setTimeout(() => setOpen(false), 3000); // Close the alert after 3 seconds
        }
    };

    const handleClose = () => {
        textareaRef.current.value = '';
    };

    return (
        <div className="announcement">
            <div class="content">
                <div class="box">
                    <div class="ann">Announcement</div>
                    <textarea ref={textareaRef} type="text" rows="15"></textarea>
                    <div class="buttons">
                        <button onClick={handleSend}>
                            <span class="material-symbols-outlined">
                                send
                            </span>
                            <div>Send</div>
                        </button>
                        <button onClick={handleClose}>
                            <span class="material-symbols-outlined">
                                close
                            </span>
                            <div>Close</div>
                        </button>
                    </div>
                </div>
            </div>
            {open && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ bgcolor: 'green', color: 'white' }}>
        Submitted successfully
    </Alert>
</Snackbar>}
        </div>
    );
}