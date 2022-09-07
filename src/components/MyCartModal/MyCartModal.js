import React from 'react'
import ReactDom from 'react-dom';
import './MyCartModal.css';

const modal = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '60%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    backgroundColor: 'lightblue',
    padding:'50px',
    zIndex: 1000,
}

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
}

// {open, children, onClose}
export default function MyCartModal({open, children, onClose}) {

    if(!open) return null

    return ReactDom.createPortal(
        <>
            <div style={overlay} />

           
            <div style={modal}>
                {children}
                
                <button onClick={onClose} className="button-close"> Close </button>
            </div>

        </>, document.getElementById('portal')
    )
}